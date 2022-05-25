var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var codigo=prompt()
var valor=codigo;
var cont1=0;
codigo.split('');

for(i=0;i<codigo.length;i++){
    if(codigo[i]==1){
        cont1++;
    }
}

if(cont1%2==0){
    console.log(valor+0);
}else{
    console.log(valor+1);
}