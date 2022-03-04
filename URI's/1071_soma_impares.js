var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var X=parseInt(prompt(""));
var Y=parseInt(prompt(""));
var max=Math.max(X, Y);
var min=Math.min(X, Y);

var soma=0;
for(i=min+1; i<max;i++){
    if(i%2!==0){
        soma=soma+i;
    }
}
console.log(soma);