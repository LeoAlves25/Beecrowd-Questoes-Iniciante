var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

for(var i=2;i<=100;i=i+2){
    console.log(i)
}