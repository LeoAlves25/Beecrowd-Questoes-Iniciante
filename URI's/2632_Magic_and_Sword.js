var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var fire=[200, 20, 30, 50];
var water=[300, 10, 25, 40];
var earth=[400, 25, 55, 70];
var air=[100, 18, 38, 60];
var loop=Number(prompt('Número de repetições:'));

for(let i=0;i<loop;i++){
    var [w, h, x, y]=prompt().split(' ').map(Number);
    var [elemento, nivel, cx, cy]=prompt().split(' ');
    var dano;
    var raio;

    if(elemento=='fire'){
        dano=fire[0];
        raio=fire[Number(nivel)];
    }else if(elemento=='water'){
        dano=water[0];
        raio=water[Number(nivel)];
    }else if(elemento=='earth'){
        dano=earth[0];
        raio=earth[Number(nivel)];
    }else{
        dano=air[0];
        raio=air[Number(nivel)];
    }
    
    var menorX=Math.abs(cx-x);
    var menorY=Math.abs(cy-y);

    for(let i=1;i<=w;i++){
        menorX=Math.min(menorX,(Math.abs(cx-x-i)));
    }
    for(let i=1;i<=h;i++){
        menorY=Math.min(menorY,(Math.abs(cy-y-i)));
    }

    if(Math.sqrt(menorX**2+menorY**2)<=raio){
        console.log(dano);
    }else{
        console.log(0);
    }
}