var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var M=prompt();

while(M!==''){
    var soma1=0;
    var soma2=0;

    for(i=0;i<M;i++){
        [N, C]=prompt().split(' ').map(Number);

        soma1+=N*C;
        soma2+=C*100;
    }

    var valor=(soma1/soma2).toFixed(4);

    console.log(valor);

    M=prompt();
}