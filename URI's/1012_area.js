var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var frase=prompt("frase");
var [A,B,C]=frase.split(" ");
var n=3.14159;

console.log("TRIANGULO: "+((A*C)/2).toFixed(3));
console.log("CIRCULO: "+(n*Math.pow(C,2)).toFixed(3));
console.log("TRAPEZIO: "+(((A+B)*C)/2).toFixed(3));
console.log("QUADRADO: "+(Math.pow(B,2)).toFixed(3));
console.log("RETANGULO: "+(A*B).toFixed(3));