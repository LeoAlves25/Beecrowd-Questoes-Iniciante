var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var [A,B]=prompt().split(' ');
var aux;

A=parseInt(A);
B=parseInt(B);

if(A>B){
    aux=B;
    B=A;
    A=aux;
}

if(B%A===0){
    console.log("Sao Multiplos");
}else{
    console.log("Nao sao Multiplos");
}