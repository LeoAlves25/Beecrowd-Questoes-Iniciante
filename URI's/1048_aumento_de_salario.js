var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var salario=parseFloat(prompt(""));
var reajuste=0;
var ganho=0;

if(salario>=0 && salario<=400){
    reajuste=0.15;
    ganho=salario*reajuste;
}
if(salario>=400.01 && salario<=800){
    reajuste=0.12;
    ganho=salario*reajuste;
}
if(salario>=800.01 && salario<=1200){
    reajuste=0.10;
    ganho=salario*reajuste;
}
if(salario>=1200.01 && salario<=2000){
    reajuste=0.07;
    ganho=salario*reajuste;
}
if(salario>2000){
    reajuste=0.04;
    ganho=salario*reajuste;
}
console.log("Novo salario: "+(salario+ganho).toFixed(2));
console.log("Reajuste ganho: "+ganho.toFixed(2));
console.log("Em percentual: "+Math.round(reajuste*100)+" %");