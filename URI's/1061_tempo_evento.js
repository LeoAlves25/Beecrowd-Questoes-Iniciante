var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var dI=prompt("dI");
var [palavra, DI]=dI.split(" ");
var tempoInicial=prompt("tempoInicial");
var [hi, palavra, mi, palavra, si]=tempoInicial.split(" ");
    
var dF=prompt("dF");
var [palavra, DF]=dF.split(" ");
var tempoFinal=prompt("tempoFinal");
var [hf, palavra, mf, palavra, sf]=tempoFinal.split(" ");

DI=parseInt(DI);
DF=parseInt(DF);
hi=parseInt(hi);
mi=parseInt(mi);
si=parseInt(si);
hf=parseInt(hf);
mf=parseInt(mf);
sf=parseInt(sf);

var temp1=(si+(mi*60)+(hi*60*60)+(DI*24*60*60));
var temp2=(sf+(mf*60)+(hf*60*60)+(DF*24*60*60));
var total=temp2-temp1;

var dia=parseInt(total/(24*60*60));
total=total%(24*60*60);

var hora=parseInt(total/(60*60));
total=total%(60*60);

var minuto=parseInt(total/60);
total=total%60;
var segundo=total;

console.log(dia+" dia(s)");
console.log(hora+" hora(s)");
console.log(minuto+" minuto(s)");
console.log(Math.round(segundo)+" segundo(s)");