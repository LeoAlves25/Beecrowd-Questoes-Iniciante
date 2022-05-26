var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var [A,B,C,D]=prompt().split(" ").map(Number);

if ((A < (B+C)) && (A > Math.abs(B-C)) || (A < (B+D)) && (A > Math.abs(B-D)) || (A < (C+D)) && (A > Math.abs(C-D)) || (B < (A+C)) && (B > Math.abs(A-C)) || (B < (A+D)) && (B > Math.abs(A-D)) || (B < (C+D)) && (B > Math.abs(C-D)) || (C < (A+B)) && (C > Math.abs(A-B)) || (C < (A+D)) && (C > Math.abs(A-D)) || (C < (B+D)) && (C > Math.abs(B-D)) || (D < (A+B)) && (D > Math.abs(A-B)) || (D < (A+C)) && (D > Math.abs(A-C)) || (D < (B+C)) && (D > Math.abs(B-C))){
    console.log("S");
}else{
    console.log("N");
}