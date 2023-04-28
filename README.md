### Sabios Blog

Descrição: A aplicação tem um total de 7 endpoints, podendo cadastrar um usuário, realizar login, buscar todos os posts. Existe um usuário administrador que poderá cadastrar, editar e deletar um post.

### URL da api.

### Endpoints

POST /users - criação de um usuário, necessitará de um corpo.

{
"name": "Kenzinho",
"email": "kenzinhoteste@mail.com",
"password": "123456",
"image": "url"
}

POST /users - FORMATO DA RESPOSTA - STATUS 201

{
"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppbmhvQG1haWwuY29tIiwiaWF0IjoxNjgyNjkyNzkwLCJleHAiOjE2ODI2OTYzOTAsInN1YiI6IjEifQ.pH4_Tv414ph1pC-zXuyNPuL3iqw4KeZIKZor9A85_Fo",
"user": {
"id": 1,
"name": "Kenzinho",
"email": "kenzinho@mail.com",
"image": "url",
"isAdmin": true
}

}

//POSSÍVEIS ERROS

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:

A senha precisa de pelo menos 6 caracteres contendo pelo menos uma letra maiuscula, uma minúscula e um caractere especial

POST /users - FORMATO DA RESPOSTA - STATUS 400

"message":"Password is too short"

Email já cadastrado:

POST /users - FORMATO DA RESPOSTA - STATUS 400

"message":"Email already exists"

Campo de requisição vazio ou incompleto

POST /users - FORMATO DA RESPOSTA - STATUS 400

"message":"Email and password are required"

POST /login - FORMATO DA REQUISIÇÃO

{
"email": "kenzinhoteste@mail.com",
"password": "123456"
}

Caso dê tudo certo, a resposta será assim:

POST /login - FORMATO DA RESPOSTA - STATUS 200

{
"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppbmhvQG1haWwuY29tIiwiaWF0IjoxNjgyNjkyNzkwLCJleHAiOjE2ODI2OTYzOTAsInN1YiI6IjEifQ.pH4_Tv414ph1pC-zXuyNPuL3iqw4KeZIKZor9A85_Fo",
"user": {
"id": 1,
"name": "Kenzinho",
"email": "kenzinho@mail.com",
"image": "url",
"isAdmin": true
}
}

//POSSÍVEIS ERROS

Caso exista erro no login, a resposta será assim:

POST /login - FORMATO DA RESPOSTA - STATUS 400

"message": "Incorrect password"

A senha está incorreta.

POST /login - FORMATO DA RESPOSTA - STATUS 400

"message": "Cannot find user";

O e-mail não está cadastrado.

POST /login - FORMATO DA RESPOSTA - STATUS 400

"message": "Email and password are required";

Campo de requisição vazio ou incompleto

GET /users/:user_id - autologin: o usuário não logado não conseguirá ir para a página de dashboard assim como o usuário logado será redirecionado do login para a dashboard.

Caso dê tudo certo, a resposta será assim:

GET /users/:user_id - FORMATO DA RESPOSTA - STATUS 200

{
"id": 1,
"name": "Kenzinho",
"email": "kenzinho@mail.com",
"password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
"image": "url",
"isAdmin": true
}

//POSSÍVEIS ERROS

Caso exista erro no login, a resposta será assim:

GET /users/:user_id - FORMATO DA RESPOSTA - STATUS 401

"message: "Missing authorization header"

Token não existe.

GET /users/:user_id - FORMATO DA RESPOSTA - STATUS 401

"message": "jwt malformed"

Token inválido.

GET /users/:user_id - FORMATO DA RESPOSTA - STATUS 401

"message": "jwt expired"

Token expirado.

GET /posts - renderização dos posts criados pelo adm.

Caso dê tudo certo, a resposta será assim:

GET /posts - FORMATO DA RESPOSTA - STATUS 200

[
{
"userId": 1,
"postId": 1,
"title": "Post sobre React",
"description": "Visite o link da documentação",
"likes": 0,
"techCategory": "Framework",
"postImage": "?",
"postDate": "date",
"link": "url"
}
]

//POSSÍVEIS ERROS

Caso exista erro no login, a resposta será assim:

GET /users/:user_id - FORMATO DA RESPOSTA - STATUS 401

"message: "Missing authorization header"

Token não existe.

GET /users/:user_id - FORMATO DA RESPOSTA - STATUS 401

"message": "jwt malformed"

Token inválido.

GET /users/:user_id - FORMATO DA RESPOSTA - STATUS 401

"message": "jwt expired"

Token expirado.

POST /posts - criação dos posts.

Caso dê tudo certo, a resposta será assim:

POST /posts - FORMATO DA RESPOSTA - STATUS 200

{
"userId": 1,
"title": "Post sobre React2",
"description": "Visite o link da documentação",
"techCategory": "Framework",
"postImage": "./",
"postDate": "date",
"link": "url",
"id": 1
}