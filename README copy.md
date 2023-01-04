<h1 align="center">
  Do.Ação - API
</h1>

<p align = "center">
Este é o backend da aplicação Do.Ação - Para a utilizaçao  Um hub de portfólios de programadores daqui da Do.Ação.
</p>

<blockquote align="center">“Sempre passar o que você aprendeu. - Mestre Yoda”</blockquote>

<p align="center">
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## **Endpoints**

A API tem um total de 11 endpoints, sendo em volta principalmente do usuário (dev) - podendo cadastrar seu perfil, Doaçoes que estuda e trabalhos realizados. <br/>

<a style="display:flex; justify-content:center" href="https://insomnia.rest/run/?label=Kenzie%20Hub&uri=https%3A%2F%2Fgithub.com%2FKenzie-Academy-Brasil-Developers%2Fkenziehub-api%2Fblob%2Fmaster%2FInsomnia_kenzie_hub.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

<blockquote> Para importar o JSON no Insomnia é só clicar no botão "Run in Insomnia". Depois é só seguir os passos que ele irá importar todos os endpoints em seu insomnia.
</blockquote>
<br>

A url base da API é https://kenziehub.herokuapp.com

## Rotas que não precisão de autenticação

<h2 align ='center'> Listando todas as Doações </h2>


<h2 align ='center'> Criação de usuário Doador</h2>

`POST /register - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "teste@mail.com",
  "password": "12345678",
  "name": "Teste",
  "businessName": "Testando",
  "cnpj": "000112345678910",
  "telephone": "123456790910",
  "address": "rua x",
  "profileImgUrl": "http://localhost3001",
  "donor": true
}
```

<h2 align ='center'> Criação de usuário solicitante</h2>

`POST /register - FORMATO DA REQUISIÇÃO`

```json
  {
      "email": "teste2@mail.com",
      "password": "12345678",
      "name": "Teste Receptor",
      "cpf": "1234456789",
      "telephone": "123456790910",
      "address": "rua x",
      "profileImgUrl": "http://localhost3001",
      "donor": false,
      "id": 2
    },
```

Caso dê tudo certo, a resposta será assim:

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.asdfsfasfasdvcizuwgxDWXDCFWERFomdzqkwQ.qV2NS8CCv0of6s5cTaV0_XoqhPUhK1lFSQmkfIVPrYg",
  "user": {
    "email": "teste@mail.com",
    "name": "Teste",
    "businessName": "Testando",
    "cnpj": "000112345678910",
    "telephone": "123456790910",
    "address": "rua x",
    "profileImgUrl": "http://localhost3001",
    "donor": true,
    "id": 1
  }
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:
No exemplo a requisição foi feita faltando o campo "email" e "password".

`POST /users - `
` FORMATO DA RESPOSTA - STATUS 400`

```json
{
  "status": "error",
  "message": ["Email and password are required"]
}
```

A senha necessita de 8 caracteres.

Email já cadastrado:

`POST /users - `
` FORMATO DA RESPOSTA - STATUS 400`

```json
{
  "status": "error",
  "message": "Email already exists"
}
```

<h2 align = "center"> Login </h2>

`POST /login - FORMATO DA REQUISIÇÃO`

```json
{
	"email": "teste@mail.com",
	"password": "12345678"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /login - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFSADFWERCFdAScWSDAdfciOjE2NzI4NjM2MjcsInN1YiI6IjEifQ.HI3dvQ8R0MHurJCLjR5ExCFAqPGgjveC_zw7eu65dMw",
  "user": {
    "email": "teste@mail.com",
    "name": "Teste",
    "businessName": "Testando",
    "cnpj": "000112345678910",
    "telephone": "123456790910",
    "address": "rua x",
    "profileImgUrl": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    "donor": true,
    "id": 1
  }
}
```

Com essa resposta, vemos que temos duas informações, o user e o token respectivo, dessa forma você pode guardar o token e o usuário logado no localStorage para fazer a gestão do usuário no seu frontend.

## Rotas que necessitam de autorização

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

<h2 align ='center'> Buscar Perfil do usuário logado (token) </h2>

Nessa aplicação o usuário com o login ou cadastrado pode ver as doações já cadastrados na plataforma, na API podemos acessar a lista dessa forma:
Aqui conseguimos ver as doações.

`GET /donation - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  {
    "userId": 2,
    "img": "bananaImagem",
    "title": "Banana",
    "category": "Fruits",
    "validation": "01/02/23",
    "descripition": "Estou doando Varias Bananas de Feira",
    "amounts": "51",
    "address": "rua x",
    "id": 1
  },
  {
    "userId": 4,
    "img": "limào",
    "title": "limào",
    "category": "Fruits",
    "validation": "01/02/23",
    "descripition": "Docao de uma remeça de Maças do hortifrut da rtegião",
    "amounts": "51",
    "address": "rua x",
    "id": 2
  },
  {
    "userId": 4,
    "img": "limão",
    "title": "limão",
    "category": "Fruits",
    "validation": "01/02/23",
    "descripition": "Docao de uma remeça de limão da fazenda",
    "amounts": "51",
    "address": "rua x",
    "id": 3
  }
]
```

