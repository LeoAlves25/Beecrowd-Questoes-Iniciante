var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var A=parseFloat(prompt('Informe o primeiro número:'));
var B=parseFloat(prompt('Informe o segundo número:'));
var MEDIA=((A*3.5+B*7.5)/11).toFixed(5);

console.log('MEDIA = '+MEDIA);