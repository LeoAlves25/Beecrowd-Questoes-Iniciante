var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt("Informe o número:"));
var fatorial=1;

for(i=0;i<N;i++){
    fatorial=fatorial*(N-i);
}

console.log(fatorial);