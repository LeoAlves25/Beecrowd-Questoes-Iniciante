var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var T=prompt('Numero de mesas');

while(T!=0){
    for(i=0;i<T;i++){
        var N=prompt();

        if(N%2==0){
            console.log((N*2-2));
        }else{
            console.log((N*2-1));
        }
    }

    T=prompt('Numero de mesas');
}