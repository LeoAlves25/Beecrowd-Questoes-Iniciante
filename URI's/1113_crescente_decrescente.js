var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

while(true){
    var frase=prompt("frase");
    var [X,Y]=frase.split(" ");

    X=parseInt(X);
    Y=parseInt(Y);

    if(X==Y){
        break;
    }

    if(X>Y){
        console.log("Decrescente");
    }
    if(X<Y){
        console.log("Crescente");
    }
}