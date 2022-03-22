var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var [p,j1,j2,r,a]=prompt().split(" ").map(Number);
var teste=(j1+j2)%2;
    
if((teste!=p && r!=a) || (r==1 && a==0) || (teste!=p && r==0 && a==0)){
    console.log("Jogador 1 ganha!");
}else if(teste==p || (r==1 && a==1)){
    console.log("Jogador 2 ganha!");
}