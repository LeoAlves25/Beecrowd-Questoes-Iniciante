var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var tentativas=parseInt(prompt());

for(i=0;i<tentativas;i++){
    var heroi=prompt().split(" ");
    if(heroi[0]=="Thor"){
        console.log("Y");
    }else{
        console.log("N");
    }
}