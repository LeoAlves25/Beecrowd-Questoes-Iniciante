var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=Number(prompt());

for(i=0;i<N;i++){
    var ano=Number(prompt());

    if((ano-2015)>=0){
        console.log(Math.abs(ano-2015+1)+" A.C.")
    }else{
        console.log(Math.abs(ano-2015)+" D.C.")
    }
}