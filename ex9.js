'use strict';
var rs=require('readline-sync');
var n=rs.questionInt('enter number');
for(var i=1;i<=n;i++){
    if(i===1) continue;
    var flag=1;
    for(var j=2;j<i;j++)
        if(i%j===0){
            flag=0;
            break;
        }
    if(flag===1) console.log(i+'');

}