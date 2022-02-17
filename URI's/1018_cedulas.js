var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var y=parseInt(prompt('Informe o valor:'));
var d100=parseInt(y/100);
x=y%100
var d50=parseInt(x/50);
x=x%50
var d20=parseInt(x/20);
x=x%20
var d10=parseInt(x/10);
x=x%10
var d5=parseInt(x/5);
x=x%5
var d2=parseInt(x/2);
x=x%2
    
console.log(y);
console.log(d100+" nota(s) de R$ 100,00");
console.log(d50+" nota(s) de R$ 50,00");
console.log(d20+" nota(s) de R$ 20,00");
console.log(d10+" nota(s) de R$ 10,00");
console.log(d5+" nota(s) de R$ 5,00");
console.log(d2+" nota(s) de R$ 2,00");
console.log(x+" nota(s) de R$ 1,00");