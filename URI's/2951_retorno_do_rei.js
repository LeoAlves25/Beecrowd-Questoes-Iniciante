var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var [runaQnt, amizade]=prompt().split(' ').map(Number);
var valorAmizade=[];
var runaCadastrada=[];

for(let i=0; i<runaQnt;i++){
    var [runa, valor]=prompt().split(' ');
    valor=parseInt(valor);
    runaCadastrada.push(runa);
    valorAmizade.push(valor);
}

var escolhaHobbit=prompt('Quantas runas serão escolhidas?');
var runaHobbit=prompt("Informe as runas:").split(' ');
var somaAmizade=0;

for(let i=0;i<escolhaHobbit;i++){
    if(runaCadastrada.indexOf(runaHobbit[i])!=-1){
        somaAmizade+=valorAmizade[runaCadastrada.indexOf(runaHobbit[i])];
    }
}

if(somaAmizade>=amizade){
    console.log(somaAmizade);
    console.log('You shall pass!');
}else{
    console.log(somaAmizade);
    console.log('My precioooous');
}