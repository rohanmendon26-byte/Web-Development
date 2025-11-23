let a=[1,93,5,6,88]

// for(let i=0;i<a.length;i++)
// {
//     const element=a[i];
//     console.log(element);
// }

//  ********************** forEach **************************
// a.forEach((value,i,arr)=>
// {
//     console.log(value,i,arr);
// })

// ********************** forin ********************************
let obj={
    a:1,b:2,c:3
}
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    const element = obj[key];
    console.log(key,element)      
}

// ************************** for-of *******************************
for (const value of a) {
    console.log(value)
}

