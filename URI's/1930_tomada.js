var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var [T1,T2,T3,T4]=prompt().split(" ").map(Number);

console.log(T1+T2+T3+T4-3)