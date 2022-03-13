var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt("Informe um número:"));

for(i=1;i<=N;i++){
    if(N%i===0){
        console.log(i);
    }
}