Podemos utilizar os query params para mudar a lista, mudando a paginação, podemos alterar quantos usuários queremos no perPage, e alterar a página no parâmetro page. Uma requisição apenas no /users irá trazer 15 usuários na página 1.
Com o parâmetro tech, podemos filtrar por tecnologia.

`GET /donation/?_page=1&_limit=2 - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  {
    "userId": 1,
    "img": "Frutas",
    "title": "Banana",
    "category": "Fruits",
    "validation": "01/02/23",
    "descripition": "Docao de uma remeça de Bananas quase vencisdas",
    "amounts": "51",
    "address": "rua x",
    "id": 1
  },
  {
    "userId": 1,
    "img": "Frutas",
    "title": "limão",
    "category": "Fruits",
    "validation": "10/02/23",
    "descripition": "Docao de uma remeça de limão quase vencisdas",
    "amounts": "51",
    "address": "rua x",
    "id": 2
  }
]
```

Lembrando que no cabeçalho da resposta, temos as informações sobre a paginação, e o nextUrl para acessar a próxima página.

Cabeçalho da resposta:

> nextUrl: /donation/?\_page=2&\_limit=2 <br/>
> page: 2 <br/>

Podemos acessar um usuário específico utilizando o endpoint:

`GET /users/:user_id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "email": "teste@mail.com",
  "password": "$2a$10$FSiQBECicTk5Po9hknfFyuzpfI1tGw0T3Vq.avPZ/StWqXvEUiw3C",
  "name": "Teste",
  "businessName": "Testando",
  "cnpj": "000112345678910",
  "telephone": "123456790910",
  "address": "rua x",
  "profileImgUrl": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  "donor": true,
  "id": 1
}
```


`GET /profile - FORMATO DA REQUISIÇÃO`

<blockquote>Na requisição apenas é necessário o TOKEN, a aplicação ficará responsável em buscar o id do usuário no token e retorna ele.</blockquote>

<br>

`GET /profile - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "id": "1f4b83fe-c3df-4818-8356-c8d4dedeb49b",
  "name": "Teste",
  "email": "teste@gmail.com",
  "course_module": "m3",
  "bio": "Teste",
  "contact": "linkedin/in/teste",
  "techs": [],
  "works": [],
  "created_at": "2022-08-08T00:08:22.920Z",
  "updated_at": "2022-08-08T00:08:22.920Z",
  "avatar_url": null
}
```

<h2 align ='center'> Criar tecnologias para o seu perfil </h2>

`POST /users/techs - FORMATO DA REQUISIÇÃO`

```json
{
  "title": "React",
  "status": "Iniciante"
}
```

1. O campo - "status" deve receber respectivamente os 3 níveis de habilidade:
   - "Iniciante"
   - "Intermediário"
   - "Avançado"

Caso você tente criar uma tecnologia com o mesmo nome para o seu perfil, receberá este erro:

`POST /users/techs - FORMATO DA RESPOSTA - STATUS 401`

```json
{
  "status": "error",
  "message": "User Already have this technology created, you can only update it"
}
```

Ou seja, você pode apenas dar update em quanto você avançou nas tecnologias que já está no seu perfil. Utilizando este endpoint:

`PUT /users/techs/:tech_id - FORMATO DA REQUISIÇÃO`

```json
{
  "status": "Avançado"
}
```

Também é possível deletar uma tecnologia, utilizando este endpoint:

`DELETE /users/techs/:tech_id`

```
Não é necessário um corpo da requisição.
```

<h2 align ='center'> Criar trabalhos para o seu perfil </h2>

Da mesma forma de criar tecnologias, conseguimos criar trabalhos, dessa forma:

`POST /users/works - FORMATO DA REQUISIÇÃO`

```json
{
  "title": "KenzieHub",
  "description": "I was the backend developer of this project, and i did it using Typescript and NodeJS",
  "deploy_url": "https://kenziehub.me"
}
```

Conseguimos atualizar o titulo, a descrição ou o deploy_url, qualquer uma das informações do respectivo trabalho.
Utilizando este endpoint:

`PUT /users/works/:work_id - FORMATO DA REQUISIÇÃO`

```json
{
  "title": "KenzieHub Atualizado",
  "description": "Nova descrição."
}
```

Também é possível deletar um trabalho do seu perfil, utilizando este endpoint:

`DELETE /users/works/:work_id`

```
Não é necessário um corpo da requisição.
```

<h2 align ='center'> Atualizando os dados do perfil </h2>

Assim como os endpoints de tecnologias e trabalhos, nesse precisamos estar logados, com o token no cabeçalho da requisição. Estes endpoints são para atualizar seus dados como, foto de perfil, nome, ou qualquer outra informação em relação ao que foi utilizado na criação do usuário.

Endpoint para atualizar a foto de perfil:

`PATCH /users/avatar - FORMATO DA REQUISIÇÃO`

```multipart
avatar: <Arquivo de imagem>
```

Nesse endpoint podemos atualizar qualquer dado do usuário, e a senha também, porém é necessário enviar a antiga senha no campo "old_password" caso o usuário queira atualizar a senha.

`PUT /profile - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "Gabriel Araujo",
  "contact": "linkedin/araujooj",
  "old_password": "123456",
  "password": "123456789"
}
```

---

Feito com ♥ by araujooj :wave:
