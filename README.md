EndPoints



Cadastro:

POST /users

ex:
{
    "email": "teste@teste.com",
    "password": "123456"
}


Login:

POST /login

ex:
{
    "email": "teste@teste.com",
    "password": "123456"
}

response:
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNlcmdpb0BtYWlsLmNvbSIsImlsdsdgsfTExMSwiZXhwIjoxNjUxNzg4NzExLCJzdWIiOiIyIn0.XpMIFM49i7yei5z6af4-ycFj5MMq7nLHZqIkLW5189E",
	"user": {
		"email": "teste@teste.com",
		"id": 2
	}
}


Postar comentários:

Todos podem ler. Comentário associado ao usuário que escreveu.

POST /posts

ex:

Bearer : token de autenticação

Body:

{    
	"text" : "testando",
	"userId": "2"
}


Adicionar linguagens:

Só usuários autenticados podem ler

POST /languages

ex:

Bearer : token de autenticação

Body:

{    
	"languages" : "testando",
	"userId": "2"
}



