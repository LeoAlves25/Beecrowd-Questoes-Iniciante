var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var tempo=parseFloat(prompt('Informe o tempo:'));
var velocidade=parseFloat(prompt('Informe a velocidade média:'));
var distancia=tempo*velocidade;

console.log((distancia/12).toFixed(3));