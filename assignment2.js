'use strict';
var suits=['♠︎', '♥︎', '♣︎',' ♦︎'];
var rs=require('readline-sync');
var isl=50;
var isl2=50;
function checkbet(b)
{
    if((b<1||b>50)){
       return false;
    }
    return true;
}
function player1()
{
var name=rs.question('enter your name: ');
console.log('hi '+name+' you have 50 $');
var bet=rs.questionInt('enter your bet (1-50): ');
if(checkbet(bet)===false){
    console.log('i said betwwen 1 to 50 and you typed:'+bet+'!!!!!\nidont play with liars bye');
    process.exit(1)
}
while(true){
var user=Math.floor(Math.random()*12+1);
var comp=Math.floor(Math.random()*12+1);
var s1=Math.floor(Math.random()*4);
var s2=Math.floor(Math.random()*4);
while(user===comp)
{
    user=Math.floor(Math.random()*12+1);
    comp=Math.floor(Math.random()*12+1);
}
if(user>comp){
    isl+=bet;
    console.log('your card are '+user,suits[s1]+' and my card is '+comp,suits[s2]+'\nyou won '+bet+' now you have '+isl);
}
else{
    isl-=bet;
    console.log('your card are '+user,suits[s1]+' and my card is '+comp,suits[s2]+'\ni won '+bet+' now you have '+isl);
    if(isl<=0){
    console.log('you are broke bye');
    break;
    }
}
var op=['play another round','leave with my money'];
var ind=rs.keyInSelect(op,'what would you like to do?',{cancel: false});
if(ind===1){
    console.log('you have '+isl+' bye');
    break;
}
 bet=rs.questionInt('enter your bet(1-50): ');
if(bet<1||bet>50){
        console.log('i said between 1to 50and you typed:'+bet+'!!!!!\nidont play with liars bye');
        break;
    }
 else if(bet>isl){
        console.log('you dont have this money bye');
        break;
    }

}
}
function player2()
{
    var p1=rs.question('enter player 1 name: ');
    var p2=rs.question('enter player 2 name: ');
    console.log('hi '+p1+' and '+p2+' you have 50 $');
    var bet=rs.questionInt('enter player1 bet(1-50): ');
    var bet2=rs.questionInt('enter player2 bet(1-50): ');
    if(checkbet(bet)===false||checkbet(bet2)===false)
    {
        console.log('you have to enter a bet between 1-50 and you typed:'+bet+'!!!!!\nbye');
    process.exit(1)
    }
    while(true){
        var user=Math.floor(Math.random()*12+1);
        var user2=Math.floor(Math.random()*12+1);
        var s1=Math.floor(Math.random()*4);
        var s2=Math.floor(Math.random()*4);
        //console.log(suits[s1]);
        while(user===user2)
        {
            user=Math.floor(Math.random()*12+1);
            user2=Math.floor(Math.random()*12+1);
        }
        if(user>user2){
            isl+=bet2;
            isl2-=bet2;
            console.log('player1 card are '+user,suits[s1]+' and player2 card is '+user2,suits[s2]+'\nplayer1 won '+(bet+bet2)+' now you have '+isl);
        }
        else{
            isl2+=bet;
            isl-=bet;
            console.log('player1 card '+user,suits[s1]+' and player2 card is '+user2,suits[s2]+'\nplayer2 won '+(bet+bet2)+' now you have '+isl2)
            if(isl<0){
                console.log('player1 broke bye');
            break;
            }
            else if(isl2<0)
            {
                console.log('player2 broke bye');
                break;
            }
        }
        var op=['play another round','leave with my money'];
        var ind=rs.keyInSelect(op,'what would you like to do ?'+user,{cancel: false});
        var ind2=rs.keyInSelect(op,'what would you like to do?'+user2,{cancel: false});
        if(ind===1||ind2===1){
            console.log('player1 have '+isl+' player2 have'+isl2+' bye');
            break;
        }
        var bet=rs.questionInt('enter player1 bet(1-50): ');
        var bet2=rs.questionInt('enter player2 bet(1-50): ');
        if(checkbet(bet)===false||checkbet(bet2)===false){
            console.log('you have to enter a bet between 1-50 and you typed:'+bet+'!!!!!\nbye');
                break;
            }
         else if(bet>isl||bet2>isl2){
                console.log('you dont have this money bye');
                break;
            }
}
}
var pl=['player1','player2'];
var ch=rs.keyInSelect(pl,'what would you like to play: ',{cancel: false});
if(ch===0) player1()
else player2();