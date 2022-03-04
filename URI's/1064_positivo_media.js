var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var cont=0;
var quant=0;
for(i=0;i<6;i++){
    var numero=parseFloat(prompt(""));
    if(numero>0){
        cont++;
        quant=quant+numero;
    }
}
var media=quant/cont;
console.log(cont+" valores positivos");
console.log(media.toFixed(1));