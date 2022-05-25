var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var M=[];
var N=prompt();
while(N!==""){
    N=parseInt(N);
    for(X=1;X<=N;X++){
        var text="";
        M[X]=[]
        for(Y=1;Y<=N;Y++){
            if((X+Y)==(N+1)){
                M[X][Y]=2
            }else if(X==Y){
                M[X][Y]=1;
            }else{
                M[X][Y]=3;
            }
            text+=M[X][Y];
        }
        console.log(text);
    }
    N=prompt();
}