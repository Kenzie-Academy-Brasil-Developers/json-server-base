# json-server-base

Esse é o repositório com a base de JSON-Server + JSON-Server-Auth já configurada, feita para ser usada no desenvolvimento das API's nos Projetos Front-end.

### BASEURL https://front-end-project-library.onrender.com/ *


## Endpoints

Assim como a documentação do JSON-Server-Auth traz (https://www.npmjs.com/package/json-server-auth), existem 3 endpoints que podem ser utilizados para cadastro e 2 endpoints que podem ser usados para login.

### Cadastro

POST /register <br/>
{
      "email": "adm123@adm.com",
      "password": "Adm1234@",
      "name": "Admistrador",
      "age": 1000,
      "id": "ayHinpj63b5855938b62",
      "is_adm":"true"
    }


### Login

POST /login <br/>
    {
	"email": "teste@123gmail.com",
	"password": "teste123"
}

### Products *precisa de token*
GET /products 

GET /products/{id}

PATCH /product/{id} *precisa de um body*
    {
	"id": "63b57adc9f552",
	"category": "Web development",
	"name": "Web Development for beginners",
	"author": "aaaaaaaaaaaaaaaaaaaa",
	"description": "The book you were waiting for to learn how to develop a website !",
	"img": "https://m.media-amazon.com/images/I/41+Bik0tUlL.jpg",
	"price": 141.58
}
POST /product/ *precisa de um body* para postar um novo produto
    {
	"id": "63b57adc9f552",
	"category": "Web development",
	"name": "Web Development for beginners",
	"author": "aaaaaaaaaaaaaaaaaaaa",
	"description": "The book you were waiting for to learn how to develop a website !",
	"img": "https://m.media-amazon.com/images/I/41+Bik0tUlL.jpg",
	"price": 141.58
}
DELETE /product/{id}

### Products *precisa de token*
GET /users

GET /users{id}




Qualquer um desses 2 endpoints pode ser usado para realizar login com um dos usuários cadastrados na lista de "Users"
