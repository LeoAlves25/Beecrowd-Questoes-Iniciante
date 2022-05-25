var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var alimentos=['suco', 'morango', 'mamao', 'goiaba', 'manga', 'laranja', 'brocolis'];
var vitamina=[120, 85, 85, 70, 56, 50, 34];
var T=Number(prompt());

while(T!=0){
    var quantidade=0;
    for(i=0;i<T;i++){
        var [C, comida]=prompt().split(' ');

        quantidade+=Number(C)*vitamina[alimentos.indexOf(comida)];
    }

    if(quantidade>130){
        console.log('Menos '+(quantidade-130)+' mg');
    }else if(quantidade<110){
        console.log('Mais '+(110-quantidade)+' mg');
    }else{
        console.log(quantidade+' mg');
    }

    T=Number(prompt());
}