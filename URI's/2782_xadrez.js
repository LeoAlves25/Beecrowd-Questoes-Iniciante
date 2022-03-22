var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var L=parseInt(prompt("Informe a linha."));
var C=parseInt(prompt("Informe a coluna."));

if((L+C)%2==0){
    console.log(1)
} else{
    console.log(0);
}