var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt(""));

for(i=0;i<N;i++){
    var frase=prompt("frase");
    var [A,B,C]=frase.split(" ");
        
    A=parseFloat(A);
    B=parseFloat(B);
    C=parseFloat(C);

    console.log(((A*2+B*3+C*5)/10).toFixed(1));
}