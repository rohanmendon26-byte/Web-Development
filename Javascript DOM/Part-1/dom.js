// ************************ EXAMINE THE DOCUMENT OBJECT ****************************

// console.dir(document); --> if you want to check what all methods can be used in document
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
// document.all[10].textContent="chatesh" --> you can also change the content using this
// document.title='RohanMendon'; --> if you want to change the title


// ****************************** GETELEMENTNYID ********************************

// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent='jandubomb';
// headerTitle.innerText='piyo bisleri';
// ------------------------------------------------------------------------------------------------------------------------
// Difference Between innerText and textContent is that if i go to h1 and in the place of Item lister 
// i will change the text by adding 123 inside the span element and style it with display none.
// console.log(headerTitle.textContent); -->  then text content shows all the content in the console like itemlister 123 
// console.log(headerTitle.innerText); --> innerText it will show as it is content in console like itemlister
// -------------------------------------------------------------------------------------------------------------------------
 
// headerTitle.innerHTML='<h3>Hello Bailog</h3>';
// headerTitle.style.borderBottom='3px solid black';

// ***************************** GETELEMENTSBYCLASSNAME ***************************

var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='good';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='yellow';

// items.style.backgroundColor='#f4f4f4'; --> This gives error becuse it is collection of so we should loop through it using for loop.

//  for( var i=0;i<items.length;i++)
//  {
//     items[i].style.backgroundColor='#f4f4f4';
//  }


// ********************************* GETELEMENTSBYTAGNAME *******************************

// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='good';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';

// for( var i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor='#f4f4f4';
// }



//  *********************************** QUERY SELECTOR ************************************

// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input=document.querySelector('input');
// input.value="hello world";

// var submit=document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var item=document.querySelector('.list-group-item'); 
// item.style.color='red';

// var lastitem=document.querySelector('.list-group-item:last-child');
// lastitem.style.color='blue';

// var nthitem=document.querySelector('.list-group-item:nth-child(2)');
// nthitem.style.color='coral';


// ******************************** QUERY-SELECTOR-ALL *********************************


// var titles =document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent='Hello';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='#f4f4f4';
//     even[i].style.backgroundColor='#ccc';
// }

