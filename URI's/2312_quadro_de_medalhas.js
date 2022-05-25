var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=Number(prompt());
var pais = [], ouro = [], prata = [], bronze = [];

for(let i=0;i<N;i++){
    var [nome, O, P, B]=prompt().split(' ');
    pais[i]=nome;
    ouro[i]=parseInt(O);
    prata[i]=parseInt(P);
    bronze[i]=parseInt(B);
}

for(let i=0; i<N;i++){
    for(let j=0;j<N-1;j++){
        if((ouro[j]<ouro[j+1]) || (ouro[j]==ouro[j+1] && prata[j]<prata[j+1]) || (ouro[j]==ouro[j+1] && prata[j]==prata[j+1] && bronze[j]<bronze[j+1])){
            var aux1=ouro[j];
            ouro[j]=ouro[j+1];
            ouro[j+1]=aux1;

            var aux2=prata[j];
            prata[j]=prata[j+1];
            prata[j+1]=aux2;

            var aux3=bronze[j];
            bronze[j]=bronze[j+1];
            bronze[j+1]=aux3;

            var aux4=pais[j];
            pais[j]=pais[j+1];
            pais[j+1]=aux4;

        }else if(ouro[j]==ouro[j+1] && prata[j]==prata[j+1] && bronze[j]==bronze[j+1]){
            var vetor=[];
            vetor[0]=pais[j];
            vetor[1]=pais[j+1];

            vetor.sort();

            pais[j]=vetor[0];
            pais[j+1]=vetor[1];
        }
    }
}

for(let i=0; i<N;i++){
    console.log(pais[i],ouro[i],prata[i],bronze[i]);
}