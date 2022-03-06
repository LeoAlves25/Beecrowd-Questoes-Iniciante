var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var J=7;
for(i=1;i<=9;i+=2){
    for(j=J;(J-j)<=2;j--){
        console.log("I="+i+" J="+j);
    }
    J+=2;
}