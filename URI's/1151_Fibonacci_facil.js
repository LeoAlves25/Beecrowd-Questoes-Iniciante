var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt("Informe a quantidade de números:"));
var texto="";
var atual=1;
var anterior=0;
var proximo=0;

if(N==0 || N==1){
    console.log(anterior);
}

texto+=anterior+" "+atual;

for(i=1;i<(N-1);i++){
    proximo=anterior+atual;
    anterior=atual;
    atual=proximo;
    texto+=" "+atual
}
console.log(texto)