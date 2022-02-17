var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var segundos=parseInt(prompt('Informe os segundos:'));
var hora=parseInt(segundos/3600);
segundos=segundos%3600
var minutos=parseInt(segundos/60);
segundos=segundos%60

console.log(hora+':'+minutos+':'+segundos);