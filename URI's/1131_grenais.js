var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var flag=1;
var grenal=0, inter=0, gremio=0, empate=0;
while(flag==1){
    grenal++;
    var frase=prompt("Resultado:");
    var [A,B]=frase.split(" ");

    A=parseInt(A);
    B=parseInt(B);

    if(A>B){
        inter++;
    } else if(A<B){
        gremio++;
    } else{
        empate++;
    }

    console.log("Novo grenal (1-sim 2-nao)");
    flag=parseInt(prompt("Continuar?"));

    while(flag!=1 && flag!=2){
        console.log("Novo grenal (1-sim 2-nao)");
        flag=parseInt(prompt("Continuar?"));
    }
}

console.log(grenal+" grenais");
console.log("Inter:"+inter);
console.log("Gremio:"+gremio);
console.log("Empates:"+empate);

if(inter>gremio && inter>empate){
    console.log("Inter venceu mais");
} else if(gremio>inter && gremio>empate){
    console.log("Gremio venceu mais");
} else{
    console.log("Nao houve vencedor");
}