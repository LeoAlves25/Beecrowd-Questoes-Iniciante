var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt("Informe a quantidade de números:"));

var X=[];
X=prompt().split(" ");
var min=X[0];
var posicao=0;

for(i=0;i<N;i++){
    min=Math.min(X[i],min);
}

posicao=X.indexOf(min.toString());

console.log("Menor valor: "+min);
console.log("Posicao: "+posicao);