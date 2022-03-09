var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt(""));

for(i=1;i<=N;i++){
    var j=1;
    while(j<2){
        console.log(i,Math.pow(i,2),Math.pow(i,3));
        console.log(i,(Math.pow(i,2)+1),(Math.pow(i,3)+1));
        j++;
    }
}