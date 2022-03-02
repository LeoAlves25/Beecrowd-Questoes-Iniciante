var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var frase = prompt("frase");
var [A,B,C,D]=frase.split(" ");
A=parseFloat(A);
B=parseFloat(B);
C=parseFloat(C);
D=parseFloat(D);

var media=parseFloat(((A*2+B*3+C*4+D*1)/10).toFixed(1));

console.log("Media: "+media.toFixed(1));

if(media<5){
    console.log("Aluno reprovado.");
}
if(media>=7){
    console.log("Aluno aprovado.");
}
if(media>=5 && media<=6.9){
    console.log("Aluno em exame.");
    var E=parseFloat(prompt(""));
    var mediaFinal= parseFloat((media+E)/2);
    console.log("Nota do exame: "+E.toFixed(1));
    console.log("Aluno aprovado.");
    if (mediaFinal>=5){
    } 
    console.log("Media final: "+mediaFinal.toFixed(1));
    console.log("Aluno reprovado.");
    if(mediaFinal<5){
    }
    console.log("Media final: "+mediaFinal.toFixed(1));
}