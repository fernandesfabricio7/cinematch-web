const GENEROS_PT = {
  Drama: "Drama",
  Comedy: "Comédia",
  Action: "Ação",
  Thriller: "Suspense",
  "Science-Fiction": "Ficção científica",
  Romance: "Romance",
  Crime: "Crime",
  Adventure: "Aventura",
  Fantasy: "Fantasia",
  Horror: "Terror",
  Mystery: "Mistério",
  Family: "Família",
  Historical: "Histórico",
  Music: "Música",
  Western: "Faroeste"
};

export function traduzirGenero(genero) {
  return GENEROS_PT[genero] || genero;
}

export function mostrarResultados() {
  const secao = document.querySelector("#recomendacoes");

  secao.hidden = false;

  secao.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

export function mostrarCarregando() {
  const status = document.querySelector("#status");

  status.textContent =
    "Buscando séries e calculando compatibilidade...";

  status.setAttribute("aria-live", "polite");
  status.setAttribute("role", "status");
}

export function mostrarErro(mensagem) {
  const status = document.querySelector("#status");

  status.textContent = mensagem;
  status.setAttribute("role", "alert");
}

export function limparResultados() {
  document.querySelector("#resultados").innerHTML = "";

  const vazio = document.querySelector("#mensagem-vazia");

  vazio.hidden = true;
  vazio.textContent = "";
}

export function mostrarVazio(mensagem) {
  const vazio = document.querySelector("#mensagem-vazia");

  vazio.hidden = false;
  vazio.textContent = mensagem;
}

export function atualizarResumoPerfil(perfil, estatisticas) {
  const resumo = document.querySelector("#perfil-resumo");

  const generos = perfil.generos.map(traduzirGenero);

  resumo.innerHTML = `
    <span class="perfil-tag">
      <strong>${escaparHtml(perfil.nome)}</strong>, ${perfil.idade} anos
    </span>

    ${generos
      .map(g => `<span class="perfil-tag">${escaparHtml(g)}</span>`)
      .join("")}

    <span class="perfil-tag">
      ${estatisticas.totalGenerosComuns} correspondências encontradas
    </span>

    <span class="perfil-tag">
      Média: ${estatisticas.mediaCompatibilidade}%
    </span>
  `;
}

export function atualizarStatus(texto) {
  const status = document.querySelector("#status");

  status.textContent = texto;
  status.setAttribute("role", "status");
}

export function renderizarResultados(resultados) {
  const container = document.querySelector("#resultados");

  container.innerHTML = resultados
    .map(renderizarCard)
    .join("");
}

function renderizarCard(resultado) {
  const imagem =
    resultado.imagem ||
    "https://via.placeholder.com/600x338?text=Sem+imagem";

  const generos = resultado.generos
    .map(
      genero =>
        `<span class="chip">${escaparHtml(
          traduzirGenero(genero)
        )}</span>`
    )
    .join("");

  const comuns = resultado.generosEmComum.length
    ? resultado.generosEmComum
        .map(
          genero =>
            `<span class="chip chip-comum">${escaparHtml(
              traduzirGenero(genero)
            )}</span>`
        )
        .join("")
    : '<span class="chip">Nenhum gênero em comum</span>';

  const plataforma =
    resultado.plataforma || "Plataforma não informada";

  const estreia = resultado.estreia
    ? formatarData(resultado.estreia)
    : "Data não informada";

  return `
    <article class="serie-card">

      <img
        class="poster"
        src="${escaparAtributo(imagem)}"
        alt="Capa da série ${escaparAtributo(resultado.titulo)}"
        loading="lazy"
        onerror="this.src='https://via.placeholder.com/600x338?text=Sem+imagem'"
      >

      <div class="serie-conteudo">

        <div class="serie-cabecalho">
          <h3>${escaparHtml(resultado.titulo)}</h3>

          <span class="nota">
            ★ ${Number(resultado.nota || 0).toFixed(1)}
          </span>
        </div>

        <div class="info-serie">
          <span>${escaparHtml(resultado.obterDuracao())}</span>
          <span>${escaparHtml(estreia)}</span>
          <span>${escaparHtml(plataforma)}</span>
        </div>

        <p class="resumo">
          ${escaparHtml(resultado.resumoCurto())}
        </p>

        <div class="chips">
          ${generos}
        </div>

        <small>Gêneros em comum</small>

        <div class="chips">
          ${comuns}
        </div>

        <div class="compatibilidade">

          <div class="compatibilidade-topo">
            <span>Compatibilidade</span>
            <strong>${resultado.percentual}%</strong>
          </div>

          <div class="barra">
            <span style="width:${resultado.percentual}%"></span>
          </div>

        </div>

        <span class="badge">
          ${escaparHtml(resultado.classificacao)}
        </span>

        <br>

        <a
          class="card-link"
          href="${escaparAtributo(resultado.url)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver na TVMaze →
        </a>

      </div>

    </article>
  `;
}

function formatarData(data) {
  const partes = data.split("-");

  if (partes.length !== 3) {
    return data;
  }

  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

function escaparHtml(valor) {
  return String(valor ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escaparAtributo(valor) {
  return escaparHtml(valor);
}

export function criarMensagemCallback(nome, callback) {
  setTimeout(() => {
    callback(
      `Pronto, ${nome}! Estas são as séries encontradas para o seu perfil.`
    );
  }, 300);
}

export function atualizarMensagemCallback(mensagem) {
  const status = document.querySelector("#status");

  status.textContent = mensagem;
  status.setAttribute("role", "status");
}