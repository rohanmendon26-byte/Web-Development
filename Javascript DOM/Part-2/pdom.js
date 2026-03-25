//  ******************************** Traversing-DOM ****************************************

var itemList=document.querySelector('#items');
// console.log(itemList);


// Parent Node -->

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);


// Parent Element -->

// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);


// Child Nodes -->

// console.log(itemList.childNodes);  /* This is not useful . And it requires line space and 
// elements should be one line run otherwise output is text */


// Children -->

// console.log(itemList.children); 
// console.log(itemList.children[1]);  
// itemList.children[1].style.backgroundColor='yellow';


// FirstChild -->

// console.log(itemList.firstChild); /* This also useless same as childnodes it requires 
// line space and all */


// firstElementChild -->

// console.log(itemList.firstElementChild); 
// itemList.firstElementChild.textContent='Hello'; /* It acesses the first element of the list */


// lastElementChild -->

// console.log(itemList.lastElementChild); 
// itemList.lastElementChild.textContent='Hello'; /* It acesses the last element of the list */


// nextSibling -->

// console.log(itemList.nextSibling); /* This also give output text if you do not write in 0ne line */


// nextElementSibling -->

// console.log(itemList.nextElementSibling); /* You should have a next element to run this code 
// other wise it will be null  so i added span*/


// previousElementSibling -->

// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='red';


// ****************************** createElement ********************************
 
// Create a div -->
var newDiv=document.createElement('div');

// Add class -->
newDiv.className='hello';

// Add id -->
newDiv.id='hello1';

// Add attribute -->
newDiv.setAttribute('title','Hello Div');

// Create text node -->
var newDivText=document.createTextNode('Hello world');

//Add text to div -->
newDiv.appendChild(newDivText); /* if you want to add the text to the newDiv */

// if you want to place this html code then

var container=document.querySelector('header .container')
var h1=document.querySelector('header h1');

container.insertBefore(newDiv,h1);

/* Syntax : container.insertBefore(element to be inserted,element you want to place before that) */

console.log(newDiv);














