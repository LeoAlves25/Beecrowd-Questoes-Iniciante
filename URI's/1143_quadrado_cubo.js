var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt("Informe o número de linhas"));

for(i=1;i<=N;i++){
    var j=1;
    var texto="";
    while(j<4){
        var num=Math.pow(i,j);
        if(j<3){
            texto+=num+" ";
            j++;
        }else{
            texto+=num;
            j++;
        }
    }
    console.log(texto);
}