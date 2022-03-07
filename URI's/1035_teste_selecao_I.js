var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var frase=prompt("frase");
var [A,B,C,D]=frase.split(" ");

A=parseInt(A);
B=parseInt(B);
C=parseInt(C);
D=parseInt(D);

if(B>C && D>A && ((C+D)>(A+B)) && C>0 && D>0){
    console.log("Valores aceitos");
} else{
    console.log("Valores nao aceitos")
}