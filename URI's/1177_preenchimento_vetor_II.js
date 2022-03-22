var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=[];
var T=parseInt(prompt());

while(N.length<=1000){
    for(i=0;i<T;i++){
        N.push(i);
    }
}

for(i=0; i<1000; i++){
    console.log("N["+i+"] = "+N[i]);
}