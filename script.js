import { Serie } from "./modelo.js";
import {
  mostrarResultados,
  mostrarCarregando,
  mostrarErro,
  limparResultados,
  mostrarVazio,
  atualizarResumoPerfil,
  atualizarStatus,
  renderizarResultados,
  criarMensagemCallback,
  atualizarMensagemCallback
} from "./ui.js";

const CHAVE_PERFIL = "cinematchPerfil";

const form = document.querySelector("#perfil-form");
const nomeInput = document.querySelector("#nome");
const idadeInput = document.querySelector("#idade");
const erroForm = document.querySelector("#form-erro");
const trocarPerfilBtn = document.querySelector("#trocar-perfil");
const ordenacaoSelect = document.querySelector("#ordenacao");

let perfilAtual = null;
let resultadosAtuais = [];
let contadorCalculos = criarContador();

function criarContador() {
  let total = 0;

  return function registrarCalculo() {
    total += 1;
    return total;
  };
}

function obterPerfilDoFormulario() {
  const generos = [...document.querySelectorAll('input[name="genero"]:checked')]
    .map(input => input.value);

  return {
    nome: nomeInput.value.trim(),
    idade: Number(idadeInput.value),
    generos
  };
}

function validarPerfil(perfil) {
  if (perfil.nome.length < 2) {
    return "Digite seu nome com pelo menos 2 caracteres.";
  }

  if (
    !Number.isInteger(perfil.idade) ||
    perfil.idade < 1 ||
    perfil.idade > 120
  ) {
    return "Digite uma idade válida.";
  }

  if (perfil.generos.length === 0) {
    return "Escolha pelo menos um gênero.";
  }

  return "";
}

function salvarPerfil(perfil) {
  localStorage.setItem(CHAVE_PERFIL, JSON.stringify(perfil));
}

function carregarPerfil() {
  const salvo = localStorage.getItem(CHAVE_PERFIL);

  if (!salvo) return null;

  try {
    const perfil = JSON.parse(salvo);

    if (!perfil.nome || !perfil.idade || !Array.isArray(perfil.generos)) {
      return null;
    }

    return perfil;
  } catch {
    localStorage.removeItem(CHAVE_PERFIL);
    return null;
  }
}

function preencherFormulario(perfil) {
  nomeInput.value = perfil.nome;
  idadeInput.value = perfil.idade;

  document.querySelectorAll('input[name="genero"]').forEach(input => {
    input.checked = perfil.generos.includes(input.value);
  });
}

async function buscarCatalogo() {
  await new Promise(resolve => setTimeout(resolve, 500));

  const response = await fetch("https://api.tvmaze.com/shows?page=0");

  if (!response.ok) {
    throw new Error(`A TVMaze retornou HTTP ${response.status}.`);
  }

  const dados = await response.json();

  if (!Array.isArray(dados)) {
    throw new Error("A TVMaze retornou um formato inesperado.");
  }

  return dados;
}

function transformarCatalogo(dados) {
  return dados
    .filter(show => Array.isArray(show.genres) && show.genres.length > 0)
    .filter(show => Number(show.rating?.average) > 0)
    .sort(
      (a, b) =>
        (b.rating.average || 0) - (a.rating.average || 0)
    )
    .slice(0, 30)
    .map(show => ({
      id: show.id,
      titulo: show.name,
      generos: show.genres,
      duracaoMinutos: show.runtime || show.averageRuntime || null,
      nota: show.rating?.average || 0,
      imagem: show.image?.original || show.image?.medium || "",
      url: show.url || "#",
      resumo: show.summary || "",
      status: show.status || "",
      estreia: show.premiered || "",
      plataforma:
        show.network?.name ||
        show.webChannel?.name ||
        "Não informada"
    }));
}

/*
 * Calcula a compatibilidade de uma série com os gêneros
 * escolhidos pelo usuário.
 *
 * A classe Serie fica responsável pelo cálculo.
 * Esta função organiza o processo e prepara os dados
 * que serão usados pela interface.
 */
