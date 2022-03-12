var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var X=parseInt(prompt("Informe a idade:"));
var soma=X;
var cont=1;

while(X>=0){
    X=parseInt(prompt("Informe a idade:"));
    if(X>=0){
    soma+=X;
    cont++;
    }else{
        break;
    }
}

var media=soma/cont;

console.log(media.toFixed(2));