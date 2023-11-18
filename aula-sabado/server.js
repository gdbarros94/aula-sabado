var express = require('express');
var server = express();
var fs = require('fs')

server.use(express.json());
server.listen(3000, () =>{
    console.log("Servidor está funcionando");
});

var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

var i = 0;
while (array.length > i) {
    console.log(array[i]);
    i++;
}
array.forEach(element => {
    console.log(element);
    
});

 var people = {
     "joao": 30,
     "maria": 25,
     "jose": 20,
   };
for (const [nome, idade] of Object.entries(people).sort((a, b) => a[1] - b[1])) {
    console.log(`${nome} tem ${idade} anos.`);
   } 

   const professor = {
    nome: "Vitor",
    idade: 27,
    email: 'vitor@gmail.com',
    array: [1,2,3,4,5,6,7],
    obj: {a:1,b:2,c:3},
  }

  console.log(professor.nome);
  professor.nome = "Gabriel";
  console.log(professor.nome);

  console.log(professor.array[2]);
  console.log(professor.obj.b);

  var professores = {...professor};
  console.log(professores);