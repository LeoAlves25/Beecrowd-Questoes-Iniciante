var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var tweet=prompt()

if(tweet.length<=140){
    console.log('TWEET');
}else{
    console.log('MUTE');
}