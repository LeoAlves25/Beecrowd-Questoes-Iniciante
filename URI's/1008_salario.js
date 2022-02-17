var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var id=parseInt(prompt('ID funcionário:'));
var horas=parseInt(prompt('Horas trabalhadas:'));
var salario=parseFloat(prompt('Salário do funcionário:'));

console.log('NUMBER = '+id);
console.log('SALARY = U$ '+(horas*salario).toFixed(2));