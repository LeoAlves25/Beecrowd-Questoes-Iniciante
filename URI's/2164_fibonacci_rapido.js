var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var n=Number(prompt());

var Fib=(Math.pow((1+Math.sqrt(5,2))/2,n)-Math.pow((1-Math.sqrt(5,2))/2,n))/Math.sqrt(5,2);

console.log(Fib.toFixed(1));