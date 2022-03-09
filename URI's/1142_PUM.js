var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt("Informe o número de linhas:"));

for(i=1;i<=(N*4);i=i+4){
    var texto="";
    for(j=i;(j-i)<=2;j++){
        texto+=j+" ";
    }
    console.log(texto+"PUM")
}