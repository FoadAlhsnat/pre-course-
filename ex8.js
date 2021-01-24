'use strict';
for(var i=0;i<=100;i++){
    if(i%7==0||i.toString().indexOf('7')!==-1){
       console.log('BOOM,');
    }
    else {
        console.log(i+',');
    }
}