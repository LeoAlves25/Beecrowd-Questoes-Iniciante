var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var flag=1;

while(flag==1){
    var X=parseInt(prompt());

    if(X===0){
        flag=0;
    } else{
        var soma=0;
        var cont=0;

        while(cont<5){
            if(X%2===0){
                soma+=X;
                X++;
                cont++;
            }else{
                X++;
            }
        }
        console.log(soma);
    }
}