var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var X=parseFloat(prompt('Informe a distância:'));
var Y=parseFloat(prompt('Inform o consumo:'));

var consumo=X/Y;

console.log(consumo.toFixed(3)+' km/l');