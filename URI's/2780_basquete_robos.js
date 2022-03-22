var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var D=parseInt(prompt());

if(D<=800){
    console.log(1);
}else if(D>800 && D<=1400){
    console.log(2);
}else{
    console.log(3);
}