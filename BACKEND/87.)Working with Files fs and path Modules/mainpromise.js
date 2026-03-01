import fs from "fs/promises"

let a=await fs.readFile("Rohan.txt")
let b=await fs.appendFile("Rohan.txt","\n\n\n\nThis is amazing promise")
console.log(a.toString(),b);
