var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var A=parseInt(prompt('Informe o número'));
var B=parseInt(prompt('Informe o número'));
var C=parseInt(prompt('Informe o número'));
var D=parseInt(prompt('Informe o número'));

var DIFERENCA=(A*B-C*D);

console.log('DIFERENCA = '+DIFERENCA);