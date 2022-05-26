var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var alunos=prompt();
var maximo=0;

for(i=0;i<alunos;i++){
    var [matricula,nota]=prompt().split(" ").map(Number);
    maximo=Math.max(maximo,nota);
    if(maximo==nota){
        var maior=matricula;
    }
}

if(maximo<8){
    console.log("Minimum note not reached");
}else{
    console.log(maior);
}