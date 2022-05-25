var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var frase=["L","I","F","E"," ","I","S"," ","N","O","T"," ","A"," ","P","R","O","B","L","E","M"," ","T","O"," ","B","E"," ","S","O","L","V","E","D"];

var N=parseInt(prompt());
var text="";

for(i=0;i<N;i++){
    text+=frase[i];
}
console.log(text);