var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var dia=parseInt(prompt('Informe os dias:'));
var ano=parseInt(dia/365);
dia=dia%365
var mes=parseInt(dia/30);
dia=dia%30

console.log(ano+' ano(s)');
console.log(mes+' mes(es)');
console.log(dia+' dia(s)');