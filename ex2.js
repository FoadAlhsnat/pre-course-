/*function makes10(){
    'use strict';
var rs = require('readline-Sync');
var num1 = rs.question('enter first numder? ');
var num = rs.question('enter second numder? ');
var flag=1;
var flag1=1;
for(var i=0;i<num1.length;i++){
   if(num.charCodeAt(i)>=97&&num.charCodeAt(i<=122)) {flag=0;
   }
    if(num1.charCodeAt(i)>=97&&num1.charCodeAt(i<=122)){flag1=0
    }
}  
if(flag===0||flag1===0) console.log('nope')
else{
if( Number.parseFloat(num)+Number.parseFloat(num1)===10)
 console.log('makes 10');
else console.log('nope');
}
}
makes10();*/
//var figlet = require('figlet');


function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
}

function isUpperCase(str) {
    return str === str.toUpperCase();
}
'use strict';

console.log(
    figlet.textSync(' HANG MAN ', {
      horizontalLayout: 'full',
    })
  )
var flag=0;
var count=0;
var Attemp=10;
var pass=[];
var words = ['wonderland','monkey','hangman','appleseels','hello','bootcamp','assgiment','javascript','lastassign','visualcode','desktop','python'];
var word = words[Math.floor(Math.random() * words.length)];
//console.log(word);
for (var i = 0; i < word.length; i++) {
    pass[i] = '*';

}



var lenword=word.length;


while(true){
    console.log('You have '+Attemp+' guessess');
    console.log('The word is:');
    console.log(pass.join(''));

    var rs=require('readline-sync');
    var guess=rs.question('What is youe guess: ');
    //console.log(isCharacterALetter(guess));
    while(isCharacterALetter(guess)==false){
        console.log('The index is uncorrect')
        var rs=require('readline-sync');
        var guess=rs.question('What is youe guess: ');
    }

    if(isUpperCase(guess)==true){
        guess=guess.toLowerCase();
    }

    for (i = 0; i < word.length; i++) {
        for (let j = 0; j < guess.length; j++) {
             if (word[i] === guess[j]) {
                flag=1;
                pass[i] = guess[j];
                lenword--;
            }
        }
    }
    
    for (i = 0; i < word.length; i++) {
        if(pass[i] == '*'){
            count++;
        }
    }

    if(flag==0){
        Attemp--;
    }
    var msg='';
    if(lenword==0||Attemp==0||count==0){
        msg='the word is '+word;
        if(lenword==0||count==0){
            msg+='\nwow you are good!!!'
        }
        else{
            msg+='\nyou use all the attemps'
        }
        console.log(msg);
        break;
    }
    flag=0;
}
