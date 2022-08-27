# JSON-Server-API

Esse é o repositório de uma API fake criada através do json-server-auth para
realização do projeto final front-end.

## Endpoints

A aplicação contará com X end-points, sendo em volta do cliente, do restaurante
e dos moderadores da plataforma.

 <h2 align ='center'> Cadastro </h2>

O cadastro será de dois tipos: do cliente e do restaurante.

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

Exemplo de requisição:

```json
//Cliente
{
	"name": "Guilherme",
	"email": "gui.test2e@gmail.com",
	"password":"teste123",
	"type": "custommer"
}

//Restaurante
{
	"name": "Vale do bem",
    "url-img": "http://img",
	"menu": [
		{"food": "X-Burguer Vegano",
		 "price": 20,
		 "promo-price": 15,
		 "category": ["vegan", "zero-lactose","zero-gluten","vegetarian"],
         "description": "Hamburguer de soja com alface, tomate...  "
		},
		{
		"food": "Pao de queijo vegano",
		 "price": 5,
		 "promo-price": 3,
		 "category": ["vegan", "zero-lactose","vegetarian"],
         "description": "Hamburguer de soja com alface, tomate...  "
		}
	],
	"rate": 4
}
```

 <h2 align ='center'> Login </h2>

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

Exemplo de requisição:

```json
{
	"email": "gui.test2e@gmail.com",
	"password": "teste123"
}
```

 <h2 align ='center'> Editar perfil usuário/restaurante </h2>

`PATCH /users/:ID - FORMATO DA RESPOSTA - STATUS 200`

É necessário enviar o token Bearer para fazer essa requisição.

Exemplo de requisição:

```json
{
	"address": "Rua Veneza..."
}
```

 <h2 align ='center'> Listar restaurantes </h2>

`GET /restaurants - FORMATO DA RESPOSTA - STATUS 200`

Resposta:

```json
{
	"address": "Rua Veneza..."
}
```

 <h2 align ='center'> Acessando um restaurante específico </h2>

`GET /restaurants/:ID - FORMATO DA RESPOSTA - STATUS 200`

 <h2 align ='center'> Listar restaurantes </h2>

`GET /restaurants - FORMATO DA RESPOSTA - STATUS 200`

 <h2 align ='center'> Acessando um restaurante específico </h2>

`GET /restaurants/:ID - FORMATO DA RESPOSTA - STATUS 200`
