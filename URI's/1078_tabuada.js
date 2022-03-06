var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt(""));

for(i=1;i<=10;i++){
    console.log(i+" x "+N+" = "+(i*N));
}