var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var n=3.14159;
var raio=parseFloat(prompt('Informe o raio:'));
var area=((n*Math.pow(raio, 2)).toFixed(4));

console.log('A='+area);