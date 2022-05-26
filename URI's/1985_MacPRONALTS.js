var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var codigo=[1001, 1002, 1003, 1004, 1005];
var preco=[1.5, 2.5, 3.5, 4.5, 5.5];

var pedidos=Number(prompt());
var soma=0;

for(i=0;i<pedidos;i++){
    var [id, qnt]=prompt().split(' ').map(Number);
    soma+=preco[codigo.indexOf(id)]*qnt;
}

console.log(soma.toFixed(2));