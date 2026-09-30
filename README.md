#  CineMatch Web

Sistema web de recomendação de séries desenvolvido como projeto acadêmico, utilizando HTML, CSS e JavaScript puro.

O CineMatch Web permite que o usuário informe seus dados e selecione seus gêneros favoritos. A partir dessas informações, o sistema consulta séries disponíveis na API TVMaze e calcula a compatibilidade entre as preferências do usuário e os gêneros de cada série.

O objetivo é oferecer uma experiência simples e organizada para ajudar o usuário a descobrir séries que combinem com seus gostos.

---

##  Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Objetivos](#-objetivos)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Estrutura dos arquivos](#-estrutura-dos-arquivos)
- [Funcionalidades](#-funcionalidades)
- [Como o sistema funciona](#-como-o-sistema-funciona)
- [Cálculo de compatibilidade](#-cálculo-de-compatibilidade)
- [Organização do código](#-organização-do-código)
- [Conceitos de JavaScript utilizados](#-conceitos-de-javascript-utilizados)
- [Integração com a API](#-integração-com-a-api)
- [Armazenamento de dados](#-armazenamento-de-dados)
- [Interface e responsividade](#-interface-e-responsividade)
- [Instalação e execução](#-instalação-e-execução)
- [Git e GitHub](#-git-e-github)
- [Organização Kanban](#-organização-kanban)
- [Testes realizados](#-testes-realizados)
- [Possíveis melhorias](#-possíveis-melhorias)
- [Considerações finais](#-considerações-finais)
- [Referências](#-referências)

---

##  Sobre o projeto

O CineMatch Web foi desenvolvido com a proposta de transformar um sistema de recomendação de séries em uma aplicação web interativa.

A aplicação utiliza informações fornecidas pelo próprio usuário para identificar séries que possuem gêneros em comum com suas preferências.

Os resultados são apresentados em cards, contendo informações como título, imagem, nota, gêneros, data de estreia, duração, resumo e porcentagem de compatibilidade.

O projeto também utiliza recursos do navegador para salvar o perfil do usuário, permitindo que suas informações sejam recuperadas quando a página for aberta novamente.

---

##  Objetivos

### Objetivo geral

Desenvolver uma aplicação web de recomendação de séries, aplicando os conhecimentos de HTML, CSS e JavaScript estudados durante o curso.

### Objetivos específicos

- Criar uma interface simples e intuitiva.
- Desenvolver um formulário para cadastro das preferências do usuário.
- Utilizar JavaScript para validar os dados informados.
- Consumir informações reais de uma API externa.
- Implementar um cálculo de compatibilidade entre séries e preferências.
- Exibir os resultados dinamicamente na página.
- Utilizar métodos de array para organizar e processar os dados.
- Aplicar conceitos de programação orientada a objetos.
- Utilizar armazenamento local do navegador.
- Desenvolver uma interface adaptável a diferentes tamanhos de tela.
- Organizar o desenvolvimento utilizando Git, branches e commits.
- Aplicar uma organização de tarefas baseada no método Kanban.

---

## Tecnologias utilizadas

### HTML5

Utilizado para construir a estrutura da página, organizar as seções e criar o formulário de cadastro do usuário.

Foram utilizados elementos semânticos para melhorar a organização do conteúdo.

### CSS3

Responsável pela aparência visual da aplicação, incluindo cores, espaçamentos, cards, botões, formulários, efeitos visuais e adaptação para diferentes dispositivos.

### JavaScript

Utilizado para implementar a lógica da aplicação, validar o formulário, calcular compatibilidade, consumir a API e atualizar os elementos da página.

### Fetch API

Utilizada para realizar a consulta dos dados das séries na API TVMaze.

### Async/Await

Utilizado para trabalhar com operações assíncronas, facilitando a leitura do código responsável pela consulta à API.

### LocalStorage

Utilizado para armazenar o perfil do usuário no navegador.

### npm

Utilizado para gerenciar as dependências do projeto e executar o servidor de desenvolvimento.

### Live Server

Utilizado para executar a aplicação localmente durante o desenvolvimento.

### Git e GitHub

Utilizados para controlar as versões do código, registrar alterações e organizar o desenvolvimento por meio de branches e commits.

### Tecnologias que não foram utilizadas

O projeto foi desenvolvido sem frameworks ou ferramentas de compilação, como:

- React;
- Vue;
- Angular;
- TypeScript;
- Vite;
- Webpack;
- Axios.

---

##  Estrutura dos arquivos

A organização principal do projeto é a seguinte:

```text
cinematch-web/
│
├── index.html
├── style.css
├── script.js
├── ui.js
├── modelo.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

### Responsabilidade de cada arquivo

| Arquivo | Responsabilidade |
|---|---|
| `index.html` | Estrutura principal da página e formulário |
| `style.css` | Estilização e responsividade |
| `script.js` | Lógica principal e integração das funcionalidades |
| `ui.js` | Atualização da interface e exibição dos resultados |
| `modelo.js` | Classes e métodos utilizados para representar as séries |
| `package.json` | Informações do projeto, dependências e comandos |
| `package-lock.json` | Registro das versões das dependências instaladas |
| `.gitignore` | Arquivos e pastas que não devem ser enviados ao Git |
| `README.md` | Documentação do projeto |

A separação dos arquivos facilita a manutenção do código e permite identificar com mais facilidade onde cada funcionalidade está implementada.

---

##  Funcionalidades

### 1. Cadastro do perfil

O usuário pode informar:

- Nome;
- Idade;
- Gêneros favoritos.

O formulário possui validações para evitar o envio de informações obrigatórias que estejam faltando.

### 2. Seleção de gêneros

A aplicação disponibiliza 15 opções de gêneros para o usuário selecionar.

Essas escolhas são utilizadas como base para o cálculo de compatibilidade.

### 3. Consulta de séries

O sistema consulta dados reais da TVMaze, permitindo apresentar informações de séries disponíveis na API.

### 4. Cálculo de compatibilidade

Cada série recebe uma porcentagem de compatibilidade de acordo com os gêneros que possui em comum com os gêneros selecionados pelo usuário.

### 5. Exibição dos resultados

As recomendações são apresentadas em cards com informações sobre cada série.

Entre os dados exibidos estão:

- Título;
- Imagem;
- Nota;
- Gêneros;
- Gêneros em comum;
- Duração;
- Data de estreia;
- Plataforma, quando disponível;
- Resumo;
- Porcentagem de compatibilidade;
- Classificação de afinidade;
- Link para consultar a série na TVMaze.

### 6. Ordenação

O usuário pode organizar os resultados de acordo com as opções disponíveis na interface, incluindo:

- Compatibilidade;
- Nota;
- Nome.

### 7. Salvamento do perfil

O perfil informado é armazenado no `localStorage`, permitindo recuperar os dados quando a página for atualizada ou aberta novamente no mesmo navegador.

### 8. Mensagens de carregamento

Durante o processamento, a aplicação apresenta mensagens para informar o usuário sobre o andamento da consulta.

### 9. Tratamento de erros

O sistema utiliza mecanismos de tratamento de erros para lidar com problemas que possam ocorrer durante a consulta à API.

### 10. Interface responsiva

A página adapta sua organização para diferentes tamanhos de tela, incluindo computadores, tablets e celulares.

---

##  Como o sistema funciona

O funcionamento do CineMatch Web pode ser dividido em etapas.

### Etapa 1 — Preenchimento do formulário

O usuário informa seu nome, sua idade e seleciona os gêneros de sua preferência.

### Etapa 2 — Validação

O JavaScript verifica se os dados necessários foram preenchidos corretamente.

### Etapa 3 — Consulta à API

A aplicação realiza uma requisição à TVMaze para obter os dados das séries.

### Etapa 4 — Organização dos dados

As informações recebidas são processadas e organizadas para serem utilizadas pelo sistema.

### Etapa 5 — Cálculo de compatibilidade

O sistema compara os gêneros de cada série com os gêneros selecionados pelo usuário.

### Etapa 6 — Ordenação dos resultados

As séries são organizadas conforme o critério selecionado na interface.

### Etapa 7 — Exibição

Os resultados são apresentados na página por meio de cards criados dinamicamente.

### Etapa 8 — Salvamento do perfil

As informações do perfil são armazenadas no navegador para facilitar o acesso posterior.

---

##  Cálculo de compatibilidade

O cálculo de compatibilidade é uma das principais funcionalidades do projeto.

Ele compara os gêneros de cada série com os gêneros escolhidos pelo usuário.

A fórmula utilizada é:

```text
Compatibilidade =
(Gêneros em comum / Total de gêneros da série) × 100
```

O resultado é apresentado em porcentagem.

### Exemplo

Imagine que o usuário selecionou os gêneros Drama, Romance e Comédia.

Uma série possui os gêneros Drama, Romance, Ação e Suspense.

Nesse caso, existem dois gêneros em comum: Drama e Romance.

O cálculo fica:

```text
Compatibilidade = (2 / 4) × 100

Compatibilidade = 50%
```

Portanto, essa série apresenta 50% de compatibilidade de acordo com a fórmula utilizada.

### Classificação

A aplicação utiliza as seguintes faixas de classificação:

| Compatibilidade | Classificação |
|---|---|
| 60% ou mais | Alta afinidade |
| De 30% a 59% | Média afinidade |
| Abaixo de 30% | Baixa afinidade |

Essa classificação serve para facilitar a interpretação dos resultados.

A porcentagem representa uma comparação entre gêneros, não uma avaliação definitiva da qualidade da série ou da preferência pessoal do usuário.

---

##  Organização do código

O código foi separado em arquivos para facilitar a compreensão e a manutenção.

### `index.html`

Contém a estrutura da aplicação, incluindo:

- Cabeçalho;
- Apresentação do projeto;
- Formulário;
- Seção explicativa;
- Área de recomendações;
- Rodapé.

### `style.css`

Contém as regras responsáveis pela apresentação visual da página.

Também possui media queries para adaptar o layout a diferentes resoluções.

### `script.js`

É responsável pela lógica principal da aplicação.

Entre suas funções estão:

- Capturar os dados do formulário;
- Validar as informações;
- Consultar a API;
- Processar os resultados;
- Calcular compatibilidade;
- Organizar as recomendações;
- Atualizar o perfil armazenado.

### `ui.js`

Responsável pelas funções relacionadas à interface.

Entre elas:

- Exibir mensagens de carregamento;
- Apresentar mensagens de erro;
- Atualizar o resumo do perfil;
- Criar os cards das séries;
- Exibir os resultados;
- Traduzir os nomes dos gêneros;
- Atualizar mensagens após o processamento.

### `modelo.js`

Contém as classes utilizadas para representar os conteúdos e as séries.

Essa organização permite concentrar os dados e comportamentos relacionados às séries em uma estrutura própria.

---
##  Conceitos de JavaScript utilizados

O projeto utiliza diferentes recursos da linguagem JavaScript.

### 1. Variáveis e constantes

Utilizadas para armazenar informações do perfil, resultados da API, configurações e dados processados.

### 2. Funções

Utilizadas para dividir o código em partes menores, permitindo reutilizar operações e organizar a lógica da aplicação.

### 3. Objetos

Utilizados para representar informações relacionadas ao usuário, às séries e aos resultados de compatibilidade.

### 4. Classes e herança

O projeto possui as classes `Conteudo` e `Serie`.

A classe `Serie` herda características de `Conteudo`, permitindo reutilizar propriedades e comportamentos.

```js
export class Serie extends Conteudo
```

### 5. Métodos de array

Foram utilizados diferentes métodos para manipular e organizar os dados.

| Método | Utilização |
|---|---|
| `map()` | Transformar os dados das séries |
| `filter()` | Filtrar informações conforme uma condição |
| `sort()` | Ordenar os resultados |
| `slice()` | Selecionar uma parte dos resultados |
| `reduce()` | Calcular estatísticas a partir dos resultados |

### 6. Reduce

O método `reduce()` é utilizado na função `calcularEstatisticas(resultados)`.

Ele percorre os resultados e reúne informações necessárias para apresentar as estatísticas do perfil.

Entre os dados calculados estão a quantidade de gêneros em comum e a soma das porcentagens de compatibilidade.

### 7. Callback

Callback é uma função passada como argumento para outra função, para ser executada posteriormente.

No projeto, a função `criarMensagemCallback()` recebe outra função como parâmetro.

Essa função é executada após um intervalo de tempo, utilizando `setTimeout()`.

### 8. Closure

Closure acontece quando uma função mantém acesso às variáveis do escopo em que foi criada, mesmo depois que a função externa terminou sua execução.

No projeto, a função `criarContador()` utiliza uma variável chamada `total`.

A função retornada continua tendo acesso a essa variável, permitindo atualizar e preservar o contador entre chamadas.

### 9. Programação assíncrona

A aplicação utiliza `async/await` para lidar com a consulta à API.

Isso permite aguardar o retorno da requisição sem bloquear toda a execução da página.

### 10. Tratamento de erros

O código utiliza `try/catch` para tratar erros que podem acontecer durante a execução.

Também é realizada a verificação da resposta da API para identificar respostas que não foram bem-sucedidas.

### 11. Manipulação do DOM

O DOM permite que o JavaScript acesse e modifique os elementos HTML.

No projeto, ele é utilizado para atualizar mensagens, exibir resultados e criar os cards das séries dinamicamente.

### 12. Módulos JavaScript

O projeto utiliza módulos ES Modules para separar o código em arquivos e compartilhar funções e classes por meio de `import` e `export`.

---

##  Integração com a API

O CineMatch Web utiliza a API pública TVMaze para consultar informações sobre séries.

### Endereço utilizado

```text
https://api.tvmaze.com/shows?page=0
```

### Dados utilizados

A aplicação pode utilizar informações como:

- Nome da série;
- Gêneros;
- Nota;
- Imagem;
- Duração;
- Data de estreia;
- Plataforma;
- Resumo;
- Status.

Os dados recebidos são tratados pelo JavaScript antes de serem apresentados na interface.

### Requisições

A consulta é realizada com `fetch()` e processada utilizando `async/await`.

O código também verifica se a resposta foi bem-sucedida e trata possíveis erros durante a requisição.

### Limitações da API

A disponibilidade e a quantidade de informações podem variar de acordo com os dados fornecidos pela TVMaze.

Algumas séries podem não possuir imagem, nota, duração, data de estreia ou informações sobre a plataforma.

Por isso, a aplicação utiliza valores alternativos quando determinadas informações não estão disponíveis.

---

##  Armazenamento de dados

O projeto utiliza o `localStorage`, um recurso do navegador que permite guardar informações localmente.

O perfil do usuário é salvo para que suas informações possam ser recuperadas posteriormente.

### Vantagens

- Evita que o usuário precise preencher o perfil novamente a cada atualização;
- Permite recuperar as preferências salvas;
- Não exige a criação de um banco de dados externo para essa funcionalidade.

### Limitações

Os dados ficam armazenados no navegador utilizado.

Eles não são automaticamente compartilhados entre diferentes computadores ou navegadores.

Além disso, o usuário pode apagar os dados armazenados nas configurações do navegador.

---

##  Interface e responsividade

A interface foi desenvolvida com foco na organização e na facilidade de utilização.

O projeto utiliza um tema escuro, com destaque para tons de vermelho, criando uma identidade visual relacionada ao nome CineMatch.

### Elementos visuais

- Cabeçalho com navegação;
- Seção inicial de apresentação;
- Formulário organizado em campos;
- Seleção visual de gêneros;
- Botões de ação;
- Cards de recomendação;
- Barras de compatibilidade;
- Indicadores de afinidade;
- Mensagens de carregamento e erro;
- Rodapé com informações do projeto.

### Responsividade

O CSS utiliza media queries para adaptar o layout de acordo com a largura da tela.

Em telas menores, a organização das colunas é ajustada para facilitar a leitura e a navegação.

---

##  Instalação e execução

### Requisitos

Para executar o projeto, é necessário ter:

- Node.js instalado;
- npm disponível no terminal;
- Navegador atualizado;
- Conexão com a internet para consultar a API.

### 1. Abrir a pasta do projeto

Abra o terminal dentro da pasta `cinematch-web`.

### 2. Instalar as dependências

Execute:

```bash
npm install
```

Esse comando instala as dependências definidas no `package.json`.

### 3. Iniciar a aplicação

Execute:

```bash
npm start
```

O Live Server iniciará a aplicação e informará o endereço local.

### 4. Acessar no navegador

Abra o endereço informado pelo terminal.

Normalmente, o endereço local é:

```text
http://127.0.0.1:8080
```

Caso a porta seja diferente, utilize o endereço apresentado pelo Live Server.

---

##  Git e GitHub

O Git foi utilizado para registrar as alterações realizadas durante o desenvolvimento.

A organização por branches permite separar o desenvolvimento das funcionalidades da versão principal do projeto.

### Branches utilizadas

```text
main
develop
feature/cinematch-web
```

### `main`

Representa a branch principal do projeto, destinada a manter uma versão estável.

### `develop`

Utilizada para reunir as alterações desenvolvidas antes de sua integração à branch principal.

### `feature/cinematch-web`

Utilizada para desenvolver e testar as funcionalidades específicas do CineMatch Web.

### Fluxo de desenvolvimento

```text
main
  ↑
develop
  ↑
feature/cinematch-web
```

As alterações são desenvolvidas na branch de funcionalidade e podem ser integradas à `develop`. Depois da revisão, podem ser integradas à `main`.

### Comandos utilizados

Consultar a branch atual:

```bash
git branch
```

Verificar alterações:

```bash
git status
```

Adicionar arquivos:

```bash
git add .
```

Criar um commit:

```bash
git commit -m "mensagem do commit"
```

Consultar o histórico:

```bash
git log --oneline --all --graph
```

### Integração das branches

Integrar a feature à develop:

```bash
git checkout develop
git merge feature/cinematch-web
```

Integrar a develop à main:

```bash
git checkout main
git merge develop
```

### Envio para o GitHub

Depois de criar o repositório remoto no GitHub, conecte-o ao projeto:

```bash
git remote add origin URL_DO_SEU_REPOSITORIO
```

Envie as branches:

```bash
git push -u origin main
git push -u origin develop
git push -u origin feature/cinematch-web
```

Substitua `URL_DO_SEU_REPOSITORIO` pelo endereço real do repositório.

### Organização dos commits

Os commits devem registrar alterações reais e importantes do desenvolvimento.

Exemplos de mensagens utilizadas ou planejadas para o projeto:

```text
feat: cria estrutura semântica do projeto
feat: adiciona formulario de perfil
feat: implementa calculo de compatibilidade
feat: melhora feedback de carregamento
feat: melhora visual das recomendacoes
docs: atualiza documentacao do projeto
```

As mensagens devem corresponder às alterações que realmente foram realizadas.

---

##  Organização Kanban

O Kanban pode ser utilizado para acompanhar as tarefas e visualizar o andamento do projeto.

A organização proposta possui três colunas principais.

### A Fazer

- Revisar todos os requisitos da atividade;
- Conferir a documentação;
- Realizar testes finais;
- Preparar a apresentação;
- Conferir o repositório no GitHub.

### Em andamento

- Ajustes finais na aplicação;
- Revisão do histórico de commits;
- Organização das branches;
- Conferência da documentação.

### Concluído

- Estrutura HTML;
- Estilização CSS;
- Formulário de perfil;
- Validação dos dados;
- Classes JavaScript;
- Integração com a API;
- Cálculo de compatibilidade;
- Exibição dos resultados;
- Ordenação das recomendações;
- Armazenamento com LocalStorage;
- Responsividade;
- Callback;
- Closure;
- Métodos de array;
- Documentação inicial.

As tarefas podem ser movidas entre as colunas conforme o andamento do desenvolvimento.

---

##  Testes realizados

Durante o desenvolvimento, a aplicação deve ser verificada em diferentes situações para garantir que as funcionalidades estejam funcionando corretamente.

### Testes do formulário

- Verificar o preenchimento do nome;
- Verificar a idade informada;
- Verificar a seleção dos gêneros;
- Conferir o comportamento quando os dados obrigatórios não são preenchidos.

### Testes das recomendações

- Conferir se as séries são carregadas;
- Verificar se os cards apresentam as informações;
- Conferir o cálculo de compatibilidade;
- Testar as opções de ordenação;
- Verificar a exibição de informações ausentes.

### Testes de armazenamento

- Preencher o perfil;
- Atualizar a página;
- Verificar se os dados salvos são recuperados.

### Testes de interface

- Conferir a apresentação em computador;
- Conferir a apresentação em telas menores;
- Verificar os botões, links e mensagens;
- Conferir se os cards estão organizados corretamente.

### Testes de conexão

- Verificar o carregamento com conexão à internet;
- Conferir o comportamento quando a API não responde;
- Verificar se as mensagens de erro são apresentadas corretamente.

---

##  Possíveis melhorias futuras

O projeto pode receber novas funcionalidades para ampliar as possibilidades de recomendação.

Algumas ideias são:

- Criar um sistema de favoritos;
- Permitir filtrar séries por nota mínima;
- Implementar paginação;
- Consultar mais páginas da API;
- Criar uma página com detalhes de cada série;
- Adicionar um tema claro;
- Permitir remover ou editar o perfil salvo;
- Melhorar os filtros de busca;
- Criar testes automatizados;
- Implementar novas formas de recomendação.

Essas melhorias não fazem parte necessariamente da versão atual, mas podem ser desenvolvidas em versões futuras.

---

##  Referências

### TVMaze API

API utilizada para consultar informações sobre séries.

Documentação:

https://www.tvmaze.com/api

### MDN Web Docs

Documentação de referência para HTML, CSS e JavaScript.

https://developer.mozilla.org/

### Git

Documentação oficial do Git.

https://git-scm.com/doc

### npm

Documentação oficial do npm.

https://docs.npmjs.com/

---

##  Considerações finais

O desenvolvimento do CineMatch Web permitiu aplicar, na prática, diferentes conceitos estudados durante o curso.

A construção da aplicação envolveu a criação de uma interface com HTML e CSS, o desenvolvimento da lógica com JavaScript, o consumo de uma API externa e o armazenamento de informações no navegador.

Também foram utilizados conceitos como programação orientada a objetos, métodos de array, funções callback, closure, manipulação do DOM e operações assíncronas.

Além da programação, o projeto envolveu a organização dos arquivos, o controle de versões com Git, a utilização de branches e commits e o planejamento das atividades com Kanban.

Dessa forma, o CineMatch Web reúne diferentes conhecimentos em uma aplicação funcional, permitindo demonstrar como os conteúdos estudados podem ser utilizados no desenvolvimento de um projeto web.