var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=prompt('Informe a quantidade de números:')
var numeros=prompt('Informe os números:').split(' ');
var cont2=0, cont3=0, cont4=0, cont5=0;

for(i=0;i<N;i++){
    if(numeros[i]%2==0){
        cont2++;
    }
    if(numeros[i]%3==0){
        cont3++;
    }
    if(numeros[i]%4==0){
        cont4++;
    }
    if(numeros[i]%5==0){
        cont5++;
    }
}

console.log(cont2+' Multiplo(s) de 2');
console.log(cont3+' Multiplo(s) de 3');
console.log(cont4+' Multiplo(s) de 4');
console.log(cont5+' Multiplo(s) de 5');