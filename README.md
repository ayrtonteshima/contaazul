# Desafio ContaAzul

Desafio feito com muito cuidado e carinho sendo 100% vanilla e responsivo.

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

## Sobre o uso
O projeto segue o pedido, a partir do quinto item a paginação surge. A busca filtra os campos `marca` e `combustível`,  o único detalhe é que não é uma busca com `"AND"` e sim com `"OR"`. Isso quer dizer que ao pesquisar por 'volkswagen flex', ele irá retornar tanto os itens que só tenham volkswagem, outros que só tenham flex e os que tiverem ambos, isso foi uma escolha.

A opção de marcar todos os campos funciona perfeitamente mesmo com a paginação.

Quando acessa a primeira vez, cria um item ou deleta, ele sempre faz um request para a API para executar a operação e depois renderiza o resultado na tela.

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

### Possíveis problemas
Se gerar erro no build `make run` do projeto devido a `node-sass`. Por favor executar o comando `npm rebuild node-sass --force` e depois rodar `make run` novamente.
