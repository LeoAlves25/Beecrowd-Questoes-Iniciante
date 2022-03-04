var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var cont=0;

for(i=0; i<5; i++){
    var numero=parseInt(prompt(""));
        if(numero%2===0){
        cont++;
    }
}
console.log(cont+" valores pares");