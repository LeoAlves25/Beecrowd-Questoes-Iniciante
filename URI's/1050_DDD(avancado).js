var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var ddd=[61, 71, 11, 21, 32, 19, 27, 31];
var cidades=["Brasilia", "Salvador", "Sao Paulo", "Rio de Janeiro", "Juiz de Fora", "Campinas", "Vitoria", "Belo Horizonte"];

var A=parseInt(prompt(""));

var teste=ddd.indexOf(A);

if(teste===-1){
    console.log("DDD nao cadastrado");
} else{
    console.log(cidades[teste]);
}