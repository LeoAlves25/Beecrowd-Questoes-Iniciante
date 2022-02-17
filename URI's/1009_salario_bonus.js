var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var nome=prompt('Informe o nome:');
var salario=parseFloat(prompt('Informe salário:'));
var vendas=parseFloat(prompt('Informe vendas:'));

console.log("TOTAL = R$ "+(salario+vendas*0.15).toFixed(2));