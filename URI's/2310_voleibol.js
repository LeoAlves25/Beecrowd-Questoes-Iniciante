var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var N=Number(prompt());
var TSaques=0, TBloqueios=0, TAtaques=0;
var Saques=0, Bloqueios=0, Ataques=0;

for(i=0;i<N;i++){
    var nome=prompt();
    var[S, B, A] = prompt().split(' ').map(Number);
    var[S1, B1, A1] = prompt().split(' ').map(Number);

    TSaques+=S;
    TBloqueios+=B;
    TAtaques+=A;
    
    Saques+=S1;
    Bloqueios+=B1;
    Ataques+=A1;
}

console.log('Pontos de Saque: '+((Saques/TSaques)*100).toFixed(2)+' %.');
console.log('Pontos de Bloqueio: '+((Bloqueios/TBloqueios)*100).toFixed(2)+' %.');
console.log('Pontos de Ataque: '+((Ataques/TAtaques)*100).toFixed(2)+' %.');