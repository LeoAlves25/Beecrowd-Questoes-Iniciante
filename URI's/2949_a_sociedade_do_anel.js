var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var membros=prompt('Quantidade de membros:');
var contA=0;
var contM=0;
var contE=0;
var contH=0;
var contX=0;

for(let i=0;i<membros;i++){
    var [nome, especie]=prompt("Informe o nome e a espécie:").split(' ');

    if(especie=='A'){
        contA++;
    }
    if(especie=='M'){
        contM++;
    }
    if(especie=='E'){
        contE++;
    }
    if(especie=='H'){
        contH++;
    }
    if(especie=='X'){
        contX++;
    }
}

console.log(contX+" Hobbit(s)");
console.log(contH+" Humano(s)");
console.log(contE+" Elfo(s)");
console.log(contA+" Anao(s)");
console.log(contM+" Mago(s)");