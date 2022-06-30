Rotas de Users
    POST: /register -> será possível criar um novo usuário com o seguinte corpo
        {
            "name": "name",
            "password": "password"
        }

        /login -> para logar com um usuário criado anteriormente
        {
            "name": "name",
            "password":"password"
        }

    GET: /users/{id} -> necessário estar logado para visualizar informações relativas ao próprio usuário (o id passado deverá ser o mesmo do usuário logado)
        - Não é necessário body

Rotas de Produtos
    POST: /produtos -> O usuário poderá criar um novo produto, apenas se estiver logado (com token ativo)
        {
            "name": "name",
            "price":"price",
            "userId": "idUsuarioLogado"
        }
    
    GET: /produtos -> Qualquer um poderá ver todos os produtos criados
                   -> Não é necessário body

Rotas de Cart
    POST: /cart -> Necessário estar logado para criar um novo item de cart
            {
                "userId": "idUsuarioLogado"
                "produtosId": "id" // id relativo ao do produto que deseja adicionar
            }

    GET: /cart -> Necessário estar logado para visualizar os itens que possuem o próprio token do usuário
                -> Não necessita de body