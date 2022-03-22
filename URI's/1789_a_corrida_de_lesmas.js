var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var L=prompt("Informe a quantidade de caracol:");

while(L!==""){
var caracol=[];
caracol=prompt("").split(' ');
var max=caracol[0];

for(i=1;i<L;i++){ 
    max=Math.max(max,caracol[i]);
 } 
 if(max<10){ 
     console.log(1);
     }else if(max>=10 && max<20){
        console.log(2); }else if(max>=20){
        console.log(3);
        }

    L=prompt("Informe a quantidade de caracol:");
}