var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var X=parseInt(prompt("Informe o primeiro valor:"));
var Y=parseInt(prompt("Informe o segundo valor:"));
var soma=0;

var max=Math.max(X,Y);
var min=Math.min(X,Y);

for(i=(min+1);i<max;i++){
    if(i%5==2 || i%5==3){
        console.log(i);
    }
}