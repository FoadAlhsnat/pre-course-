'use strict';
var readlineSync = require('readline-sync');
var n=readlineSync.question('please enter a string : ');
console.log(n.split(' ').join('*'));
