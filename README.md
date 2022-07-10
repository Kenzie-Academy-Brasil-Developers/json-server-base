# API PETS

## URL BASE

```
https://json-server-adopetme.herokuapp.com/
```

# Endpoints

A API tem 4 endpoints

# Rotas que não precisam de autenticação (ROTAS PÚBLICAS)

Não é necessario utilização de token!

## USER

## Register

Rotas para realização de cadastro na API

```
POST /users/register
POST /users/signup
POST /users
```

Formato da requisição ONG/Usuario

#### Usuario

```json
{
  "type": "user",
  "email": "igoruser@gmail.com",
  "name": "Igor Garcia",
  "cpf": "1111111111",
  "address": {
    "cep": "11111-111",
    "logradouro": "Rua Kenzie",
    "complemento": "",
    "bairro": "Kenzie",
    "localidade": "Bebedouro",
    "uf": "SP"
  },
  "avatar": "https://urllink.com/igor.jpg",
  "phone": "111111111 ",
  "momey": "Média de Renda",
  "Whatsapp": "1711111111",
  "home": {
    "typeHome": "Casa",
    "tela": true,
    "animals": {
      "howMany": 2,
      "which": ["Cachorro"]
    }
  }
}
```

### FORMATO DA RESPOSTA - 201 OK

```json
{
  "accessToken": "xxxxxx.xxxxxx.xxxxx",
  "user": {
    "id": 1,
    "type": "user",
    "email": "igoruser@gmail.com",
    "name": "Igor Garcia",
    "cpf": "CPF/RG",
    "address": {
      "cep": "14706-092",
      "logradouro": "Rua Peru",
      "complemento": "",
      "bairro": "Vila Sanderson",
      "localidade": "Bebedouro",
      "uf": "SP"
    },
    "avatar": "https://static.wikia.nocookie.net/smite-br/images/b/ba/Chronos.jpg/revision/latest?cb=20141203152449&path-prefix=pt-br",
    "phone": "1111111111 ",
    "momey": "3000",
    "Whatsapp": "11111111111",
    "home": {
      "typeHome": "Casa",
      "tela": true,
      "animals": {
        "howMany": 2,
        "which": ["Cachorro"]
      }
    }
  }
}
```

#### ONG

```json
{
  "type": "ong",
  "email": "igorong@gmail.com",
  "name": "Igor Garcia",
  "cpf": "1111111111",
  "address": {
    "cep": "11111-111",
    "logradouro": "Rua Kenzie",
    "complemento": "",
    "bairro": "Kenzie",
    "localidade": "Bebedouro",
    "uf": "SP"
  },
  "avatar": "https://urllink.com/igor.jpg",
  "phone": "111111111 ",
  "Whatsapp": "1711111111"
}
```

### FORMATO DA RESPOSTA - 201 OK

```json
{
  "accessToken": "xxxxxx.xxxxxx.xxxxx",
  "user": {
    "id": 2,
    "type": "ong",
    "email": "igorong@gmail.com",
    "name": "Igor Garcia",
    "cpf": "1111111111",
    "address": {
      "cep": "11111-111",
      "logradouro": "Rua Kenzie",
      "complemento": "",
      "bairro": "Kenzie",
      "localidade": "Bebedouro",
      "uf": "SP"
    },
    "avatar": "https://urllink.com/igor.jpg",
    "phone": "111111111 ",
    "Whatsapp": "1711111111"
  }
}
```

## Login

Rotas para realização de Login na API

```
POST /login
POST /signin
```

### Formato da requisição ONG/Usuario

```JSON
{
  "email": "teste@kenzie.com.br",
  "password": "Teste123"
}
```

### FORMATO DA RESPOSTA USUÁRIO - 201 OK

```json
{
  "accessToken": "xxxxxx.xxxxxx.xxxxx",
  "user": {
    "id": 1,
    "type": "user",
    "email": "igoruser@gmail.com",
    "name": "Igor Garcia",
    "cpf": "CPF/RG",
    "address": {
      "cep": "14706-092",
      "logradouro": "Rua Peru",
      "complemento": "",
      "bairro": "Vila Sanderson",
      "localidade": "Bebedouro",
      "uf": "SP"
    },
    "avatar": "https://static.wikia.nocookie.net/smite-br/images/b/ba/Chronos.jpg/revision/latest?cb=20141203152449&path-prefix=pt-br",
    "phone": "1111111111 ",
    "momey": "3000",
    "Whatsapp": "11111111111",
    "home": {
      "typeHome": "Casa",
      "tela": true,
      "animals": {
        "howMany": 2,
        "which": ["Cachorro"]
      }
    }
  }
}
```

