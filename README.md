<h1 align="center">
  Do.Ação - API
</h1>

<p align = "center">
Este é o backend da aplicação Do.Ação - Para a utilizaçao  Um hub de portfólios de programadores daqui da Do.Ação.
</p>

<blockquote align="center">“Faça ou não faça. A tentativa não existe. - Mestre Yoda”</blockquote>

<p align="center">
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## **Endpoints**

A API tem um total de 13 endpoints, sendo em volta principalmente do usuário (dev) - podendo cadastrar seu perfil, Doaçoes que estuda e trabalhos realizados. <br/>

<a style="display:flex; justify-content:center" href="https://drive.google.com/file/d/1I1Rc6dsqlMz1knxdWPtKNcwT5npGur26/view?usp=sharing" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

<blockquote> Para importar o JSON no Insomnia é só clicar no botão "Run in Insomnia". Depois é só seguir os passos que ele irá baixar um arquivo clicar em importar no se insominia e terá todos os endpoints em seu insomnia.
</blockquote>
<br>

A url base da API é https://doacao.onrender.com

## Rotas que não precisão de autenticação

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
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
  asdfsfasfasdvcizuwgxDWXDCFWERFomdzqkwQ.
  qV2NS8CCv0of6s5cTaV0_XoqhPUhK1lFSQmkfIVPrYg",
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

`POST /login - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
  eyJlbWFSADFWERCFdAScWSDAdfciOjE2NzI4NjM2MjcsInN1YiI6IjEifQ
  .HI3dvQ8R0MHurJCLjR5ExCFAqPGgjveC_zw7eu65dMw",
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

Nessa aplicação o usuário com o login ou cadastrado pode ver as doações já cadastrados na plataforma, na API podemos acessar a lista dessa forma:

<h2 align ='center'> Listando todas as Doações </h2>

`GET /donation - FORMATO DA RESPOSTA - STATUS 200`

```json
[
 {
      "userId": 1,
      "title": "Farinha de Trigo",
      "category": "Cereais",
      "validation": "01/02/23",
      "descripition": "Doção sacos de trigo",
      "amounts": 10,
      "address": {
        "city": "São Paulo",
        "state": "São paulo"
      },
      "id": 1
    },
    {
      "userId": 1,
      "title": "Repolhos",
      "category": "Hortaliças",
      "validation": "20/02/23",
      "descripition": "varios Repolhos que sobreram da feira",
      "amounts": 5,
      "address": {
        "city": "São Paulo",
        "state": "São paulo"
      },
      "id": 2
    },
    {
      "userId": 1,
      "title": "Banana",
      "category": "Frutas",
      "validation": "20/02/23",
      "descripition": "Bananas que sobrearam da platanção",
      "amounts": 30,
      "address": {
        "city": "São Paulo",
        "state": "São paulo"
      },
      "id": 3
    },
]
```

Podemos utilizar os query params para mudar a lista, mudando a paginação, podemos alterar quantos usuários queremos no perPage, e alterar a página no parâmetro page. Uma requisição apenas no /users irá trazer 15 usuários na página 1.
Com o parâmetro tech, podemos filtrar por tecnologia.

`GET /donation/?_page=1&_limit=2 - FORMATO DA RESPOSTA - STATUS 200`

```json
[
 {
      "userId": 1,
      "title": "Farinha de Trigo",
      "category": "Cereais",
      "validation": "01/02/23",
      "descripition": "Doção sacos de trigo",
      "amounts": 10,
      "address": {
        "city": "São Paulo",
        "state": "São paulo"
      },
      "id": 1
    },
    {
      "userId": 1,
      "title": "Repolhos",
      "category": "Hortaliças",
      "validation": "20/02/23",
      "descripition": "varios Repolhos que sobreram da feira",
      "amounts": 5,
      "address": {
        "city": "São Paulo",
        "state": "São paulo"
      },
      "id": 2
    },
]
```

Lembrando que no cabeçalho da resposta, temos as informações sobre a paginação, e o nextUrl para acessar a próxima página.

Cabeçalho da resposta:

> nextUrl: /donation/?\_page=2&\_limit=2 <br/>
> page: 2 <br/>

<h2 align ='center'> Buscar Perfil do usuário logado (token) </h2>

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


`GET /users - FORMATO DA REQUISIÇÃO`

<blockquote>Na requisição apenas é necessário o TOKEN, a aplicação ficará responsável em buscar o id do usuário no token e retorna ele.</blockquote>

<br>

Podemos acessar varios usuários utilizando o endpoint:


`GET /users - FORMATO DA RESPOSTA - STATUS 200`

```json
[
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
	},
	{
		"email": "teste2@mail.com",
		"password": "$2a$10$FSiQBECicTk5Po9hknfFyuzpfI1tGw0T3Vq.avPZ/StWqXvEUiw3C",
		"name": "TesteReceptor",
		"cpf": "1234456789",
		"telephone": "123456790910",
		"address": "rua x",
		"profileImgUrl": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
		"donor": false,
		"id": 2
	}
]
```

<h2 align ='center'> Criar Doações para o seu perfil </h2>

`POST /donation/ - FORMATO DA REQUISIÇÃO`

```json
{
	"userId": ":user_id",
	"img": "limào",
	"title": "limào",
	"category": "Fruits",
	"validation": "01/02/23",
	"descripition": "Docao de uma remeça de Maça quase vencisdas",
	"amounts": "51",
	"address": "rua x"
}
```
o retorno sera:

`POST /donation/ - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"userId": ":user_id",
	"img": "limào",
	"title": "limào",
	"category": "Fruits",
	"validation": "01/02/23",
	"descripition": "Docao de uma remeça de Maça quase vencisdas",
	"amounts": "51",
	"address": "rua x",
	"id": "id"
}
```

Ou seja, você pode apenas dar update em quanto você mudou algo que já está no seu perfil. Utilizando este endpoint:

`PATCH /donation/:id- FORMATO DA REQUISIÇÃO`

```json
{
	"userId": ":user_id",
	"img": "limào",
	"title": "limào",
	"category": "Fruits",
	"validation": "01/02/23",
	"descripition": "Docao de uma remeça de Maça quase vencisdas",
	"amounts": "51",
	"address": "rua x",
	"id": "id"
}
```

Também é possível deletar uma doação, utilizando este endpoint:

`DELETE donation/:id`

```
Não é necessário um corpo da requisição.
```

<h2 align ='center'> Atualizando os dados do perfil </h2>

Assim como os endpoints , nesse precisamos estar logados, com o token no cabeçalho da requisição. Estes endpoints são para atualizar seus dados como, foto de perfil, nome, ou qualquer outra informação em relação ao que foi utilizado na criação do usuário.só enviar o dado a ser alterado.

`PATCH /users/:user_id - FORMATO DA REQUISIÇÃO`

```json
{
	"address": "rua x"
}
```

---
