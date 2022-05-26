var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt());
var pessoas=prompt().split(" ").map(Number);
var menor=pessoas[0];

for(i=1;i<N;i++){
    menor=Math.min(pessoas[i],menor);
}

console.log(pessoas.indexOf(menor)+1);