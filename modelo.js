export class Conteudo {
  constructor({
    id, titulo, generos = [], duracaoMinutos = null, nota = 0,
    imagem = "", url = "", resumo = "", status = "", estreia = "", plataforma = ""
  }) {
    this.id = id;
    this.titulo = titulo;
    this.generos = generos;
    this.duracaoMinutos = duracaoMinutos;
    this.nota = nota;
    this.imagem = imagem;
    this.url = url;
    this.resumo = resumo;
    this.status = status;
    this.estreia = estreia;
    this.plataforma = plataforma;
  }

  calcularCompatibilidade(generosFavoritos) {
    const favoritosNormalizados = generosFavoritos.map(g => g.toLowerCase());

    const generosEmComum = this.generos.filter(g =>
      favoritosNormalizados.includes(g.toLowerCase())
    );

    const generosNaoExplorados = this.generos.filter(g =>
      !favoritosNormalizados.includes(g.toLowerCase())
    );

    const percentual = this.generos.length
      ? Math.round((generosEmComum.length / this.generos.length) * 100)
      : 0;

    let classificacao;
    if (percentual >= 60) classificacao = "Alta afinidade";
    else if (percentual >= 30) classificacao = "Média afinidade";
    else classificacao = "Baixa afinidade";

    return {
      ...this,
      generosEmComum,
      generosNaoExplorados,
      percentual,
      classificacao
    };
  }
}

export class Serie extends Conteudo {
  constructor(dados) {
    super(dados);
    this.tipo = "Série";
  }

  resumoCurto() {
    if (!this.resumo) return "Resumo não informado.";
    const texto = this.resumo.replace(/<[^>]*>/g, "").trim();
    return texto.length > 130 ? `${texto.slice(0, 127)}...` : texto;
  }

  obterDuracao() {
    return this.duracaoMinutos ? `${this.duracaoMinutos} min` : "Não informada";
  }
}
