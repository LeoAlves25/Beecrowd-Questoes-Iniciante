var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var alfabeto=prompt().split('');

while(alfabeto!=""){
    var N=Number(prompt());
    var lampadas=prompt().split(' ').map(Number);
    var texto="";
    
    for(i=0;i<N;i++){
        texto+=alfabeto[lampadas[i]-1];
    }

    console.log(texto);
    
    alfabeto=prompt().split('');
}