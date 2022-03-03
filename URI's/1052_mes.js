var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var mes=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var A=parseInt(prompt(""));

A--;

console.log(mes[A]);