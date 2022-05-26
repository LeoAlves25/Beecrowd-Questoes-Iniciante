var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var M=[];
var N=parseInt(prompt());
while(N!==0){
    for(var i=1;i<=N;i++){
        M[i]=[];
        var text="";
                
        for(var j=1;j<=N;j++){
            M[i][j]=i;

            if(j<M[i][j]){
                M[i][j]=j;
            }
            if((N-i+1)<M[i][j]){
                M[i][j]=N-i+1;
            }
            if((N-j+1)<M[i][j]){
                M[i][j]=N-j+1;
            }

            if(M[i][j]>9 && j!=1){
                text+="  "+M[i][j];
            }else if(M[i][j]<=9 && j!=1){
                text+="   "+M[i][j];
            }else if(j==1){
                text+="  "+M[i][j];
            }
        }
        if(i==N){
            console.log(text+'\n');
        }else{
            console.log(text);
        }
    }

    N=parseInt(prompt());
}