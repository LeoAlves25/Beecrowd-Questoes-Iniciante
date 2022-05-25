var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=prompt();
var numeros=prompt().split(' ').map(Number);
var indice=0;

for(i=1;i<=N;i++){
    if(numeros[i]<numeros[i-1]){
        indice=i+1;
        break;
    }
}

console.log(indice);