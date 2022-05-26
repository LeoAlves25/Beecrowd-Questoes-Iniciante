var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var [N, X, Y]=prompt().split(' ').map(Number);
var div=N/(X+Y);

console.log(div.toFixed(2));