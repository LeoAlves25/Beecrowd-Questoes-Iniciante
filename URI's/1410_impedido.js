var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var [A, D]=prompt().split(' ');

while(A!=0 && D!=0){
    var B=prompt().split(' ').map(Number);
    var C=prompt().split(' ').map(Number);
    
    var minAtacante=B[0];
    var minDefesa1=C[0];

    for(let i=1;i<A;i++){
        minAtacante=Math.min(minAtacante,B[i]);
    }
    for(let i=1;i<D;i++){
        minDefesa1=Math.min(minDefesa1,C[i]);
    }

    if(C.indexOf(minDefesa1)===0){
        C.shift();
    }else{
        C.splice((C.indexOf(minDefesa1)),1);
    }

    var minDefesa2=C[0];

    D--

    for(let i=1;i<D;i++){
        minDefesa2=Math.min(minDefesa2,C[i]);
    }

    if(minAtacante<minDefesa1 || minAtacante<minDefesa2){
        console.log('Y');
    }else{
        console.log('N');
    }

    [A, D]=prompt().split(' ');
}