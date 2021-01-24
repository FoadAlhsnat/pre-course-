function rev( arr){
    'use strict';
    var temp;
    console.log(arr);
    //------------------s1-------------
    console.log(arr.reverse());

    //-------------------------s2-------
    for(var i=0,j=arr.length-1;i<j;i++,j--){
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    console.log(arr);
    }
    var arry=[1,2,3];
    rev(arry);