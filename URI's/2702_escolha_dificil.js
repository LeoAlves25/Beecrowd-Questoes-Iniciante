var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var [Ca,Ba,Pa]=prompt().split(" ").map(Number);
var [Cb,Bb,Pb]=prompt().split(" ").map(Number);
var pedidos=0;

if(Cb>Ca){
    pedidos=Cb-Ca;
}
if(Bb>Ba){
    pedidos+=(Bb-Ba);
}
if(Pb>Pa){
    pedidos+=(Pb-Pa);
}

console.log(pedidos);