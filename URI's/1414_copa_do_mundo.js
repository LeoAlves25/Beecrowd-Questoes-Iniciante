var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var [numPaises, jogos]=prompt().split(' ');

while(numPaises!=0){
    var soma=0;

    for(i=0;i<numPaises;i++){
        var [paises, pontos]=prompt().split(' ');
        pontos=parseInt(pontos);

        soma+=pontos
    }

    console.log(jogos*3-soma);
    [numPaises, jogos]=prompt().split(' ');
}