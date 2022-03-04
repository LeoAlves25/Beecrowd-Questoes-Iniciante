var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var x=0;
var numero=parseInt(prompt(""));
for(i=1;i<=numero;i++){
    x=x+1
    if(x%2!==0){
        console.log(x);
    }
}