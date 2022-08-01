# json-server-base

Essa é uma API-fake apenas com a finalidade de ser utilizada na leitura/fetch dos dados de um website ficticio de registro de devs em busca de emprego.

## Endpoints

A api possui 3 endpoints, sendo dois dele requerindo autenticação e o ultimo não.

O url base da API é https://kenziehub.herokuapp.com

## Rotas que necessitam de autorização

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

Após o usuário estar logado, ele deve conseguir resgatar as informações solicitadas.

### USERS

`GET /users`

Este endpoint trara a lista dos usuários registrados no sistema, em um contexto onde as empresas buscam pelos nomes registrados no banco de dados
para fins de pesquisa de talentos.

### TECHS

`GET /techs`

Esse endpoint busca pelas tecnologias registradas de cada um dos usuários registrados, listando separademente do usuário.

### JOBS

`GET /jobs`

Por fim, esse endpoint busca trazer a lista de cada uma das vagas registradas no website, trazendo especificamente o nome e salário de cada vaga.
