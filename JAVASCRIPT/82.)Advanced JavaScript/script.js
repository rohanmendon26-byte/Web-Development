async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              resolve(45)
        },1000);
    })
}

//Immediate involve expression
(async function main(){
    let a= await sleep()
    console.log(a);
    let b=await sleep()
    console.log(b);
    
})()

// ************* Destructuring *****************
//                  ex-1
// let [x,y]=[1,5]
// console.log(x,y);

//                   ex-2
let [x,y,...rest]=[1,5,7,8,9,10]
console.log(x,y,rest);

//...rest collects all remaining values into an array
/*  x gets the first value → 1
   y gets the second value → 5
   ...rest collects all remaining values into an array
*/

//                   ex-3
// let obj={
//     a:1,
//     b:2,
//     c:3
// }

// let {a,b}=obj
// console.log({a,b})

//                  ex-4
function sum(a,b,c)
{
    return a+b+c;
}

let arr=[1,2,3]
// console.log(sum(arr[0],arr[1],arr[2]))
console.log(sum(...arr));
