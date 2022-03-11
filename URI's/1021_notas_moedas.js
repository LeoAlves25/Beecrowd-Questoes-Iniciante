var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

let valor = parseFloat(prompt('Informe o valor:'));

const notas=[100, 50, 20, 10, 5, 2];
const moedas=[100, 50, 25, 10, 5, 1];

console.log("NOTAS:");

for(let nota of notas){
    let qnTnotas=parseInt(valor/nota);
    console.log(qnTnotas+" nota(s) de R$ "+nota.toFixed(2));
    valor=valor%nota;
}

valor=parseInt(valor*100);

console.log("MOEDAS:")

for(let moeda of moedas){
    let qnTmoedas=parseInt(valor/moeda);
    console.log(qnTmoedas+' moeda(s) de R$ '+(moeda/100).toFixed(2));
    valor=valor%moeda;
}
