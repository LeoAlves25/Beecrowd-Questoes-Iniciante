var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt(""));
var dentro=0;
var fora=0;
for(i=0;i<N;i++){
    var X=parseInt(prompt(""));
    if(X<=20  && X>=10){
        dentro++;
    } else{
        fora++;
    }
}
console.log(dentro+" in");
console.log(fora+" out");