var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var [S,T,F]=prompt().split(" ").map(Number);
var hora=S+T;

if(hora>=24){
hora-=24;
}

var fuso=hora+F;

if(fuso<0){ fuso=24+fuso; }else if(fuso>23){
    fuso=24-fuso;
}

console.log(fuso);