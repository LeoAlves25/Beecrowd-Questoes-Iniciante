var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt());

for(i=0;i<N;i++){
    var X=parseInt(prompt());

    if(X%2==0){
        console.log(0);
    }else{
        console.log(1);
    }
}