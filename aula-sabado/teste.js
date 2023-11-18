var mysql = require("mysql");
var express = require('express');
var server = express();
var fs = require('fs')

server.use(express.json());
server.listen(3000, () =>{
    console.log("Servidor está funcionando");
});

var hostname = "sbu.h.filess.io";
var database = "database_eggouterby";
var port = "3307";
var username = "database_eggouterby";
var password = "459cf24a5f777cf8da978a985fe4499c228e55b0";


var con = mysql.createConnection({
  host: hostname,
  user: username,
  password,
  database,
  port,
});

con.on('error', (err) => {
    console.error(err);
  });

con.connect(function (err) {
  if (err) console.log( err );
  console.log("Connected!");
});

con.query("SELECT 1+1").on("result", function (row) {
  console.log(row);
});
