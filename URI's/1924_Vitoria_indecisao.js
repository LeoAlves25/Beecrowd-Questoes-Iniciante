var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var n=parseInt(prompt());

for(i=0;i<n;i++){
    var curso=prompt()
}

console.log("Ciencia da Computacao");