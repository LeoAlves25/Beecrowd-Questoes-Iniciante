var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var vetor=[];

for(i=0;i<20;i++){
    var N=parseInt(prompt());

    vetor.push(N);
}

for(i=19; i>=0; i--){
    console.log("N["+(19-i)+"] = "+vetor[i]);
}