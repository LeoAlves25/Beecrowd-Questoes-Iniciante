var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var frase=prompt("frase");
var [A,B,C,D]=frase.split(" ");

A=parseInt(A);
B=parseInt(B);
C=parseInt(C);
D=parseInt(D);

var horas=(C-A);
var minutos=(D-B);

if(horas<=0){
    horas=24+(C-A);
}
if(minutos<0 ){
    minutos=60+(D-B);
    horas--;
}
if (horas===0 && minutos===0){
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
}if (horas==24 && minutos!==0){
    console.log("O JOGO DUROU 0 HORA(S) E "+minutos+" MINUTO(S)");
}
else{
    console.log("O JOGO DUROU "+horas+" HORA(S) E "+minutos+" MINUTO(S)");
}