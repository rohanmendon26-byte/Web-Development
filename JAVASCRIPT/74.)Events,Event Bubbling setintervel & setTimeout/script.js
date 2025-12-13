let button=document.getElementById("btn")

button.addEventListener("click",()=>{
    // alert("i was clicked")
    document.querySelector(".box").innerHTML="<b>Yayy you were clicked</b> Enjoy your click"
})

//dblclick

button.addEventListener("contextmenu",()=>{
   alert("Don't hack us by right click Please")  
})

//when you click right click


button.addEventListener("keydown",(e)=>{
   console.log(e)
})

//open console and click the change content and then click any alphabet in the keyboard

button.addEventListener("keydown",(e)=>{
   console.log(e.key)
})






// ADDEVENTLISTENER--> it is used to assign multiple handlers to an event.