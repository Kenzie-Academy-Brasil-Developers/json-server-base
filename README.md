Sabios Blog API
A Sabios Blog API possui um total de 7 endpoints, que permitem criar usuários, realizar login e buscar todos os posts. Há um usuário administrador que tem permissão para cadastrar, editar e excluir posts.

# URL da API
https://sabiusapi.onrender.com/
# Endpoints
## POST /register
Cria um novo usuário na aplicação.

# Requisição:
{
    "name": "Kenzinho",
    "email": "kenzinhoteste@mail.com",
    "password": "123456",
    "image": "url"
}

# Resposta de sucesso: 
STATUS 200
{
    "accessToken": "[token de acesso gerado]",
    "user": {
        "id": 1,
        "name": "Kenzinho",
        "email": "kenzinho@mail.com",
        "image": "url",
        "isAdmin": true
    }
}
# Possíveis erros:

# Requisição inválida:
STATUS 400
{
  "message": "Email and password are required"
}

# Senha muito curta:
STATUS 400
{
  "message": "Password is too short"
}
E-mail já cadastrado:
STATUS 400
{
  "message": "Email already exists"
}
## POST /login
Realiza o login de um usuário na aplicação.

# Requisição:
 STATUS 200
{
    "email": "kenzinhoteste@mail.com",
    "password": "123456"
}
# Resposta de sucesso:
{
    "accessToken": "[token de acesso gerado]",
    "user": {
        "id": 1,
        "name": "Kenzinho",
        "email": "kenzinho@mail.com",
        "image": "url",
        "isAdmin": true
    }
}
# Possíveis erros:
# Requisição inválida:
STATUS 400
{
  "message": "Email and password are required"
}
# E-mail não cadastrado:
STATUS 400

{
  "message": "Cannot find user"
}
# Senha incorreta:
STATUS 400
{
  "message": "Incorrect password"
}

## GET /users/:userId
Recupera as informações de um usuário logado.

# Resposta de sucesso:
 STATUS 200
{
    "id": 1,
    "name": "Kenzinho",
    "email": "kenzinho@mail.com",
    "password": "[senha criptografada]",
    "image": "url",
    "isAdmin": true
}
# Possíveis erros:

# Token de acesso ausente:
STATUS 400
{
  "message": "Missing authorization header"
}
# Token de acesso inválido:
STATUS 400
{
  "message": "jwt malformed"
}
# Token de acesso expirado:
STATUS 400
{
  "message": "jwt expired"
}
## GET /posts
Recupera todos os posts criados pelo administrador.


# Resposta de sucesso:
STATUS 200
    {
        "userId": 1,
        "postId": 1,
        "title": "Post sobre React",
        "description": "Visite o link da documentação",
        "likes": 0,
    }

## POST /posts 
Criação de novos posts, apenas o administrador poderá criar novos posts.

# Requisição:
{
    "title": "TESTE EDIT",
    "description": "Visite o link da documentação",
    "tech_category": "Framework",
    "postImage": "./",
    "link": "url",
}

# Resposta de sucesso:
STATUS 201
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
## Possíveis erros:

# ID não passado no corpo. 
STATUS 401
{
"Message": "Private resource creation: request body must have a reference to the owner id"
}

# Não autorizado, token inválido. 
STATUS 401
{
"Message": "Invalid token"
}


## PATCH /posts/:postId
Edita as informações dos posts criados pelo administrador.

# Requisição:
{
    "title": "TESTE EDIT",
    "description": "Visite o link da documentação",
    "tech_category": "Framework",
    "postImage": "./",
    "link": "url",
    "id": 4,
}

# Resposta de sucesso:
STATUS 200
{
    "title": "Teste",
    "description": "Teste",
    "likes": 0,
    "techCategory": "Teste",
    "postImage": "https://user-images.githubusercontent.com/5574267/130804494-a9d2d69c-f170-4576-b2e1-0bb7f13dd92d.gif",
    "link": "https://www.npmjs.com/package/react-toastify",
    "userId": 1,
    "id": 4
}
# Possíveis erros:
Caso o usuário não passe o ID do post.
STATUS 401
{
"Message": "Missing authorization header"
}

# Token inválido. 
STATUS 403
{
"Message": "Missing authorization header"
}
# ID do post não encontrado.
STATUS 403
{
	"Message": "Cannot read property 'userId' of undefined"
}


## DELETE /posts/:postsId
Não necessita de um corpo de requisição. 
Possíveis erros:
# Token inválido 
STATUS 401
{
"Message": "Missing authorization header"
}

# Token inválido, apenas o administrador pode excluir os posts. 
STATUS 403
{
	"Message": "Private resource access: entity must have a reference to the owner id"
}