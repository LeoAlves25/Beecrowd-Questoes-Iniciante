var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var cpf=prompt("Informe o seu CPF");
cpf=cpf.replace("-",".");
var [A,B,C,D]=cpf.split(".");

console.log(A)
console.log(B)
console.log(C)
console.log(D)