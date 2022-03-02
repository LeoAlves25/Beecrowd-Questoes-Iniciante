var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var A=parseFloat(prompt());
var p='(';

if(A>=0 && A<=25){
    console.log("Intervalo [0,25]");
}
if (A>25 && A<=50){
    console.log("Intervalo "+p+"25,50]");
} 
if(A>50 && A<=75){
        console.log("Intervalo "+p+"50,75]");
}
if(A>75 && A<=100){
    console.log("Intervalo "+p+"75,100]")
}
    if(A<0 || A>100){
    console.log("Fora de intervalo");
}
