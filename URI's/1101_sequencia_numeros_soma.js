var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

while(true){
    var frase=prompt("frase");
    var [M,N]=frase.split(" ");

    M=parseInt(M);
    N=parseInt(N);

    var min=Math.min(M,N);
    var max=Math.max(M,N);
    var sum=0;

    if(M<=0 || N<=0){
        break;
    }

    var texto= ""
    for(i=min;i<=max;i++){
        sum+=i;
        texto+=i+ " ";
    }
    console.log(texto+"Sum="+sum);
}