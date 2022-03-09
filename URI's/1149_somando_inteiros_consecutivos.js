var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var valor=prompt("Digite os números:");
var[A,N]=valor.split(" ");
    

var A=parseInt(A);
var N=valor.slice(-2);

var soma=0;

for(i=1; i<=N; i++){
    soma+=A;
    A++;
}

console.log(soma);