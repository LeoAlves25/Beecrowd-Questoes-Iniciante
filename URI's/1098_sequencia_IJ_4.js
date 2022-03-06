var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var J=1;
for(i=0;i<=2;i+=0.2){
    for(j=J;(j-J)<=2.1;j++){
        if(i===0||i===1||i>1.9){
            console.log("I="+Math.round(i)+" J="+Math.round(j));
        } else{
        console.log("I="+i.toFixed(1)+" J="+j.toFixed(1));
        }
    }
    J+=0.2;
}