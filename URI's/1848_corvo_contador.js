var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var contador=0;

while(contador<3){
    var codigo=prompt();
    var soma=0;

    while(codigo!="caw caw"){
        codigo.split("");

        for(i=1;i<=3;i++){
            if(codigo[i-1]=="*"){
                var binario=Math.pow(2,3-i)
                soma+=binario;
            }
        }
        codigo=prompt();
    }

    console.log(soma);

    if(codigo=="caw caw"){
        contador++;
    }
}