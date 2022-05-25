var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=prompt();

while(N!==''){
    var numeros=[];

    for(let i=0; i<N;i++){
        numeros[i]=prompt();
    }

    numeros.sort();

    for(let i=0; i<N;i++){
        console.log(numeros[i]);
    }

    N=prompt();
}