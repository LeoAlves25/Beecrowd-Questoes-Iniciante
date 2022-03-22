var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var par=[];
var impar=[];
var contp=0;
var conti=0;

for(i=0;i<15;i++){
    var X=parseInt(prompt("Informe o "+(i+1)+" número:"));

    if(X%2==0){
        par[contp]=X;
        contp++;

        if(contp==5){
            contp=0;

            for(j=0;j<5;j++){
                console.log("par["+j+"] = "+par[j]);
            }
        }
    }else{
        impar[conti]=X;
        conti++;

        if(conti==5){
            conti=0;

            for(l=0; l<5;l++){
                console.log("impar["+l+"] = "+impar[l]);
            }
        }
    }
}

for(i=0;i<conti;i++){
    console.log("impar["+i+"] = "+impar[i]);
}

for(i=0;i<contp;i++){
    console.log("par["+i+"] = "+par[i]);
}