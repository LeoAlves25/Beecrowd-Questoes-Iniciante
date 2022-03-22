var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=[];
var V=parseInt(prompt());
N[0]=V;

for(i=0; i<10; i++){
    if(i===0){
        console.log("N[0] = "+V);
    }else{
        N.push(N[i-1]*2);
        console.log("N["+i+"] = "+N[i]);
    }
}