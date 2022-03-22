var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var data=prompt("Informe a data")
var [dia,mes,ano]=data.split("/")

console.log(mes+"/"+dia+"/"+ano);
console.log(ano+"/"+mes+"/"+dia);
console.log(dia+"-"+mes+"-"+ano);