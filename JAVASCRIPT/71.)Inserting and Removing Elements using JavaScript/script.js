document.querySelector('.box')
//output--> <div class="box">Hey I am a box</div>


document.querySelector('.box').innerHTML
//output-->'Hey I am a box'

document.querySelector('.container').innerHTML
//output-->\n        <div class="box">Hey I am a box</div>\n    '

document.querySelector('.box').innerText
//output-->'Hey I am a box'

document.querySelector('.container').innerText
//output-->'Hey I am a box'

document.querySelector('.container').outerHTML
//output-->'<div class="container">\n        <div class="box">Hey I am a box</div>\n    </div>'

document.querySelector('.container').tagName
//output-->'DIV'

document.querySelector('.container').nodeName
//output-->'DIV'

document.querySelector('.container').textContent
//output-->'\n        Hey I am a box\n    '

document.querySelector('.container').hidden
//output--> false

document.querySelector('.container').hidden="true"
//output--> true

document.querySelector('.box').innerHTML="Rohan"
//output-->"Hey I am a box" changes to "Rohan"

document.querySelector('.box').hasAttribute("style")
//output--> false

//After adding style attribute

document.querySelector('.box').hasAttribute("style")
//output--> true

document.querySelector('.box').getAttribute("style")
//output--> 'display: flex;'

document.querySelector('.box').setAttribute("style","display:inline")
//output--> changes "display flex" to "display inline"

document.querySelector(".box").attributes
//output-->NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}

document.querySelector(".box").removeAttribute("style")
//output--> style is removed

document.designMode="on"
//output--> you can edit the website

document.querySelector(".box").dataset
//output--> DOMStringMap {createdby: 'Rohan'}

//after adding another dataset
//output--> DOMStringMap {createdby: 'Rohan', conceptby: 'Harry'}

document.querySelector(".box").remove()
//output--> removes the first element from the box

document.querySelector(".container").classList
//output--> DOMTokenList(3) ['container', 'red', 'bg-green', value: 'container red bg-green']

document.querySelector(".container").className
//output--> 'container red bg-green'

document.querySelector(".container").classList.add("Rohan")
//output--> class Rohan is added

document.querySelector(".container").classList.remove("Rohan")
//output--> class Rohan is removed

document.querySelector(".container").classList.remove("red")
//output--> class red is removed

document.querySelector(".container").classList.toggle("red")
// if there is a class red then remove it or if it is not there then add it.
