var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var [hora,minuto]=prompt().split(":").map(Number);

while(hora!=""){
var horFinal=hora+1;

if(horFinal>=8 && horFinal<9){
    var atraso=minuto
}else if(horFinal>=9 && horFinal<10){
    var atraso=60+minuto;
}else if(horFinal>=10){
    var atraso=120+minuto
}else{
    var atraso=0;
}

console.log("Atraso maximo: "+atraso);

var [hora,minuto]=prompt().split(":").map(Number)
}