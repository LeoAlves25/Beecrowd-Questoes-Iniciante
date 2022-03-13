var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=prompt("Quantas reclamacoes?");
while(N!=""){
    if(N==0){
        console.log("vai ter copa!");
    }else if(N>0){
        console.log("vai ter duas!");
    }
    N=prompt("Quantas reclamacoes?");
}