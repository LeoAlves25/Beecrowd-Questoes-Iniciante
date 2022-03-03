var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var A=prompt("");

if(A==61){
    console.log("Brasilia");
}
if(A==71){
    console.log("Salvador");
}
if(A==11){
    console.log("Sao Paulo");
}
if(A==21){
    console.log("Rio de Janeiro");
}
if(A==32){
    console.log("Juiz de Fora");
}
if(A==19){
    console.log("Campinas");
}
if(A==27){
    console.log("Vitoria");
}
if(A==31){
    console.log("Belo Horizonte");
} if(A!=61 && A!=71 && A!=11 && A!=21 && A!=32 && A!=19 && A!=27 && A!=31){
    console.log("DDD nao cadastrado");
}