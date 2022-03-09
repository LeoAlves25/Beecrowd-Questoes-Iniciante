var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

while(true){
    var X=parseInt(prompt("Informe o número:"));
    var texto="";
    var i=1;

    if(X==0){
        break;
    }
        
    while(i<=X){
        if(i==X){
            texto+=i;
            i++;
        } else{
            texto+=i+" ";
            i++;
        }
    }
    console.log(texto);
}