var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=Number(prompt());
var H=prompt().split(' ').map(Number);
var cont=0;

if(N==2){
    if(H[0]==H[1]){
        console.log(0);
    }else{
        console.log(1);
    }
}else{
    for(i=1;i<=N;i++){

        if((H[i-1]<H[i] && H[i]>H[i+1]) || (H[i-1]>H[i] && H[i]<H[i+1]) || H[i-1]==undefined || H[i+1]==undefined){
            cont++;
        }
    }

    if(cont==N){
        console.log(1);
    }else{
        console.log(0)
    }
}