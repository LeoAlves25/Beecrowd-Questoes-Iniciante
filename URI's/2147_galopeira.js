var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var T=prompt();

for(i=0;i<T;i++){
    var N=prompt();

    console.log((N.length*0.01).toFixed(2));
}