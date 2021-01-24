'use strict';
var rs= require('readline-Sync');
var kosherres=['Jacko’s Street','BaWest Sidebka','La Regence','Rooftop'];
var foodkind=['Seafood','fastfood'];
var res=['Raisa bar','DEDA','Tishreen'];
var num=rs.questionInt('How many people are you going with? ');
try{
if(rs.keyInYN(' Should it be Kosher? ')) {
    if(rs.keyInYN('Should it be Kosher  Lemehadrin?')){
    rs.keyInSelect(foodkind,'whitch one?');
    console.log(' favorite restaurants'+kosherres.toString());
    }
        else{
             rs.keyInSelect(foodkind,'whitch one?');
             console.log(' favorite restaurants'+kosherres.toString());}
    }
else {rs.keyInSelect(foodkind,'whitch one?');
console.log(' favorite restaurants'+res.toString());
}
}
catch {err}{
    console.log('Please enter only numbers');
}


      