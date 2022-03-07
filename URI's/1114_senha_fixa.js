var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

while(true){
    var senha=parseInt(prompt(""));

    if(senha!==2002){
        console.log("Senha Invalida");
    } else{
        console.log("Acesso Permitido");
        break;
    }
}