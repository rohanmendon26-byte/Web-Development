// ************************* Events *************************************

var button=document.getElementById('button').addEventListener('click',buttonClick);

function buttonClick(e)
{
    console.log("hello");
    // document.getElementById('header-title').textContent='Changed';
    // document.querySelector('#main').style.backgroundColor='#f4f4f4';
    // console.log(e);

    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // var output=document.getElementById('output');
    // output.innerHTML='<h3>'+e.target.id+'</h3>';

    // console.log(e.type);

    // console.log(e.clientX);  /* we can get position of mouse(these are all for windows) */ 
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);   /* these are all for elements */

    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
}

var button=document.getElementById('button');
var box=document.getElementById('box');
// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

// box.addEventListener('mouseenter',runEvent);   /* For the body */
// box.addEventListener('mouseleave',runEvent);

// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);    /* For the element */

// box.addEventListener('mousemove',runEvent);

var itemInput=document.querySelector('input[type="text"]');
var form =document.querySelector('form');
// var select=document.querySelector('select');

itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('keypress',runEvent);

// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);

// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);

// itemInput.addEventListener('input',runEvent);
// select.addEventListener('change',runEvent);
// form.addEventListener('submit',runEvent);





function runEvent(e)
{
    console.log('EVENT TYPE:'+e.type);
    console.log(e.target.value);
    // e.preventDefault();
    // document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>';
    // output.innerHTML='<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

    // box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
    //  document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
}

