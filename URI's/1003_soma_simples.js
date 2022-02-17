var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var A=parseInt(prompt('Informe o primeiro número:'))
var B=parseInt(prompt('Informe o segundo número:'));
var SOMA=A+B;

console.log('SOMA = '+SOMA);