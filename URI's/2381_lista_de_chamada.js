var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var nomes=[];
var [N,K]=prompt().split(' ').map(Number);

for(i=0;i<N;i++){
    nomes[i]=prompt();
}

nomes.sort();

console.log(nomes[K-1]);