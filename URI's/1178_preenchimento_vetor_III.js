var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=[];
var X=parseFloat(prompt());
N.push(X);
for(i=0;i<=99;i++){
    var Y=parseFloat(N[i]/2);
    if(((Y*10000-Math.trunc(Y*10000)))==0.5){
        Y=Y-0.00001;
    }
    if(Y<0){
        Y=0;
    }
    N.push(Y);
    console.log("N["+i+"] = "+(N[i].toFixed(4)));
}