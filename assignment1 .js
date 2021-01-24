'use strict';
var st='####################';
var sn='--------------------';
var qz='Hello,welcome to the Quiz!';

var sum=0;
var text='';
var test=1;
var readlineSync = require('readline-sync');

var str1=[1,3,2,4];//score for q1
var str2=[2,1,4,3];//score for q2
var str3=[2,4,3,1];//score for q3
var str4=[3,4,1,2];//score for q4
var str5=[4,3,2,1];//score for q5

console.log('\n',st,'\n',qz,'\n',st,'\n','First Question','\n',sn,'\n');
var q1 = ["Hanoka","soket","Pesah","Christmas"];// What is your favorite Holiday?(1,2,3,4)
var ans1 = readlineSync.keyInSelect(q1, "What is your favorite Holiday? ");
sum+=str1[ans1];
if(ans1<=0){
    test=0;
}
console.log(sum);


console.log('\n',st,'\n',st,'\n','Second Question','\n',sn,'\n');
var q2 = ["The Princess and the Frog", "Frozen", "The Lion King", "Beauty and the Beast"];//What's your favorite cartoon from Disney's?(2,1,4,3)
var ans2 = readlineSync.keyInSelect(q2, "What's your favorite cartoon from Disney's? ");
sum+=str2[ans2];

console.log(sum);
if(ans2<=0){
    test=0;
}

console.log('\n',st,'\n',st,'\n','Third Question','\n',sn,'\n');
var q3 = ["Takos", "Pizza", "Chicken tenders and fries","Vigetabeles"];//Lastly, choose a meal you couldn't live without:(2,4,3,1)
var ans3 = readlineSync.keyInSelect(q3, "Lastly, choose a meal you couldn't live without: ");
sum+=str3[ans3];
console.log(sum);
if(ans3===0){
    test=0;
}

console.log('\n',st,'\n',st,'\n','Fourth Question','\n',sn,'\n');
var q4 = ["Maroon 5", "BTS","Coldplay","One Direction"];//Choose a band:(3,4,1,2)
var ans4 = readlineSync.keyInSelect(q4, "Choose a band: ");
sum+=str4[ans4];
console.log(sum);
if(ans4<=0){
    test=0;
}

console.log('\n',st,'\n',st,'\n','Fivethird Question','\n',sn,'\n');
var q5 = ["Parties on the beach","NETFLIX", "Sleeping and Eating","HIKE OR OTHER OUTDOOR ACTIVITY"];//What would you do with a day off?(4,3,2,1)
var ans5 = readlineSync.keyInSelect(q5, "What would you do with a day off? ");
sum+=str5[ans5];
console.log(sum);
if(ans5<=0){
    test=0;
}

sum=sum*test;

console.log(sum);
if (sum>=5 || sum<=7)
    text='A shy person and he have a dog\n';
    else {if(sum>7 || sum<=12) 
        text='A person who loves calm and camping trips\n';
        else {if (sum>12 || sum<=17)
            text='A person who loves music and movies\n';
            else {if(sum>17)
                text='Noisy person,He has many friends\n'
                else text='one or more from the qustion in unanswered';
            }
        }
    }



console.log(text);