### FORMATO DA RESPOSTA ONG - 201 OK

```json
{
  "accessToken": "xxxxxx.xxxxxx.xxxxx",
  "user": {
    "id": 2,
    "type": "ong",
    "email": "igorong@gmail.com",
    "name": "Igor Garcia",
    "cpf": "1111111111",
    "address": {
      "cep": "11111-111",
      "logradouro": "Rua Kenzie",
      "complemento": "",
      "bairro": "Kenzie",
      "localidade": "Bebedouro",
      "uf": "SP"
    },
    "avatar": "https://urllink.com/igor.jpg",
    "phone": "111111111 ",
    "Whatsapp": "1711111111"
  }
}
```

## PET

```
GET /pet
```

### FORMATO DA RESPOSTA ONG - 201 OK

```json
[
  {
    "id": 1,
    "petName": "Pimposo",
    "img": "https://wpets.com.br/wp-content/uploads/2020/02/4da2b8a9267c54394586f606bcc9f438.jpg",
    "breed": "BorderCollie",
    "species": "Cachorro",
    "color": "Branco e Marrom",
    "gender": "Macho",
    "age": "Idoso",
    "porte": "Grande",
    "ong": "LovePaws",
    "idOwner": 1,
    "address": {
      "cep": "11111-111",
      "logradouro": "Rua Kenzie",
      "complemento": "",
      "bairro": "Kenzie",
      "localidade": "Bebedouro",
      "uf": "SP"
    },
    "description": "Doa-se esse lindo e amoroso cão da raça BorderCollie idoso 10 anos, castrado e vacinado, atende pelo nome Pimposo, foi encontrado abandonado em uma avenida e precisa de uma nova familia.",
    "situation": "Idoso, vacinado e castrado, não possue nenhum problema de saúde"
  }
]
```
### Listar animais cadastrados - ONG

```
GET /pet?idOwner=:id
```

# Rotas que precisam de autenticação (ROTAS PRIVADAS)

## PET

### Cadastrar Pet - ONG

```
POST /pet
```

### Formato da requisição 

```json
{
  "petName": "Pimposo",
  "img": "https://wpets.com.br/wp-content/uploads/2020/02/4da2b8a9267c54394586f606bcc9f438.jpg",
  "breed": "BorderCollie",
  "species": "Cachorro",
  "color": "Branco e Marrom",
  "gender": "Macho",
  "age": "Idoso",
  "porte": "Grande",
  "ong": "LovePaws",
  "idOwner": 1,
  "address": {
    "cep": "11111-111",
    "logradouro": "Rua Kenzie",
    "complemento": "",
    "bairro": "Kenzie",
    "localidade": "Bebedouro",
    "uf": "SP"
  },
  "description": "Doa-se esse lindo e amoroso cão da raça BorderCollie idoso 10 anos, castrado e vacinado, atende pelo nome Pimposo, foi encontrado abandonado em uma avenida e precisa de uma nova familia.",
  "situation": "Idoso, vacinado e castrado, não possue nenhum problema de saúde"
}
```

### FORMATO DA RESPOSTA ONG - 201 OK

```json
{
  "id": 1,
  "petName": "Pimposo",
  "img": "https://wpets.com.br/wp-content/uploads/2020/02/4da2b8a9267c54394586f606bcc9f438.jpg",
  "breed": "BorderCollie",
  "species": "Cachorro",
  "color": "Branco e Marrom",
  "gender": "Macho",
  "age": "Idoso",
  "porte": "Grande",
  "ong": "LovePaws",
  "idOwner": 1,
  "address": {
    "cep": "11111-111",
    "logradouro": "Rua Kenzie",
    "complemento": "",
    "bairro": "Kenzie",
    "localidade": "Bebedouro",
    "uf": "SP"
  },
  "description": "Doa-se esse lindo e amoroso cão da raça BorderCollie idoso 10 anos, castrado e vacinado, atende pelo nome Pimposo, foi encontrado abandonado em uma avenida e precisa de uma nova familia.",
  "situation": "Idoso, vacinado e castrado, não possue nenhum problema de saúde"
}
```