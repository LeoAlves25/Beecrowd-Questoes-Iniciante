var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var frac=0;
var rep=prompt();

for(i=0;i<rep;i++){
    frac=(1/(frac+6));
}

var valor=3+frac;

console.log(valor.toFixed(10));