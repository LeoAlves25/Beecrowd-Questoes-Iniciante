var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var M=[];
while(true){
    var N=parseInt(prompt());
    if(N===0){
        break;
    }
        else{
        for(i=1;i<=N;i++){
            M[i]=[];
            var text="";
            
            for(j=1;j<=N;j++){
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
                if(j==N){
                    text+=M[i][j];
                }else{
                    text+=M[i][j]+" ";
                }
            }
            console.log(text);
        }
        console.log("")
    }
}