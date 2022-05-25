var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var [abas, acoes]=prompt().split(' ').map(Number);

for(i=0;i<acoes;i++){
    var comando=prompt();

    if(comando=='fechou'){
        abas++;
    }else{
        abas--;
    }
}

console.log(abas);