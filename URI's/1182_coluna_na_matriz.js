var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var C=parseInt(prompt());
var T=prompt();
var M=[];
var soma=0;

for(X=0;X<12;X++){
    M[X]=[];
    for(Y=0;Y<12;Y++){
        M[X][Y]=parseFloat(prompt());
        if(C==Y){
            soma+=M[X][Y];
        }
    }
}

if(T=="S"){
    console.log(soma.toFixed(1));
}else{
    console.log((soma/12).toFixed(1))
}