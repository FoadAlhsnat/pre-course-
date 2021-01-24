'use strict';
var mul=1;
var rs=require('readline-sync');
var num=rs.questionInt('enter aenter apositive number: ');
while(num<0) num=rs.questionInt('enter aenter apositive number: ');
for(var i=1;i<=num;i++) mul*=i;
console.log('the factorial of '+num+'='+mul);