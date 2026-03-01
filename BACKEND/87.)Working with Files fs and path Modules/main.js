const fs=require("fs")
// console.log(fs);

console.log('Starting');
// fs.writeFileSync("Rohan.txt","Rohan is a good boy")
fs.writeFile("Rohan2.txt","Rohan is a good boy",()=>{
    console.log('done');
    fs.readFile("Rohan2.txt",(error,data)=>{
        console.log(error,data.toString());
        
    })
    
})

fs.appendFile("Rohan.txt"," Anvithsa",(e,d)=>{
    console.log(d);
    
})

console.log('Ending');
