var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt("Informe a quantidade de números:"));

for(i=1; i<=N; i++){
    var X=parseInt(prompt("Informe o número:"));
    var soma=0;

    for(j=1;j<X;j++){
        if(X%j===0){
            soma+=j;
        }
    }
        
    if(soma==X){
        console.log(X+" eh perfeito");
    } else{
        console.log(X+" nao eh perfeito");
    }
}