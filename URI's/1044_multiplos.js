var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

    var frase=prompt("frase");
    var [A,B]=frase.split(" ");

    A=parseInt(A);
    B=parseInt(B);

    var valor=B%A;
    var valor1=A%B

    if(B>=A){
        if(valor===0){
            console.log("Sao Multiplos");
        } 
        if(valor!==0){
            console.log("Nao sao Multiplos");
        }
    } else{
        if(valor1===0){
            console.log("Sao Multiplos");
        } 
        if(valor1!==0){
            console.log("Nao sao Multiplos");
        }
    } 
