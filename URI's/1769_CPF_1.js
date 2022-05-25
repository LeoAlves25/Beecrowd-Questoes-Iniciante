var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var cpf=prompt();
while(cpf!=''){    
    var cpfSeparado=cpf.split('');
    var soma1=0;
    var soma2=0;
    var num1=1;
    var num2=9;

    for(let i=0; i<=10;i++){
        if(cpfSeparado[i]!=='.'){
            soma1+=cpfSeparado[i]*num1;
            num1++;
        }
    }
    for(let i=0; i<=10;i++){
        if(cpfSeparado[i]!=='.'){
            soma2+=cpfSeparado[i]*num2;
            num2--;
        }
    }

    var dig1;
    var dig2;
    if(soma1%11>9){
        dig1=0;
    }else{
        dig1=soma1%11;
    }

    if(soma2%11>9){
        dig2=0;
    }else{
        dig2=soma2%11;
    }
    var cpfVerificado='';

    for(let i=0;i<13;i++){
        if(i==3 || i==7){
            cpfVerificado+='.';
        }else if(i==11){
            cpfVerificado+='-';
        }else if(i==12){
            cpfVerificado+=String(dig1)+String(dig2);
        }else{
            cpfVerificado+=cpfSeparado[i];
        }
    }

    if(cpf===cpfVerificado){
        console.log('CPF valido');
    }else{
        console.log('CPF invalido');
    }
    cpf=prompt().len;
}