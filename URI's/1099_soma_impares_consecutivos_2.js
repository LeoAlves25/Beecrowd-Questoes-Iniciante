var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt(""));

for(i=0;i<N;i++){
    var frase=prompt("frase");
    var [X,Y]=frase.split(" ");

    X=parseInt(X);
    Y=parseInt(Y);

    var soma=0;

    for(j=Math.min(X,Y)+1;j<Math.max(X,Y);j++){
        if(j%2!==0){
            soma+=j;
        }
    }
    console.log(soma)
}