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