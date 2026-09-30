# CineMatch Web

Projeto acadêmico de recomendação de séries desenvolvido com HTML, CSS e JavaScript puro.

## Objetivo

O CineMatch transforma a ideia de um sistema de recomendação em uma aplicação web. O usuário informa nome, idade e gêneros favoritos. O sistema consulta séries reais na API TVMaze e calcula uma porcentagem de compatibilidade com base nos gêneros.

## Tecnologias

- HTML5 semântico
- CSS3
- JavaScript ES Modules
- Fetch API
- Async/Await
- LocalStorage
- TVMaze API
- npm
- Git e GitHub
- Live Server

Não foram utilizados React, Vue, Angular, TypeScript, Vite, Webpack ou Axios.

## Arquivos

```text
cinematch-web/
├── index.html
├── style.css
├── script.js
├── ui.js
├── modelo.js
├── package.json
└── README.md
```

## Como executar

No terminal, dentro da pasta:

```bash
npm install
npm start
```

Depois abra o endereço informado pelo Live Server, normalmente:

```text
http://127.0.0.1:8080
```

## Recursos implementados

- Formulário de perfil.
- Validação de nome, idade e gênero.
- 15 opções de gênero.
- Consumo de dados reais da TVMaze.
- `fetch()` com `async/await`.
- Tratamento de erros com `try/catch`.
- Verificação de `response.ok`.
- Cálculo de compatibilidade.
- Cards de séries criados dinamicamente pelo DOM.
- Ordenação por compatibilidade, nota e nome.
- `localStorage` para salvar o perfil.
- Recuperação automática do perfil ao atualizar a página.
- Layout responsivo para celular e computador.
- Mensagens de carregamento e erro.
- Classes, herança e métodos.
- Callback.
- Closure.
- `setTimeout`.
- Array methods: `map`, `filter`, `sort`, `slice` e `reduce`.

## Onde está o reduce?

O `reduce()` está no arquivo `script.js`, na função:

```js
calcularEstatisticas(resultados)
```

Ele percorre as recomendações e calcula:

- quantidade total de gêneros em comum;
- soma das porcentagens de compatibilidade.

Depois esses dados são usados para mostrar a média de compatibilidade do perfil.

## Cálculo de compatibilidade

A porcentagem é calculada comparando os gêneros da série com os gêneros escolhidos pelo usuário:

```text
compatibilidade =
(gêneros em comum / quantidade de gêneros da série) × 100
```

Classificação usada:

- 60% ou mais: Alta afinidade
- 30% a 59%: Média afinidade
- abaixo de 30%: Baixa afinidade

## Programação orientada a objetos

O projeto possui a classe `Conteudo` e a classe `Serie`.

`Serie` herda de `Conteudo`:

```js
export class Serie extends Conteudo
```

A classe também possui métodos próprios, como `resumoCurto()` e `obterDuracao()`.

## Callback

A função `criarMensagemCallback()` recebe uma função como parâmetro e executa essa função depois de um pequeno intervalo.

## Closure

A função `criarContador()` mantém a variável `total` protegida no escopo interno e devolve uma função que consegue continuar alterando esse valor.

## Browser API

Foi utilizado `setTimeout()` para simular uma pequena etapa de carregamento antes da consulta à API.

Também foram utilizadas APIs do navegador como:

- `localStorage`;
- DOM;
- Fetch API.

## API

Os dados são buscados na TVMaze:

```text
https://api.tvmaze.com/shows?page=0
```

A aplicação usa dados como:

- nome;
- gêneros;
- nota;
- imagem;
- duração;
- estreia;
- plataforma;
- resumo;
- status.

## Git e GitHub

### Branches

O projeto deve trabalhar com estas três branches:

```text
main
develop
feature/cinematch-web
```

Fluxo:

```text
main
  ↑
develop
  ↑
feature/cinematch-web
```

A `feature/cinematch-web` é usada para desenvolver as funcionalidades. Depois as alterações são integradas na `develop` e, por fim, na `main`.

### Commits sugeridos

Foram planejados mais de 5 commits:

```text
feat: cria estrutura semântica do projeto
feat: adiciona formulário de perfil
feat: implementa cálculo de compatibilidade
feat: adiciona consumo da TVMaze API
feat: implementa armazenamento com localStorage
feat: adiciona interface responsiva
docs: atualiza documentação do projeto
```

## Comandos Git

Inicialização:

```bash
git init
git add .
git commit -m "feat: cria estrutura semântica do projeto"
git branch -M main
git checkout -b develop
git checkout -b feature/cinematch-web
```

Depois dos commits de desenvolvimento:

```bash
git checkout develop
git merge feature/cinematch-web

git checkout main
git merge develop
```

Para enviar ao GitHub:

```bash
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
git push -u origin develop
git push -u origin feature/cinematch-web
```

## Kanban

O Kanban pode ser criado no GitHub Projects com três colunas:

### A Fazer

- Criar estrutura HTML
- Criar formulário
- Implementar cálculo de compatibilidade
- Integrar API
- Implementar ordenação
- Testar projeto
- Revisar requisitos
- Preparar apresentação

### Em andamento

Tarefas que estão sendo desenvolvidas no momento.

### Concluído

- Estrutura HTML
- Estilização CSS
- Classes JavaScript
- LocalStorage
- Integração com API
- Cálculo de compatibilidade
- Responsividade
- Documentação

## Acessibilidade e responsividade

Foram utilizados:

- elementos semânticos;
- `label` nos campos;
- `aria-label`;
- `role="alert"`;
- `role="status"`;
- `alt` nas imagens;
- layout responsivo com media queries.

## Possíveis melhorias futuras

- Sistema de favoritos.
- Filtro por nota mínima.
- Paginação.
- Mais páginas da API.
- Página de detalhes de cada série.
- Tema claro/escuro.
- Testes automatizados.

## Projeto acadêmico

O projeto foi estruturado para ser apresentado e explicado durante a avaliação, mostrando a utilização dos principais conceitos de HTML, CSS, JavaScript, API, armazenamento local, programação orientada a objetos, métodos de array, Git e organização Kanban.
