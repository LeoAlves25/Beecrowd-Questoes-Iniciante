var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt(""));

for(i=0;i<N;i++){
var X=parseInt(prompt(""));

if(X===0){
        console.log("NULL");
} 
else if(X>0 && X%2===0){
        console.log("EVEN POSITIVE");
}
else if(X<0 && X%2===0){
        console.log("EVEN NEGATIVE");
}
else if(X>0 && X%2!==0){
        console.log("ODD POSITIVE");
}
else if(X<0 && X%2!==0){
        console.log("ODD NEGATIVE");
}
}