var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var [total, pago]=prompt().split(' ').map(Number);
var notas=[100, 50, 20, 10, 5, 2];

while(total!==0 && pago!==0){
    var troco=pago-total;
    var cedulas=0
    var soma=0;

    for(i=0;i<notas.length;i++){
        cedulas=parseInt(troco/notas[i]);
        soma+=cedulas;
        troco=troco%notas[i];
    }

    if(soma==2){
        console.log('possible');
    }else{
        console.log('impossible');
    }

    [total, pago]=prompt().split(' ').map(Number);
}