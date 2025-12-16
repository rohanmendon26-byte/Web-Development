console.log("Rohan is a Hacker")
console.log("Harry is a Hecker")

setTimeout(()=>{
    console.log("I am inside settimeout")
},0);

setTimeout(()=>{
    console.log("I am inside settimeout 2")
},0);

console.log("The End")


const fn=()=>{
    console.log("nothing")
}


const callback=(arg)=>{
    console.log(arg)
    fn()
}

const loadScript=(src,callback)=>{
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("Harry")
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)