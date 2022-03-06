var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=parseInt(prompt(""));
var C=0, R=0, S=0;

for(i=0;i<N;i++){
    var frase=prompt("frase");
    var [quantia, tipo]=frase.split(" ");

    quantia=parseInt(quantia);

    if(tipo=="C"){
        C=C+quantia;
    }
    if(tipo=="R"){
        R=R+quantia;
    }
    if(tipo=="S"){
        S=S+quantia;
    }
}

var total=(C+R+S);

console.log("Total: "+total+" cobaias");
console.log("Total de coelhos: "+C);
console.log("Total de ratos: "+R);
console.log("Total de sapos: "+S);
console.log("Percentual de coelhos: "+((C/total)*100).toFixed(2)+" %");
console.log("Percentual de ratos: "+((R/total)*100).toFixed(2)+" %");
console.log("Percentual de sapos: "+((S/total)*100).toFixed(2)+" %");