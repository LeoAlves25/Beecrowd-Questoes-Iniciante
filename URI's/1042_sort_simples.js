var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var frase=prompt("frase");
var [A,B,C]=frase.split(" ");

A=parseInt(A);
B=parseInt(B);
C=parseInt(C);

var max1=Math.max(A,B,C);
if(max1==A){
    var max2=Math.max(B,C);
    var max3=Math.min(B,C);
}
if(max1==B){
    var max2=Math.max(A,C);
    var max3=Math.min(A,C);
}
if(max1==C){
    var max2=Math.max(B,A);
    var max3=Math.min(B,A);
}
console.log(max3);
console.log(max2);
console.log(max1);
console.log("");
console.log(A);
console.log(B);
console.log(C);