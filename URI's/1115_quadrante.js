var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

while(true){
    var frase=prompt("frase");
    var [X,Y]=frase.split(" ");

    X=parseFloat(X);
    Y=parseFloat(Y);

    if(X>0 && Y>0){
            console.log("primeiro");
    }
    if(X<0 && Y>0){
        console.log("segundo");
    }
    if(X<0 && Y<0){
        console.log("terceiro");
    }
    if(X>0 && Y<0){
        console.log("quarto");
    }
    if(X===0 || Y===0){
        break;
    }
}