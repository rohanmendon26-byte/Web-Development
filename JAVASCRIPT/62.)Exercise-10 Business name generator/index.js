// adj1="Crazy";
// adj2="Amazing";
// adj3="Fire"

// shp1="Engine";
// shp2="Foods";
// shp1="Garments";

// aw1="Bros";
// aw2="Limited";
// aw3="Hub";

// a=Crazy;
// if()


let rand=Math.random();
let first,second,third;

if(rand<0.33){
    first="Crazy";
}
else if(rand<0.66 && rand>=0.33)
{
    first="Amazing";
}
else{
    first="Fire";
}

rand=Math.random();
if(rand<0.33){
    second="Engine";
}
else if(rand<0.66 && rand>=0.33)
{
    second="Foods";
}
else{
    second="Garments";
}

rand=Math.random();
if(rand<0.33){
    third="Bros";
}
else if(rand<0.66 && rand>=0.33)
{
    third="Limited";
}
else{
    third="Hub";
}

console.log(first+" "+second+" "+third)

