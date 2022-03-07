var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var calculo=1;
while(calculo==1){
    var X1=parseFloat(prompt("1"));
    while(X1<0 || X1>10){
        console.log("nota invalida");
        X1=parseFloat(prompt("1"));
    }

    var X2=parseFloat(prompt("2"));
    while(X2<0 || X2>10){
        console.log("nota invalida");
        X2=parseFloat(prompt("2"));
    }

    var media=(X1+X2)/2;

    console.log("media = "+media.toFixed(2));

    console.log("novo calculo (1-sim 2-nao)");
    calculo=parseInt(prompt("3"));
    while(calculo!=1 && calculo!=2){
        console.log("novo calculo (1-sim 2-nao)");
        calculo=parseInt(prompt("3"));
    }
}