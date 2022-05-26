var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var [P,N]=prompt().split(" ").map(Number);
var canos=prompt().split(" ").map(Number);
var cont=1;

for(i=1;i<N;i++){
    if(Math.abs(canos[i-1]-canos[i])>P){
        break;
    }else{
        cont++;
    }
}

if(cont<N){
    console.log("GAME OVER");
}else{
    console.log("YOU WIN");
}