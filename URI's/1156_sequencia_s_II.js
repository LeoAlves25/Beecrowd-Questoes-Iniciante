var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var j=1;
var soma=1/1;
for(i=3;i<=39;i=i+2){
    j=j*2
    soma+=i/j;
}

console.log(soma.toFixed(2));