<h1 align="center">
     <a href="#" alt="desafio allugator"> Desafio Técnico Allugator</a>
</h1>

<h3 align="center">
    Este projeto teve o objetivo de desenvolver um ecommerce para assinatura de celulares.
</h3>

<h4 align="center">
	🚧   Completo 🚀 🚧
</h4>

---

## 💻 Sobre o projeto

  ### Foi utilizado as seguintes tecnologias:
    Estilização
    - Css puro
    Front End
    - React js
    - ContextApi
    Back End
    - Node js
    - JWT
    - Testes de integração com Mocha, chai , sinon
    - Sequelize e MySQL
    - Arquitetura MSC
    CI/CD
    - Github Actions (Apenas para backEnd)

---

## Como rodar a aplicação ?

1- Entre na pasta backend e renomei o arquivo .env.example para apenas .env

2- Na pasta Raiz do projeto execute o comando abaixo para rodar o docker-compose

```
npm rum startDocker

```

3- Na pasta backend rode o seguinte comando no terminal:

```
npm rum db:restart

```

##  Banco de dados -

  <img alt="db" src="./imgsReadme/db.png">

  |Entidade|descrição
| ------ | ------ |
|Product_category|Divide os produtos em Entrada, intermediários e top de linha|
|Products|Informações gerais do tipo de telefone|
|Product_inventory|Quantidade de telefones de cada tipo em estoque|
|Subscription|Assinaturas de telefone devolvidas ou em vigor|
|Clients|Informações do cliente cadastrado|
---

##  🎨 Front End -

Para entrar no frontEnd da aplicação acesse : http://localhost:3000/

  ### Login

  <img alt="review layout" src="./imgsReadme/Login.png">

  ### Create Account

  <img alt="review layout" src="./imgsReadme/CreateAccount.png">

  ### Home

  <img alt="review layout" src="./imgsReadme/Home.png">
  
  ### Detalhe de produtos

  <img alt="review layout" src="./imgsReadme/ProductDetails.png">

  ### Carrinho de compras

  <img alt="review layout" src="./imgsReadme/ShoppingCart.png">


---

## 🛠 BackEnd

O backEnd está sendo executado na rota 3005

### Metodo de session

|Methodo|Rota|Descrição|
| ------ | ------ | ----- |
|post|/session|Retorna um token de acesso|

Formato de requisição para o POST:

```
{
	"email":"MichaelSchumacher@gmail.com",
	"password":"123456"
}
```

Saída esperada:

```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY1NjkxMzc3LCJleHAiOjE2NjU3Nzc3Nzd9.T2trWnDq3YXkh5ntYJmPIHGGIGqKQ03BQrx-7dRNINI"
}
```

### Metodos da rota Products

|Methodo|Rota|Descrição|
| ------ | ------ | ----- |
|get|/products|Retorna todos os produtos cadastrados e as quantidades disponíveis em estoque|
|get|/products/:id|Retorna todos os produtos cadastrados com base no id informado|
|get|/products/search?name|Retorna todos os produtos que possuam o nome iguais ao passado na query name|

Saída esperada:
```
[
	{
		"id": 1,
		"name": "Smartphone Motorola Moto G22",
		"description": "128GB 4G Wi-Fi Tela 6.5 Dual Chip 4GB RAM Câmera Quádrupla + Selfie 16MP",
		"image": "https://images-americanas.b2w.io/produtos/01/00/img/4818919/7/4818919742_1SZ.jpg",
		"price": "1193.94",
		"categoryId": 1,
		"qtd": 2
	}
  ...
]
```

### Metodos da rota Clients

|Methodo|Rota|Descrição|
| ------ | ------ | ----- |
|post|/clients|Cadastra um novo cliente no sistema|
|get|/clients|Retorna as informações do cliente que está logado|

Formato de requisição para o POST:
```
{
  "name":"Italoiveldol",
  "email": "italoiveldo1@gmail.com",
  "password":"secret",
  "cpf":"11441716440"
}
```

Saída esperada para o metodo GET

```
{
	"id": 1,
	"name": "Italo",
	"email": "italo@gmail.com",
	"cpf": "1145487855"
}

```

### Metodos da rota Subscriptions

|Methodo|Rota|Descrição|
| ------ | ------ | ----- |
|post|/subscription|Faz a assinatura de um novo produto da categoria productId informada|
|get|/subscription|Retorna todas as assinaturas feitas pelo cliente logado no sistema|

Formato de requisição para o POST:
```
{
	"productId":2
}

```

Saída esperada para o metodo GET

```
[
	{
		"id": 1,
		"dateInit": "2022-10-13T19:57:08.000Z",
		"dateDevolution": null,
		"productInventId": 1,
		"clientId": 1,
		"devolution": false,
		"productInventory": {
			"productId": 1,
			"product": {
				"id": 1,
				"name": "Smartphone Motorola Moto G22",
				"description": "128GB 4G Wi-Fi Tela 6.5 Dual Chip 4GB RAM Câmera Quádrupla + Selfie 16MP",
				"image": "https://images-americanas.b2w.io/produtos/01/00/img/4818919/7/4818919742_1SZ.jpg",
				"price": "1193.94",
				"categoryId": 1
			}
		}
	}

  ...

]

```
---

## ⚙️ Testes

### Back End
  Foram desenvolvidos apenas testes de integração, para executart use o comando:

```
$ cd backend
$ npm test
```

<br>
<br>

## Faltou Finalizar

- Filtros por ordem de preço e nome
- Área do cliente com suas assinaturas
