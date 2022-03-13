var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt("Informe o número de repetições:"));

for(i=0;i<N;i++){
    var numeros=prompt("Informe os números:");
    var [X, Y]=numeros.split(" ");

    X=parseInt(X);
    Y=parseInt(Y);
        
    var cont=0;
    var soma=0;
        
    while(cont<Y){
        if(X%2!==0){
            soma+=X;
            X++;
            cont++
        }else{
            X++;
        }
    }
    console.log(soma);
}