var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var frase=prompt("frase");
var [A,B,C]=frase.split(" ");

A=parseFloat(A);
B=parseFloat(B);
C=parseFloat(C);

var max1=Math.max(A,B,C);

if(max1==A){
    max2=Math.max(B,C);
    max3=Math.min(B,C);
}
if(max1==B){
    max2=Math.max(A,C);
    max3=Math.min(A,C);
}
if(max1==C){
    max2=Math.max(B,A);
    max3=Math.min(B,A);
}
    

if(max1>=(max2+max3)){
    console.log("NAO FORMA TRIANGULO");
} else{
    if(Math.pow(max1,2)==(Math.pow(max2,2)+Math.pow(max3,2))){
        console.log("TRIANGULO RETANGULO");
    }
    else 
    if(Math.pow(max1,2)>(Math.pow(max2,2)+Math.pow(max3,2))){
        console.log("TRIANGULO OBTUSANGULO");
    }
    else 
    if(Math.pow(max1,2)<(Math.pow(max2,2)+Math.pow(max3,2))){
        console.log("TRIANGULO ACUTANGULO");
    }
    if(A==B && B==C){
        console.log("TRIANGULO EQUILATERO")
    } else if(A==B || B==C || A==C){
        console.log("TRIANGULO ISOSCELES")
    }
}