var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var O=prompt();
var M=[];
var soma=0;
var cont=0;
for(X=0;X<12;X++){
    M[X]=[];
    for(Y=0;Y<12;Y++){
        M[X][Y]=parseFloat(prompt());
        if(X>Y && (X+Y)<11 && X!=Y){
            soma+=M[X][Y];
            cont++;
        }
    }
}
if(O=="S"){
    console.log(soma.toFixed(1));
}else{
    console.log((soma/cont).toFixed(1));
}