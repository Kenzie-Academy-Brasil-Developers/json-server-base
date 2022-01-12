# json-server-base

Esse é o repositório com a base de JSON-Server + JSON-Server-Auth já configurada, feita para ser usada no desenvolvimento das API's nos Capstones do Q2.

## Endpoints

| Metodo | Caminho                | Descrição            |
|--------|------------------------|----------------------|
| POST   | [/register](#cadastro) | Cadastra usuário     |
| POST   | [/signup](#cadastro)   | Cadastra usuário     |
| POST   | [/users](#cadastro)    | Cadastra usuário     |
| POST   | [/login](#login)       | Autentica usuário    |
| POST   | [/signin](#login)      | Autentica usuário    |
| GET    | [/books](#books)       | Lista todos livros   |
| POST   | [/books](#books)       | Adiciona novo livro  |
| GET    | [/reviews](#reviews)    | Lista todos reviews  |
| POST   | [/reviews](#reviews)                    | Adiciona novo review |

### Autenticação

Assim como a documentação do [JSON-Server-Auth](https://www.npmjs.com/package/json-server-auth) traz, existem 3 endpoints que podem ser utilizados para cadastro e 2 endpoints que podem ser usados para login.

#### Cadastro

- POST /register
- POST /signup
- POST /users

Requisição:
```json
{
    "email": "kachow@speed.me",
    "password": "gottaGoFast",
    "nome": "Relâmpago Marquinhos"
}
```
Resposta:
```json
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6Ik...",
    "user": {
        "email": "kachow@speed.me",
        "name": "Relãmpago Marquinhos",
        "id": 4
    }
}
```


Qualquer um desses 3 endpoints irá cadastrar o usuário na lista de "Users", sendo que os campos obrigatórios são os de email e password.

#### Login

- POST /login
- POST /signin

Requisição:
```json
{
    "email": "kachow@speed.me",
    "password": "gottaGoFast"
}
```
Resposta:
```json
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6Ik...",
    "user": {
        "email": "kachow@speed.me",
        "name": "Relâmpago Marquinhos",
        "id": 4
    }
}
```

Qualquer um desses 2 endpoints pode ser usado para realizar login com um dos usuários cadastrados na lista de "Users"

### Books
Listagem e criação de livros no banco de dados.

| Ação     | Autenticação necessária |
|----------|-------------------------|
| Listagem | Não                     |
| Criação  | Sim                     |

- GET /books
```json
[
    {
        "title": "The Hitchhiker's Guide to the Galaxy",
        "author": "Douglas Adams",
        "genres": [
            "comedy",
            "science fiction",
            "adventure"
        ],
        "id": 1
    },
    {
        "title": "The Handmaid's Tale",
        "author": "Margaret Atwood",
        "genres": [
            "drama",
            "dystopian",
            "triller"
        ],
        "id": 2
    }
]
```
- POST /books

Requisição:
```json
{
    "title": "Ayrton Senna: Uma Lenda a Toda Velocidade",
    "author": "Christopher Hilton",
    "genres": ["biography", "non-fiction", "inspirational"]
}
```
Resposta:
```json
{
    "title": "Ayrton Senna: Uma Lenda a Toda Velocidade",
    "author": "Christopher Hilton",
    "genres": [
        "biography",
        "non-fiction",
        "inspirational"
    ],
    "id": 3
}
```

### Reviews
Listagem e criação de reviews

| Ação     | Autenticação necessária |
|----------|-------------------------|
| Listagem | Sim                     |
| Criação  | Sim                     |

- GET /reviews
```json
[
    {
        "review": "Don't Panic",
        "rating": 4,
        "author": "Ford",
        "booksId": 1,
        "id": 1,
        "books": {
            "title": "The Hitchhiker's Guide to the Galaxy",
            "author": "Douglas Adams",
            "genres": [
                "comedy",
                "science fiction",
                "adventure"
            ],
            "id": 1
        }
    },
    {
        "review": "Katchow",
        "rating": 4,
        "author": "Relâmpago Marquinhos",
        "booksId": 3,
        "id": 2,
        "books": {
            "title": "Ayrton Senna: Uma Lenda a Toda Velocidade",
            "author": "Christopher Hilton",
            "genres": [
                "biography",
                "non-fiction",
                "inspirational"
            ],
            "id": 3
        }
    }
]
```
- POST /books

Requisição:
```json
{
    "review":"Katchow",
    "rating": 4,
    "author": "Relâmpago Marquinhos",
    "booksId": 3
}
```
Resposta:
```json
{
    "review": "Katchow",
    "rating": 4,
    "author": "Relâmpago Marquinhos",
    "booksId": 3,
    "id": 2,
    "books": {
        "title": "Ayrton Senna: Uma Lenda a Toda Velocidade",
        "author": "Christopher Hilton",
        "genres": [
            "biography",
            "non-fiction",
            "inspirational"
        ],
        "id": 3
    }
}
```
