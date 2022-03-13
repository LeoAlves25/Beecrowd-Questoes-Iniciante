var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var T=parseInt(prompt());

for(i=1;i<=T;i++){
    var dados=prompt();
    var [PA, PB, G1, G2]=dados.split(" ");
    var anos=0;
    PA=parseInt(PA);
    PB=parseInt(PB);
    G1=parseFloat(G1);
    G2=parseFloat(G2);

        while(PB>=PA){
            PA+=parseInt((PA*G1)/100);
            PB+=parseInt((PB*G2)/100);
            anos++;
            if(anos>100){
                break;
            }
        }
        if(anos>100){
            console.log("Mais de 1 seculo.");
        } else{
            console.log(anos+" anos.");
        }
        
}