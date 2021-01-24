'use strict';
function isCharacterALetter(char){
    return (/[a-zA-Z]/).test(char);
}
var rs=require('readline-sync');
var randomWord = require('random-words');//a library i found in google thats givivg you a random word
var word=randomWord();
while(word.length<=4){// the word will be more than 4 letter to by hard to guess 
    word=randomWord();
}
word=word.toLowerCase();
var newword=[];
for(var i =0;i<word.length;i++) newword=newword.concat('*');
var guess;
var len=0;
i=0;
console.log(
    figlet.textSync(' HANG MAN ', {
      horizontalLayout: 'full',
    })
  )
while(i<10){
    console.log('you have '+(10-i)+' attempts to guess the word');
    console.log('the word is:',newword.join(''));
    guess=rs.question('What is youe guess: ');
    while(isCharacterALetter(guess)===false){
        console.log('The index is uncorrect');
        guess=rs.question('What is youe guess: ');
    }
    guess=guess.toLowerCase();
    var index;
    if(guess.length>1){
        if(guess===word) console.log('wow you guess the word')
        break
    }
    else{
        index=word.indexOf(guess);
        if(index===-1){
            console.log(guess+' does not appear');
            i++;
        }
        else{
        if(newword.indexOf(guess)!==-1){
            console.log('you enter this guess before');
            i++;
        }
          for(var j=0;j<word.length;j++){
              if(word[j]===guess) {
                  newword[j]=guess;
                  len++;
          }  
    }
    }
    if(len===newword.length){
        console.log('wow you are good the word is'+word);
        break;
    }
  
}
}
if(i===10)console.log('loser the word is: '+word);