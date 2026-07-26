import fs from "fs/promises";

export const submitAction =async(e)=>{
    "use server"
    console.log(e.get("name"),e.get("email"))
    let a=await fs.writeFile("harry.txt",`Name is ${e.get("name")} and email is ${e.get("email")}`)
    console.log(a)
  }