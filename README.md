# Desafio ContaAzul

Desafio feito com muito cuidado e carinho sendo 100% vanilla js.

## Back-end
O projeto foi feito end-to-end priorizando o front-end. No back-end foi utilizado também javascript com express para roteamento, tanto do html quando da API responsável pelo SPA.

Na API pode ser acessada utilizando a rota `/api/v1/fleets` com os métodos GET, POST e DELETE, o último passando um id. Como a prioridade era o front-end, nessa aplicação apenas estruturei como seguiria o desenvolvimento completo, com o endpoint recebendo o request até a informação chegar nos models, passando pelos handlers e a store.

A store é uma abstração da aplicação, já que ela pode ser escalada e não ter apenas banco, podendo consultar elastic search, redis etc. Com isso os handlers não conheceria toda essa estrutura, pegando as informações apenas com a store.

## Front-end
Aqui configurei o webpack com babel-preset-env, para utilizar os recursos de ES6 sem que transpile o que não precise, dependendo do browser.

O projeto foi concebido 100% vanilla, utilizando apenas uma lib externa `axios` para request. A arquitetura é similar a redux, utilizando o conceito de `reducers`, e uma implementação um pouco diferente das `actions`, já que não tenho store. 

Dessa forma, eu mantenho um único estado de toda a aplicação e a gerencio. Isso permite desacoplamento e uma integração fácil entre todos os componentes da página, já que eles conversam entre si.

Eu priorizo muito a qualidade de código javascript, aplico conceitos de programação funcional como compositions, currying, pure functions, single responsibilities quando possível, evito hosting e uso de `this`. Utilizo eslint do airbnb que tem muitas boas práticas para desenvolver `ES6`.

No CSS utilizo a metodologia `BEM`, para organização é ótimo assim como performance devido o match do browser.

## Testes
Comecei o desenvolvimento 100% TDD, com alguns testes na API e depois no desenvolvimento dos reducers, porém ficou impraticável com o decorrer do desafio, devido ao tempo para entregar assim como meu tempo para desenvolver :/

## Mais
Tentei fazer ao longo de todo o projeto micro commits, acho interessante para conseguirem acompanhar todo o meu desenvolvimento.

## Dependências
- Node v7.10.0

## Para rodar
- Make setup
- Make run
- make test

Execute o `make test` em outra aba do terminal com o servidor rodando.

Acesse: http://localhost.com:3000

### Para desenvolver
- make watch



