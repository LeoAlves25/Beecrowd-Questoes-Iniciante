var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var salario=parseFloat(prompt(""));
var A=0;
if(salario<=2000){
    console.log("Isento");
} else if(salario<=3000){

    A=(salario-2000)*0.08;
    console.log("R$ "+A.toFixed(2));
} else if(salario<=4500){

    A=(salario-3000)*0.18+1000*0.08;
    console.log("R$ "+A.toFixed(2));
} else if(salario>4500){
        
    A=(salario-4500)*0.28+1500*0.18+1000*0.08;
    console.log("R$ "+A.toFixed(2));
}