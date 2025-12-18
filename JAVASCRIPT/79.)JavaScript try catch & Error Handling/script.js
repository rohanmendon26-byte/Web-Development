let a=prompt("Enter first number")

let b=prompt("Enter second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}

let sum=parseInt(a)+parseInt(b)




try{
    console.log("The sum is:"+sum*x);
}
catch(error){
    console.log("Error aa gaya bhai")
}
finally{
    console.log("Files are being closed and db connection is closed")
}


//finally--> why we give finally?instead we can give console.log after the catch statement but the console.log after the catch will not execute because only finally can be executed if try and catch return a value