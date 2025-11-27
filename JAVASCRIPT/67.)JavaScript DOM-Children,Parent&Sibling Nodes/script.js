console.log("hello world")
document.body

//ChildNodes--> Elements that are direct children. for example head and body are children of html

document.body.childNodes
document.body.childNodes[0]
document.body.childNodes[1]
document.body.childNodes[1].childNodes

let cont=document.body.childNodes[1]
cont.firstChild
cont.lastChild
cont.firstElementChild
cont.lastElementChild
cont.lastElementChild.style.color="red"
cont.lastElementChild.parentElement


// PreviousElementSibling-->Previous sibling which is an element
//nextElementSibling-->next sibling
//firstElementChild-->first element child
//lastElementChild --> Last Element child