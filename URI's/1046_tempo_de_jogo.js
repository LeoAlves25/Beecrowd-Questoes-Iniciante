var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var frase=prompt("frase");
var [A,B]=frase.split(" ");

A=parseInt(A);
B=parseInt(B);

if(B<A){
    B=B+24;
    console.log("O JOGO DUROU "+(B-A)+" HORA(S)");
} else {
    console.log("O JOGO DUROU "+(B-A)+" HORA(S)");
}