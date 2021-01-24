'use strict';
var str ='Hello dear Bootcamper';
var long='';
var words=str.split(' ');
for(var word of words){
    var flag=0;
    for(var i=0;i<word.length;i++)
        if(word.charCodeAt(i)>122||(word.charCodeAt(i)>90&&word.charCodeAt(i)<97)||word.charCodeAt(i)<65){
          flag=1;
          break;
        }
    if(flag===0)
        if(word.length>long.length)long=word;    
}
console.log('the longest word='+long);
