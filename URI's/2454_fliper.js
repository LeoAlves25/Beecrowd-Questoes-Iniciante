var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

[p,r]=prompt().split(" ");

if(p==0){
    console.log("C");
}else{
    if(r==1){
        console.log("A");
    }else{
        console.log("B");
    }
}