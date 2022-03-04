var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var numero=parseInt(prompt(""));
var x=numero;
for(i=0; i<12;i++){
    if(x%2!==0){
        console.log(x);
    }
    x=x+1;
}