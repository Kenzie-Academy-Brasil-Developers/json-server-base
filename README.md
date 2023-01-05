                                                Soluções Engenharia API ⚒️

Essa é uma Fake API, simulando um backend, do projeto Soluções Engenharia - uma aplicação web que tem como objetivo gerenciar o estoque, custo e organização dos materiais de construção de maneira integrada!

                                                        Base URL

BaseUrl: http://localhost:3001

                                                        EndPoints

                                                        Register

POST /register

Através desse endpoint, o usuário irá conseguir realizar o cadastro na plataforma, sendo obrigatório preencher os campos de e-mail e senha.

Formato de requisição
{
"email": "alex12345@mail.com",
"password": "#Batata123"
}

Exemplo de response - 201
{
"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXgxMjM0NUBtYWlsLmNvbSIsImlhdCI6MTY3MjkzMDQxMiwiZXhwIjoxNjcyOTM0MDEyLCJzdWIiOiI0In0.77ESpkied99MZotQ8ehJgi-Yw8zZxnAARB2bRFqeI9g",
"user": {
"email": "alex12345@mail.com",
"id": 4 } }

                                                        Login

POST/login

Esse endpoint tem como objetivo logar na aplicação após ser feito o cadastro.

Formato de requisição
{
"email": "alex12345@mail.com",
"password": "#Batata123"
}

Exemplo de response - 201
{
"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXgxMjM0NUBtYWlsLmNvbSIsImlhdCI6MTY3MjkzMDQzOSwiZXhwIjoxNjcyOTM0MDM5LCJzdWIiOiI0In0.oPLhsBZiSiU5-S9Z5JBVvQXf3kYlm0yK\_\_dKM1G0BMA",
"user": {
"email": "alex12345@mail.com",
"id": 4
}
}

                                                    Listar Produtos

GET/products

Esse endpoint tem como objetivo listar todos os produtos criados pelo usuário.

Exemplo de response - 201
[
{
"userId": 1,
"img": "https://a-static.mlcdn.com.br/1500x1500/cimento-todas-as-obras-50kg-votorantim/ceccasaeconstrucao/7cf42d78912457af4337112226580041/8211a2e9aaef87e30714dd6b47ac9076.jpeg",
"name": "Cimento Votorantim 50kg",
"stock": "50",
"type": "Cimento",
"id": 1
},
{
"userId": 1,
"img": "https://d365e82sgxmduv.cloudfront.net/Custom/Content/Products/11/06/1106528_joelho-90graus-esgoto-sec-40-tigre_m1_636600773795136557.jpg",
"name": "Joelho 90°",
"stock": "30",
"type": "Conexoes",
"id": 2
}
]

                                                    Filtrar Produtos

GET/products?type=Conexoes

Esse endpoint tem como objetivo filtrar todos os produtos criados pelo usuário pelo type.

Exemplo de response - 201
[
{
"userId": 1,
"img": "https://d365e82sgxmduv.cloudfront.net/Custom/Content/Products/11/06/1106528_joelho-90graus-esgoto-sec-40-tigre_m1_636600773795136557.jpg",
"name": "Joelho 90°",
"stock": "30",
"type": "Conexoes",
"id": 2
}
]

Rotas que precisam de autenticação
Todas as rotas a partir daqui necessitam de um token de autorização do usuário.

                                                    Criação de produtos

POST/products

Esse endpoint tem como objetivo adicionar novos produtos pelo id do usuário cadastrado.

Formato de requisição
{
"userId": 4,
"img": "https://cdn.leroymerlin.com.br/products/estanho_em_fio_para_solda_1mm_60x40_500g_vonder_87447402_0001_600x600.jpg",
"name": "Estanho",
"description": "Feitos para soldar componentes eletrônicos",
"stock": "2000",
"type": "Solda"
}

Exemplo de response - 201
{
"userId": 4,
"img": "https://cdn.leroymerlin.com.br/products/estanho_em_fio_para_solda_1mm_60x40_500g_vonder_87447402_0001_600x600.jpg",
"name": "Estanho",
"description": "Feitos para soldar componentes eletrônicos",
"stock": "2000",
"type": "Solda",
"id": 6
}

                                                Atualizar produto

PATCH/products/:id

Esse endpoint tem como objetivo atualizar os produtos criados pelo id, gerado na criação do produto.

Formato de requisição
{
"img": "https://ducacec.com.br/product_images/o/971/2__98583_std.png",
"name": "Tijolo Baiano",
"description": "São blocos de cerâmica ou argila cozidos em forno. São usados para construir paredes e estruturas de suporte",
"stock": "300",
"type": "Tijolo"
}

Exemplo de response - 201
{
"userId": 4,
"img": "https://ducacec.com.br/product_images/o/971/2__98583_std.png",
"name": "Tijolo Baiano",
"description": "São blocos de cerâmica ou argila cozidos em forno. São usados para construir paredes e estruturas de suporte",
"stock": "10",
"type": "Tijolo",
"id": 6
}

                                                    Deletar produto

DELETE/products/:id

Esse endpoint tem como objetivo deletar os produtos criados pelo id, gerado na criação do produto.

Exemplo de response - 201
{}
