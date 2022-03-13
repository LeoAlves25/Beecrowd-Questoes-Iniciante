var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt());

for(i=1; i<=N; i++){
    var X=parseInt(prompt());
    var cont=0;

    for(j=1; j<=X; j++){
        if(X%j===0){
            cont++;
        }
    }

    if(cont==2){
        console.log(X+" eh primo");
    } else{
        console.log(X+" nao eh primo");
    }
}