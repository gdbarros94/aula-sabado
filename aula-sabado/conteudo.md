# Conexão com o MySQL #

Para conectar-se ao MySQL a partir de JavaScript, precisamos usar o módulo mysql. Este módulo fornece uma API que nos permite realizar operações básicas no MySQL, como consultar, inserir, atualizar e excluir dados.

Para instalar o módulo mysql, podemos usar o gerenciador de pacotes do Node.js:


npm install mysql


Após instalar o módulo, podemos criar uma conexão com o MySQL usando o método createConnection():

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "my_database",
});



Este código cria uma conexão com o MySQL usando os seguintes parâmetros:

host: O endereço do servidor MySQL
port: A porta do servidor MySQL
user: O nome de usuário do MySQL
password: A senha do MySQL
database: O nome do banco de dados
Para conectar-se ao MySQL, podemos chamar o método connect() na conexão:




connection.connect();


Este código iniciará o processo de conexão com o MySQL. Quando a conexão for bem-sucedida, o método connect() retornará true.

# Operações básicas #

Após nos conectarmos ao MySQL, podemos realizar operações básicas no banco de dados.

## Consultas ##

Para realizar uma consulta no MySQL, podemos usar o método query() na conexão:



const results = connection.query("SELECT * FROM my_table");


Este código executa a consulta SELECT * FROM my_table no MySQL. A consulta retornará um objeto ResultSet que contém os resultados da consulta.

Para acessar os resultados da consulta, podemos usar os métodos fetch() e fetchAll():



const firstResult = results.fetch();
const allResults = results.fetchAll();


O método fetch() retorna o próximo registro da consulta. O método fetchAll() retorna todos os registros da consulta como um array.

## Inserções ##

Para inserir dados no MySQL, podemos usar o método query() na conexão:



connection.query("INSERT INTO my_table (name, age) VALUES ('John Doe', 30)");


Este código insere um registro na tabela my_table com o nome John Doe e a idade 30.

## Atualizações ##

Para atualizar dados no MySQL, podemos usar o método query() na conexão:



connection.query("UPDATE my_table SET age = 31 WHERE name = 'John Doe'");


Este código atualiza a idade do registro com o nome John Doe para 31.

## Exclusões ##

Para excluir dados no MySQL, podemos usar o método query() na conexão:



connection.query("DELETE FROM my_table WHERE name = 'John Doe'");


Este código exclui o registro com o nome John Doe da tabela my_table.

## Atividades ##

- Crie uma aplicação que permita ao usuário consultar os dados de uma tabela no MySQL.
- Crie uma aplicação que permita ao usuário inserir, atualizar ou excluir dados de uma tabela no MySQL.
- Crie uma aplicação que use o MySQL para armazenar dados de usuários.