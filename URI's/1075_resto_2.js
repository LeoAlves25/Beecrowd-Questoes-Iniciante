var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt(""));

for(i=2;i<10000;i++){
    if(i%N===2){
        console.log(i);
    }
}