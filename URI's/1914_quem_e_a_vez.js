var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var QT=parseInt(prompt());

for(i=0;i<QT;i++){
    var [J1,X,J2,Y]=prompt().split(" ");
    var [N1,N2]=prompt().split(" ").map(Number);

    if(X=="PAR" && (N1+N2)%2==0){
        console.log (J1);
    }else if(X=="PAR" && (N1+N2)%2==1){
        console.log(J2);
    }else if(X=="IMPAR" && (N1+N2)%2==1){
        console.log(J1);
    }else{
        console.log(J2);
    }
}