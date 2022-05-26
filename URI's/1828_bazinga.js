var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var T=prompt();

for(t=1;t<=T;t++){
    var [A,B]=prompt().split(" ");
    if(A==B){
        console.log("Caso #"+t+": De novo!");
    }else if(A=="tesoura"&&(B=="papel"||B=="lagarto")){
        console.log("Caso #"+t+": Bazinga!");
    }else if(A=="papel" && (B=="pedra" || B=="Spock")){
        console.log("Caso #"+t+": Bazinga!");
    }else if(A=="pedra" && (B=="lagarto" || B=="tesoura")){
        console.log("Caso #"+t+": Bazinga!");
    }else if(A=="lagarto" && (B=="Spock" || B=="papel")){
        console.log("Caso #"+t+": Bazinga!");
    }else if(A=="Spock" && (B=="tesoura" || B=="pedra")){
        console.log("Caso #"+t+": Bazinga!");
    }else{
        console.log("Caso #"+t+": Raj trapaceou!");
    }
}