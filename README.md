# Teste EvaCommerce

## Descrição
### Teste desenvolvido por Marcos Pedro Carvalho de Melo para a vaga de Desenvolvedor Back-end da Eva Commerce.
### Foi Utilizado no projeto as dependências do Express, Mysql2, JTW, MD5 e DotEnv

## Instalação
- ### Se faz necessario a instalação do [MariaDB](https://www.mariadbtutorial.com/getting-started/install-mariadb/) ou [Mysql](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) para fazer o acompanhamento do banco de dados desenvolvido.
- ### Também é necessário a instalação do [Node](https://nodejs.org/en/download/package-manager/)
- ### Após instalado os passos anteriores rodar o comando abaixo para instalar as dependências
```
$ npm install
```

## Formas de Uso
- ### Após realizar a instalação, criar na raiz do projeto o arquivo .env com as variáveis de ambiente que são:
```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
```
- ### Após guardar as variáveis de ambiente, as rotas possíveis são:
```
1) http://localhost:3030/evaCommerce/user  POST
2) http://localhost:3030/evaCommerce/login POST
3) http://localhost:3030/evaCommerce/product POST
```
- ### A rota 1 cria usuários a partir do payload a seguir:
```
{
    "name":"string",
    "email":"string",
    "password":"string"
}
```

- ### A rota 2 realiza o login do usuário a partir do payload a seguir:
```
{
    "name":"string",
    "email":"string"
}
```

- ### A rota 3 cria produtos a partir do payload a seguir que é um form, lembrando que nesta rota se faz necessário o token bearer:
```
{
    "name":"string",
    "images":imagem,
    "images":imagem,
    "images":imagem,
    "images":imagem,
    "images":imagem,
}
```
