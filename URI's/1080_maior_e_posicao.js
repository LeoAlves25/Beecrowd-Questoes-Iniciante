var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var numeros=[];
for(i=1;i<=100;i++){
    var N=parseInt(prompt(""));
    numeros.push(N);
}
var maior=Math.max.apply(null, numeros);
var posicao=numeros.indexOf(maior)+1;

console.log(maior);
console.log(posicao);