var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var X=prompt();
var cont=0;

while(X!==""){
    if(X==0){
        cont++;
        console.log("Caso "+cont+": 1 numero");
        console.log('0');
        console.log("");
        X=prompt();
    }else{
        var texto="0 ";
        var num=1;

        for(i=0;i<=X;i++){
            for(j=1;j<=i;j++){
                if(j==i && i==X){
                    texto+=i;
                    num++;
                }else{
                    texto+=i+" "
                    num++;
                }
            }
        }

        cont++;
        console.log("Caso "+cont+": "+num+" numeros");
        console.log(texto);
        console.log("");

        X=prompt();
    }
}