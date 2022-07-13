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
  "email": "kenzinho@gmail.com",
  "password": 123456,
  "name": "Kenzinho",
  "cpfcnpj": "12345678911",
  "img": "https://urllink.com/igor.jpg"
}
```

### FORMATO DA RESPOSTA - 201 OK

```json
{
  "accessToken": "xxxxx.xxxxx.xxxx",
  "user": {
    "email": "kenzinho@mail.com",
    "type": "user",
    "img": "https://urllink.com/kenzinho.jpg",
    "name": "Kenzinho",
    "cpfcnpj": 12345678911,
    "id": 2
  }
}
```

#### ONG

```json
{
  "type": "ong",
  "email": "kenzinho.ong@gmail.com",
  "password": 123456,
  "name": "Kenzinho ONG",
  "cpfcnpj": "12345678911",
  "img": "https://urllink.com/kenzinho.jpg"
}
```

### FORMATO DA RESPOSTA - 201 OK

```json
{
  "accessToken": "xxxxx.xxxxx.xxxx",
  "user": {
    "email": "kenzinho@mail.com",
    "type": "user",
    "img": "https://urllink.com/kenzinho.jpg",
    "name": "Kenzinho",
    "cpfcnpj": 12345678911,
    "id": 1
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
  "accessToken": "xxxx.xxxx.xxxx",
  "user": {
    "email": "kenzinho@mail.com",
    "type": "user",
    "name": "kenzinho",
    "cpfcnpj": 12345678911,
    "id": 1
  }
}
```

### FORMATO DA RESPOSTA ONG - 201 OK

```json
{
  "accessToken": "xxxxxxx.xxxxxxx.",
  "user": {
    "email": "kenzinho.ong@mail.com",
    "type": "ong",
    "name": "Kenzinho ONG",
    "cpfcnpj": 12345678911,
    "id": 1
  }
}
```

## PET

```
GET /pet
```

### FORMATO DA RESPOSTA ONG - 201 OK

```json
[[
	{
		"age": 8,
		"breed": "Labrador1",
		"color": "Caramelo",
		"description": "Obediente, carinhosa e resmungona",
		"gender": "Fêmea",
		"userId": 1,
		"img": "http://s2.glbimg.com/xEziWq5-XbP1d3TnsPDwYRaWKIM=/560x560/e.glbimg.com/og/ed/f/original/2017/01/20/breed-standard.jpg",
		"ong": "Pancinha Feliz",
		"petName": "Aika",
		"porte": "Grande",
		"situation": "Bem tratada, gosta de comer e gosta de atenção",
		"species": "Cachorro",
		"id": 1
	},
	{
		"petName": "Pimposo",
		"img": "https://wpets.com.br/wp-content/uploads/2020/02/4da2b8a9267c54394586f606bcc9f438.jpg",
		"breed": "BorderCollie",
		"species": "Cachorro",
		"color": "Branco e Marrom",
		"gender": "Macho",
		"age": 6,
		"porte": "Grande",
		"ong": "LovePaws",
		"userId": 1,
		"description": "Doa-se esse lindo e amoroso cão da raça BorderCollie idoso 10 anos, castrado e vacinado, atende pelo nome Pimposo, foi encontrado abandonado em uma avenida e precisa de uma nova familia.",
		"situation": "Idoso, vacinado e castrado, não possue nenhum problema de saúde",
		"id": 2
	}
]
```

### Listar animais cadastrados - ONG

```
GET /pet?userId=:id
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
  "petName": "Snoop",
  "img": "https://fotos.amomeupet.org/uploads/fotos/412x0_1591881343_5ee22e7fa30f9_hd.webp",
  "breed": "Sem raça definida",
  "species": "Cachorro",
  "color": "Branco e Preto",
  "gender": "Macho",
  "age": 5,
  "porte": "Médio",
  "ong": "LovePaws",
  "userId": 1,
  "description": "Muito dócil e brincalhão, snoop nasceu com as patinhas encurtadas, mas tem muito amor para dar.",
  "situation": "Adulto, vacinado e castrado, patas da frente mal formadas"
}
```

### FORMATO DA RESPOSTA ONG - 201 OK

```json
{
  "petName": "Snoop",
  "img": "https://fotos.amomeupet.org/uploads/fotos/412x0_1591881343_5ee22e7fa30f9_hd.webp",
  "breed": "Sem raça definida",
  "species": "Cachorro",
  "color": "Branco e Preto",
  "gender": "Macho",
  "age": 5,
  "porte": "Médio",
  "ong": "LovePaws",
  "userId": 1,
  "description": "Muito dócil e brincalhão, snoop nasceu com as patinhas encurtadas, mas tem muito amor para dar.",
  "situation": "Adulto, vacinado e castrado, patas da frente mal formadas",
  "id": 6
}
```
