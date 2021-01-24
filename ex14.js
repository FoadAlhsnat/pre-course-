function maxmin(n){

    'use strict';
var arr=[];
for(var i=0;i<n;i++)
    arr.push(Math.floor(Math.random()*50+1));
// ---------------- s1-------------    
 console.log(arr);   
 console.log('max number= '+Math.max.apply(null,arr));  
 console.log('min number= '+Math.min.apply(null,arr));   
//----------------------------------


//-----------------s2----------------
var max=arr[0],min=arr[0];
for(var i=1;i<arr.length;i++){
    if(arr[i]>max) max=arr[i];
    else if(arr[i]<min)min=arr[i];
}
console.log('max number= '+max); 
console.log('min number= '+min);  
//------------------------------------------
}
//------------------------ex 14--------------
var rs=require('readline-sync');
var n=rs.questionInt('enter number: ');
maxmin(n);
