'use strict';
var rs= require('readline-Sync');
var arr=['zero','one','two','three','four','five','six','seven','eight','nine'];
var num=rs.question("enter a number between 0-9:\n");
while(num>9||isNaN(num)) num=rs.question("enter a number between 0-9:\n");
console.log(arr[num]);
