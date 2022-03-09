var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var frase=prompt("Informe os números:");
var [X, Y]=frase.split(" ");

X=parseInt(X);
Y=parseInt(Y);

for(i=1; i<=Y/X ;i++){
    var texto="";
    if(i==1){
        var j=1;
    } else{
        var j=((i-1)*X)+1;
    }
    while(j<=X*i){
        if(j==(X*i)){
            texto+=j;
            j++;
        } else{
            texto+=j+" ";
            j++;
        }
    }
    console.log(texto);
}