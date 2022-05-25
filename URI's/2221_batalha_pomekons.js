var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

for(i=0;i<N;i++){
    var bonus=Number(prompt());
    var [Ad, Dd, Ld]=prompt().split(' ').map(Number);
    var [Ag, Dg, Lg]=prompt().split(' ').map(Number);
    var Dabriel=0, Guarte=0;
    
    if(Lg%2==0){
        Guarte=(Ag+Dg)/2+bonus;
    }else{
        Guarte=(Ag+Dg)/2;
    }
    if(Ld%2==0){
        Dabriel=(Ad+Dd)/2+bonus;
    }else{
        Dabriel=(Ad+Dd)/2;
    }

    if(Guarte>Dabriel){
        console.log('Guarte');
    }else if(Dabriel>Guarte){
        console.log('Dabriel');
    }else{
        console.log('Empate');
    }
}