var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var tentativa=prompt();
var cha=prompt().split(' ');
var cont=0;

for(i=0;i<5;i++){
    if(tentativa==cha[i]){
        cont++;
    }
}

console.log(cont);