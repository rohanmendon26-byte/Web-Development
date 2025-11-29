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


document.body.firstElementChild
// output
//<div class="container">…</div>

document.body.firstElementChild.childNodes
//output
//NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

document.body.firstElementChild.children
//output
//HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
document.body.firstElementChild.children[0]
document.body.firstElementChild.children[1]
document.body.firstElementChild.children[2]

document.body.firstElementChild.children[3].nextElementSibling
//output
//<div class=​"box" style=​"color:​ red;​">​Box5​</div>​

document.body.children
//output
//HTMLCollection(3) [div.container, table, script]

document.body.children[1].nextElementSibling
//output
//<script src="script.js"></script>




