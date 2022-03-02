var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var frase=prompt("frase");
var [A,B,C]=frase.split(" ");

A=parseFloat(A);
B=parseFloat(B);
C=parseFloat(C);

var max=Math.max(A,B,C);

if(max==A){
    var min1=Math.min(B,C);
    var min2=Math.max(B,C);
}
if(max==B){
    var min1=Math.min(A,C);
    var min2=Math.max(A,C);
}
if(max==C){
    var min1=Math.min(B,A);
    var min2=Math.max(B,A);
}

if(max<(min1+min2)){
    console.log("Perimetro = "+(A+B+C).toFixed(1));
} else {
    console.log("Area = "+(((A+B)*C/2)).toFixed(1));
}