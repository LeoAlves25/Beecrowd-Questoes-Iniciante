var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt(""));

for(i=1;i<=N;i++){
    if(i%2===0){
        console.log(i+"^2 = "+Math.pow(i,2));
    }
}