var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var i=1;
var soma=0;
while(i<=2){
    var nota=parseFloat(prompt(""));

    if (nota<0 || nota>10){
        console.log("nota invalida");
    } else{
        soma+=nota;
        i++;
    }
}
var media=soma/2;
console.log("media = "+media.toFixed(2));