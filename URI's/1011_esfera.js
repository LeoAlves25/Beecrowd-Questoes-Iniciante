var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var n=3.14159;
var R=parseFloat(prompt('Informe o raio:'));

var volume=((4/3.0)*n*Math.pow(R, 3));

console.log("VOLUME = "+volume.toFixed(3));