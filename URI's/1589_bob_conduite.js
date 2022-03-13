var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt());

for(i=0;i<N;i++){
    var [A,B]=prompt().split(" ");

    A=parseInt(A);
    B=parseInt(B);

    console.log(A+B);
}