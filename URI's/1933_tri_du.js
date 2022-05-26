var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var [A,B]=prompt().split(" ").map(Number);

console.log(Math.max(A,B));