function calcularCompatibilidadeDaSerie(dados, generosPerfil) {
  const serie = new Serie(dados);

  const compatibilidade =
    serie.calcularCompatibilidade(generosPerfil);

  return {
    ...compatibilidade,

    resumoCurto: () => serie.resumoCurto(),

    obterDuracao: () => serie.obterDuracao()
  };
}

function calcularEstatisticas(resultados) {
  /*
   * REDUCE:
   * soma os percentuais e conta os gêneros encontrados
   * em comum em todas as recomendações.
   */
  return resultados.reduce(
    (acumulado, resultado) => ({
      totalGenerosComuns:
        acumulado.totalGenerosComuns +
        resultado.generosEmComum.length,

      somaCompatibilidade:
        acumulado.somaCompatibilidade +
        resultado.percentual
    }),
    {
      totalGenerosComuns: 0,
      somaCompatibilidade: 0
    }
  );
}

function obterMediaCompatibilidade(estatisticas, total) {
  return total > 0
    ? Math.round(estatisticas.somaCompatibilidade / total)
    : 0;
}

function ordenarResultados(resultados, criterio) {
  return [...resultados].sort((a, b) => {
    if (criterio === "nota") {
      return b.nota - a.nota;
    }

    if (criterio === "nome") {
      return a.titulo.localeCompare(b.titulo);
    }

    return b.percentual - a.percentual || b.nota - a.nota;
  });
}

async function carregarRecomendacoes(perfil) {
  perfilAtual = perfil;

  mostrarResultados();
  limparResultados();
  mostrarCarregando();

  try {
    const catalogo = await buscarCatalogo();
    const dadosProntos = transformarCatalogo(catalogo);

    resultadosAtuais = dadosProntos.map(dados =>
      calcularCompatibilidadeDaSerie(
        dados,
        perfil.generos
      )
    );

    const estatisticas =
      calcularEstatisticas(resultadosAtuais);

    const media = obterMediaCompatibilidade(
      estatisticas,
      resultadosAtuais.length
    );

    const calculos = contadorCalculos();

    atualizarResumoPerfil(perfil, {
      totalGenerosComuns:
        estatisticas.totalGenerosComuns,

      mediaCompatibilidade: media
    });

    const ordenados = ordenarResultados(
      resultadosAtuais,
      ordenacaoSelect.value
    );

    renderizarResultados(ordenados.slice(0, 12));

    atualizarStatus(
      `${ordenados.length} séries analisadas · cálculo nº ${calculos} · média de compatibilidade: ${media}%`
    );

    criarMensagemCallback(
      perfil.nome,
      atualizarMensagemCallback
    );

  } catch (erro) {
    console.error("Erro no CineMatch:", erro);

    const mensagem =
      erro instanceof TypeError
        ? "Ocorreu um erro ao montar as recomendações. Atualize a página e tente novamente."
        : "Não foi possível carregar as séries. Verifique sua internet e tente novamente.";

    mostrarErro(mensagem);

    mostrarVazio(
      "Não foi possível exibir as recomendações agora. Tente novamente."
    );
  }
}

form.addEventListener("submit", async event => {
  event.preventDefault();

  const perfil = obterPerfilDoFormulario();
  const erro = validarPerfil(perfil);

  erroForm.textContent = erro;

  if (erro) return;

  salvarPerfil(perfil);

  await carregarRecomendacoes(perfil);
});

trocarPerfilBtn.addEventListener("click", () => {
  localStorage.removeItem(CHAVE_PERFIL);

  perfilAtual = null;
  resultadosAtuais = [];

  form.reset();
  erroForm.textContent = "";

  document.querySelector("#recomendacoes").hidden = true;

  document.querySelector("#perfil").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

ordenacaoSelect.addEventListener("change", () => {
  if (!resultadosAtuais.length) return;

  const ordenados = ordenarResultados(
    resultadosAtuais,
    ordenacaoSelect.value
  );

  renderizarResultados(ordenados.slice(0, 12));
});

const perfilSalvo = carregarPerfil();

if (perfilSalvo) {
  preencherFormulario(perfilSalvo);
  carregarRecomendacoes(perfilSalvo);
}