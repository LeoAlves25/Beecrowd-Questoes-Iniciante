var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=Number(prompt());
var carneiros=prompt().split(" ").map(Number);
var soma=0;
var cont=0;
var estrela=0;
var repetida=0;
var i=0;

for(j=0;j<N;j++){
    soma+=carneiros[j];
}
while(i!=N && i!=-1){
    if(carneiros[i]%2==1){
        carneiros[i]--;
        cont++;
        estrela++;
        i++;
    }else if(carneiros[i]%2==0 && carneiros[i]!=0){
        carneiros[i]--;
        cont++;
        estrela++;
        repetida++;
        i--;    
    }else{
        carneiros[i]--;
        estrela++;
        repetida++;
        i--;   
    }
}

if(repetida==0){
    console.log((estrela-repetida),(soma-cont));
}else if(repetida>0 && carneiros[0]==0){
    console.log((estrela-repetida+1),(soma-cont+1));
}else{
    console.log((estrela-repetida+1),(soma-cont));
}