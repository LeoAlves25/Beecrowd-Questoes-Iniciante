var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var distancia=parseFloat(prompt('Informe a distância:'));
var minutos=distancia*2;

console.log(minutos+" minutos");