var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt("Informe o número:"));

if(N===0){
    console.log("E");
}else if(N>=1 && N<=35){
    console.log("D");
}else if(N>=36 && N<=60){
    console.log("C");
}else if(N>=61 && N<=85){
    console.log("B");
}else{
    console.log("A");
}