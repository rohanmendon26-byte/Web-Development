console.log("Rohan")
 
// ******************** getElementByClassName ***********************

// let boxes=document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor="red"

// ************************ getElementById ****************************

// let boxes=document.getElementById("red")
// boxes.style.backgroundColor="red"

// ***********************  querySelector ****************************

// --> It selects only one element
// document.querySelector(".box").style.backgroundColor="green"

//************************  querySelectorAll ***********************

// console.log(document.querySelectorAll(".box"))

// --> To access this you should use foreach

// document.querySelectorAll(".box").forEach(e =>{
//     e.style.backgroundColor="green"
// })


// ********************* getElementByTagname *********************

console.log(document.getElementsByTagName("div"))

// ************************* matches **********************************
e=document.getElementsByTagName("div")
/* Output--> HTMLCollection(7) [div.container, div.box, div.box, div#red.box, div.box, div.box, div.box, red: div#red.box]
e[3].matches("#red")
true                                        */


// ***************************** closest , Contains ****************