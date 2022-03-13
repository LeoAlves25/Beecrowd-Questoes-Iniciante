var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

while(true){
    var [A,B,C]=prompt().split(" ");

    A=parseInt(A);
    B=parseInt(B);
    C=parseInt(C);
        
    if(A===0){
        break;
    }

    var area=A*B;

    var lado=parseInt(Math.sqrt(area/(C/100)));
    console.log(lado);
}