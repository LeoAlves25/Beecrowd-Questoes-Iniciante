var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var L=parseInt(prompt("Informe a linnha:"));
var T=prompt("Informe a operação:");
var M=[];
var soma=0;

for(X=0;X<12;X++){
    M[X]=[];
    for(Y=0;Y<12;Y++){
        M[X][Y]=parseFloat(prompt());
        if(L==X){
            soma+=M[X][Y];
        }
    }
}

if(T=="S"){
    console.log(soma.toFixed(1));
}else {
    console.log((soma/12).toFixed(1));
}