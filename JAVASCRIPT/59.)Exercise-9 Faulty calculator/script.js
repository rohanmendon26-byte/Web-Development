let random =Math.random()
let a=prompt("Enter the first number ")
let b=prompt("Enter the second number ")
let c=prompt("Enter the operation ")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"*"
}
console.log(random)
if(random>0.1){
    // perform correct calculation
    console.log(`The result is ${a} ${c} ${b} `)
    alert(`The result is ${eval(`${a} ${c} ${b}`)} `)
}

else{
    // perform wrong operation
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)} `)
}

