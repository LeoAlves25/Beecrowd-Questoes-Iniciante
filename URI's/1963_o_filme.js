var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var [A,B]=prompt().split(" ").map(Number);
var porcentagem;

porcentagem=((B-A)/A)*100;

console.log(porcentagem.toFixed(2)+"%");