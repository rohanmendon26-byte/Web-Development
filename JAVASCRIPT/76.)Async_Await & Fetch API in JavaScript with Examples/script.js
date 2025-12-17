// async function getData(){
//     //simulate getting data from server
//     return new Promise((resolve,promise)=>{
//         setTimeout(()=>{
//             resolve(455)
//         },3500);
//     })
// }

async function getData(){
    //simulate getting data from server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data) 
    }


async function main(){
    console.log("Loading modules")
    
    console.log("Do something else")
    
    console.log("Load data")
    let data=await getData()
    
    console.log(data);
    
    console.log("process data")
    
    console.log("task 2")
}

main()
// data.then((v)=>{
//     console.log(data);
    
//     console.log("process data")
    
//     console.log("task 2")
// })



// settle--> it means resolve or reject

// resolve--> it means promise has settled successfully
// reject--> it means promise has not settled successfully