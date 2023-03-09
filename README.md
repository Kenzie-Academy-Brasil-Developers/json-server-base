# KenzieDex API

- [URL Repo API kenzieDex](https://github.com/M3-T15-Projeto-Front-2023/KenzieDex-Json-server)
- [URL API kenzieDex](https://kenziedex.onrender.com/)

- Clique no botão para importar direto no Insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=KenzieDex%20API&uri=https%3A%2F%2Fgithub.com%2FM3-T15-Projeto-Front-2023%2FKenzieDex-Json-server%2Fblob%2Fmaster%2FInsomnia_kenzieDex.json)

# json-server-base

Esse é o repositório com a base de JSON-Server + JSON-Server-Auth já configurada, feita para ser usada no desenvolvimento das API's nos Projetos Front-end.

## Endpoints

Assim como a documentação do JSON-Server-Auth traz (https://www.npmjs.com/package/json-server-auth), existem 3 endpoints que podem ser utilizados para cadastro e 2 endpoints que podem ser usados para login.

### Cadastro

POST /register <br/>
POST /signup <br/>
POST /users

Qualquer um desses 3 endpoints irá cadastrar o usuário na lista de "Users", sendo que os campos obrigatórios são os de email e password.
Você pode ficar a vontade para adicionar qualquer outra propriedade no corpo do cadastro dos usuários.

### Login

POST /login <br/>
POST /signin

Qualquer um desses 2 endpoints pode ser usado para realizar login com um dos usuários cadastrados na lista de "Users"

### Team

POST /teams <br/>
DELETE /teams/id <br/>

## Battle

GET /battles <br/>
