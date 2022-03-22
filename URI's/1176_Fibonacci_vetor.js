var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var fib=[];
var anterior=fib[0]=0;
var atual=fib[1]=1;
var proximo;

for(i=2; i<=60; i++){
    proximo=anterior+atual;
    anterior=atual;
    atual=proximo;
    fib.push(atual);
}
    
var T=parseInt(prompt());

for(i=0; i<T; i++){
    var N=parseInt(prompt());

    console.log("Fib("+N+") = "+fib[N]);
}