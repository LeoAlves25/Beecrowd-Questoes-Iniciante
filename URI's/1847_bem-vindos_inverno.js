var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var [A,B,C]=prompt().split(" ").map(Number);

if(A>B && (B==C || C>B)){
    console.log(":)");
}else if(A<B && (B==C || C<B)){
    console.log(":(");
}else if(A<B && B<C && ((C-B)<(B-A))){
    console.log(":(");
}else if(A<B && B<C && ((C-B)>=(B-A))){
    console.log(":)");
}else if(A>B && B>C && ((B-C)<(A-B))){
    console.log(":)");
}else if(A>B && B>C && ((B-C)>=(A-B))){
    console.log(":(");
}else if(A==B && C>B){
    console.log(":)");
}else{
    console.log(":(");
}