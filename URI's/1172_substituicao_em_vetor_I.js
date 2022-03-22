var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var vetor=[];
for(i=1; i<=10;i++){
    var X=parseInt(prompt());
    vetor.push(X);
}

for(i=0; i<10; i++){
    if(vetor[i]<=0){
        console.log("X["+i+"] = "+1);
    }else{
        console.log("X["+i+"] = "+vetor[i]);
    }
}