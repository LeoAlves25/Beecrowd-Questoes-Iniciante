var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var [N, M]=prompt().split(' ');
var mat=[];
var X=0, Y=0;

for(let i=0;i<N;i++){
    mat[i]=prompt().split(' ');
}

for(let i=0;i<N;i++){
    for(let j=0;j<M;j++){
        if((i==0 || j==0 || i==(N-1) || j==(M-1)) && mat[i][j]==42){
           
        }else if((mat[i][j]==42) && (mat[i-1][j-1]==7) && 
        (mat[i-1][j]==7) && (mat[i-1][j+1]==7) 
        && (mat[i][j-1]==7) && (mat[i+1][j-1]==7) 
        && (mat[i+1][j]==7) && (mat[i+1][j+1]==7) 
        && (mat[i][j+1]==7)){
            X=i+1;
            Y=j+1;
        }
    }
}

console.log(X,Y);