var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var numero=prompt()
var caso=1;

while(numero!==''){
    numero.split('');
    var sequencia=prompt().split('');
    var subsequencias=0;

    for(i=0;i<sequencia.length;i++){
        if(sequencia[i]==numero[0]){
            var pos=i;
            var y=0;
            var contIgual=0;
            for(x=i;x<(i+numero.length);x++){

                if(sequencia[x]==numero[y]){
                    contIgual++;
                    y++;
                }
            }
            if(contIgual==numero.length){
                subsequencias++;
            }
        }
    }

    console.log(`Caso #${caso}:`);
    if(subsequencias===0){
        console.log('Nao existe subsequencia');
    }else{
        console.log('Qtd.Subsequencias: '+subsequencias);
        console.log('Pos: '+(pos+1));
    }
    console.log("");

    numero=prompt();
    caso++;
}