var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var vetor=[];
for(i=0; i<100; i++){
    var A=parseFloat(prompt());

    vetor.push(A);

    if(vetor[i]<=10){
        console.log("A["+i+"] = "+(vetor[i]).toFixed(1))
    }
}