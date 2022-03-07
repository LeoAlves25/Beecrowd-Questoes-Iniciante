var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var X=parseInt(prompt("Informe o primeiro valor:"));
var Y=parseInt(prompt("Informe o segundo valor:"));
var soma=0;

var max=Math.max(X,Y);
var min=Math.min(X,Y);

for(i=min;i<=max;i++){
    if(i%13!==0){
        soma+=i;
    }
}
console.log(soma);