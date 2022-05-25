var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

[A,B]=prompt("Informe os números:").split(" ");
    
A=parseInt(A);
B=parseInt(B);

if(A>=0){
var r=A%Math.abs(B);
var q=parseInt(A/B);

}else {
    var X=0;
    var Y=0;

    X=Math.abs(B);

    for(r=0;r<X;r++){
        Y=A-r;
        if(Y%B==0){
            break;
        }
    }
    q=Y/B;
}
console.log(q,r);