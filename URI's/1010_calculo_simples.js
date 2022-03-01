var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var frase=prompt("frase");
var frase1=prompt("frase1");

var [p1, n1, v1]=frase.split(" ");
var [p2, n2, v2]=frase1.split(" ");

console.log("VALOR A PAGAR: R$ "+(n1*v1+n2*v2).toFixed(2));
