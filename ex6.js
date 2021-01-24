'use strict';
var readlineSync = require('readline-sync');
var num=readlineSync.questionInt('please choose a number LARGER than 10 : ');
console.log('User answer : '+ num);
while(num<10){
    num=readlineSync.questionInt('please choose a number LARGER than 10 : ');
    console.log('User answer : '+ num);
}
console.log('thank you');