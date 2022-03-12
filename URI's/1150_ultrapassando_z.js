var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var X=parseInt(prompt("Informe o primeiro valor"));
var Z=parseInt(prompt("Informe o segundo número:"));

while(X>=Z){
    var Z=parseInt(prompt("Informe o segundo número:"));
}

var soma=0;
var cont=0;

for(i=X;soma<=Z;i++){
    soma+=i;
    cont++;    
}

console.log(cont)