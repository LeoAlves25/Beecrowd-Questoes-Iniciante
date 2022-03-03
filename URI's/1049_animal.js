var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var A=prompt("");
var B=prompt("");
var C=prompt("");

if(A=="vertebrado"){
    if(B=="ave"){
        if(C=="carnivoro"){
            console.log("aguia");
        } else{
            console.log("pomba");
        }
    } else{
        if(C=="onivoro"){
            console.log("homem");
        } else {
            console.log("vaca");
        }
    }
} else{
    if(B=="inseto"){
        if(C=="hematofago"){
            console.log("pulga");
        } else{
            console.log("lagarta");
        }
    } else{
        if (C=="hematofago"){
            console.log("sanguessuga");
        } else{
            console.log("minhoca");
        }
    }
}