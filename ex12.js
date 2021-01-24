'use strict';
var rs=require('readline-sync');
var str=rs.question('enter string: ')
for(var i=0;i<str.length;i++){
        switch(str[i]){
            case 'a':str=str.replace('a','A')
            break;
            case 'e':str=str.replace('e','E');
            break;
            case 'i':str=str.replace('i','I');
            break;
            case 'o':str=str.replace('o','O');
            break;
            case 'u':str=str.replace('u','U');
            break;
            case 'y':str=str.replace('y','Y');
            break;
            default: break;
        }
        
}
console.log(str);