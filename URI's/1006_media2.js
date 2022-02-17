var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var B=parseFloat(prompt('Informe o número:'));
var A=parseFloat(prompt('Informe o número:'));
var C=parseFloat(prompt('Informe o número:'));

var MEDIA=((A*2+B*3+C*5)/10).toFixed(1);

console.log('MEDIA = '+MEDIA);