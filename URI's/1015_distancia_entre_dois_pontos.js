var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var frase=prompt("frase");
var frase1=prompt("frase1");
var [x1, y1]=frase.split(" ");
var [x2, y2]=frase1.split(" ");

x1=parseFloat(x1);
x2=parseFloat(x2);
y1=parseFloat(y1);
y2=parseFloat(y2);

var valor=Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));

console.log(valor.toFixed(4));
