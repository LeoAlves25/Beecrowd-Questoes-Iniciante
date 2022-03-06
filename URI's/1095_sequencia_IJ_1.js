var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

for(i=1, j=60;j>=0;i+=3, j-=5){
    console.log("I="+i+" J="+j);
}