var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=prompt();
var text="";

for(i=1;i<=N;i++){
    if(i<N){
        text+="Ho"+" ";
    }else{
        text+="Ho!";
    }
}
console.log(text);