var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var nome=prompt();

if(nome.length<=80){
    console.log('YES');
}else{
    console.log('NO');
}