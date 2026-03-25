// ****************** String,Numbers,Boolean,null,undefined **********************

// const name= 'Rohan';
// const age=19;

// // Concatenation
// console.log('my name is '  + name + ' and i am ' + age);

// // Template String
// console.log(`my name is ${name} and i am ${age}`);


// ****************** Arrays-Variables that hold multiple values ***************

// const numbers= new Array(1,2,3,4,5);
// console.log(numbers);

// const anime=['naruto','bleach','demonslayer',10,true];
// console.log(anime);

// const anime=['naruto','bleach','demonslayer',10,true];
// anime[5]='Onepiece';  - if you want assign the value
// console.log(anime[0]); - if you want to print any one among the array
// anime.push('Mango'); - if you want to add at the end
// anime.unshift('Apple'); if you want to add at the beginning
// anime.pop(); - if you want to remove the last item from the list
// console.log(Array.isArray(anime)); - if you want to check whether it is array or not it gives you either true or false
// console.log(anime.indexOf(10)); - if you want to check the index


// ********************************* Object-Literals ****************************


// const person={

//     firstName: 'Rohan',
//     lastName: 'Mendon',
//     age:19,
//     hobbies:['coding','watching-movies','playing-cricket'],
//     address:{
//         street:'50 main st',
//         city:'boston',
//         state:'karnataka'
//     }
// }

// console.log(person);
// console.log(person.firstName,person.lastName);
// console.log(person.hobbies[1]);

// person.email='rohanmendon26@gmailcom'; - if you want to add
// console.log(person);


// ******************************* Arrays-of-objects ******************************

// const todos=[
//     {
//         id:1,
//         text:'Take out trash',
//         isCompleted:true
//     },
//     {
//         id:2,
//         text:'Meeting with Boss',
//         isCompleted:true
//     },
//     {
//         id:3,
//         text:'Dentist appt',
//         isCompleted:false
//     }

// ];

// console.log(todos);
// console.log(todos[2]);

// To convert the above array of objects to json format 

// const todoJSON=JSON.stringify(todos);
// console.log(todoJSON); ---> in json format we should send data to server

// below in For-loop

// for(let i=0;i<todos.length;i++)
// {
//     console.log(todos[i].text);
// }

// for(let lodu of todos)
// {
//     console.log(lodu);
// }

//forEach- Which Just Loops Through Them.
//map- Which allow us to create a new array from an array
//filter -  Which allow us to create a new array Based On the Condition

//forEach

// todos.forEach(function(todo){
//     console.log(todo.text);
// });

//map

//  const todoText=todos.map(function(todo){
//     return todo.text;
// });
//  console.log(todoText);

//Filter

//  const todoCompleted=todos.filter(function(todo){
//     return todo.isCompleted===true;
// });
//  console.log(todoCompleted);

 //other Example

//   const todoCompleted=todos.filter(function(todo){
//     return todo.isCompleted===true;
// }).map(function(todo){
//     return todo.text;
// })
//  console.log(todoCompleted);





// ********************************* For-loop *********************************************

// for(let i=0;i<=10;i++)
// {
//     // console.log(i);
//     console.log(`For Loop Number:${i}`);
// }

// ********************************** While-loop ****************************************

// let i=0;
// while(i<10)
// {
//     console.log(`While Loop Number:${i}`);
//     i++;
// }


// ********************************* Conditionals ********************************

// const x='10'; 
// if(x==10)
// {
//     console.log('it is 10')
// }

// In the above example x can be number 10 or string '10' it will still print'it is 10'
// because it is double equal

// In  below example of triple equal(it is opposite of double equal it should have same datatype)

// const x=10; 
// if(x===10)
// {
//     console.log('it is 10')
// }

// const x=4; 
// if(x===10)
// {
//     console.log('it is 10')
// }
// else if(x>10) 
// {
//     console.log('x is greater than 10')
// }
// else
// {
//     console.log('X is less than 10')
// }


//In case of multiple conditions 
//ex-1

// const x=6; 
// const y=10;
// if(x>5 || y<10)
// {
//     console.log('X is greater than 5 or y is less 10 ')
// }

//in this || is used either of one should be correct to print

//ex-2
// const x=6; 
// const y=9;
// if(x>5 && y<10)
// {
//     console.log('X is greater than 5 or y is less 10 ')
// }

//In this case && is used so both of them should be correct to print


//********************** Ternary-operator(shorthand-if-statement) *********************

// const x=11;
// const color=x>10 ? 'red':'blue';
// console.log(color)

// ? - means then 
// : - means else

// ********************************** Switches ****************************************

// const x=10;
// const color=x>10 ? 'red':'blue';
// switch(color)
// {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');
//         break;
// }

// *********************************** Functions ****************************************

//ex-1
// function addNums(num1,num2)
// {
//     console.log(num1+num2);
// }
// addNums(12,24);

//ex-2
// function addNums(num1=45,num2=45)
// {
//     console.log(num1+num2);
// }
// addNums();

// ex-3
// function addNums(num1=1,num2=1)
// {
//     return num1+num2;
// }
// console.log(addNums());

// ex-4
// const addNums=(num1=1,num2=1)=>
// {
//     return num1+num2;
// }
// console.log(addNums());
//above example is if you want a arrow function(ex-4)

// ex-5 
// const addNums=(num1=2,num2=2)=> num1+num2;
// console.log(addNums());

// *********************** Object-Oriented-Programming **************************

// ex-1
// Constructor-function

// function Person(firstName,lastName,dob)
// {
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.dob=dob;
// }

// Instantiate-object

// const person1=new Person('Rohan','Mendon','5-26-2006');
// const person2=new Person('Rahul','Mendon','5-20-2003');
// console.log(person2.firstName);

// ex-2

// function Person(firstName,lastName,dob)
// {
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.dob=new Date(dob);
// }

// const person1=new Person('Rohan','Mendon','5-26-2006');
// console.log(person1.dob);
// console.log(person1.dob.getFullYear)

//ex-3

// function Person(firstName,lastName,dob)
// {
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.dob=new Date(dob);
//     this.getBirthYear=function()
//     {
//         return this.dob.getFullYear();
//     }
//     this.getFullName=function()
//     {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1=new Person('Rohan','Mendon','5-26-2006');
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// ex-4 (using prototype)

// function Person(firstName,lastName,dob)
// {
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.dob=new Date(dob);
//     Person.prototype.getFullName=function()
//     {
//          return `${this.firstName} ${this.lastName}`;
//     }
//     Person.prototype.getBirthYear=function()
//     {
//         return this.dob.getFullYear();
//     }
// }

// const person1=new Person('Rohan','Mendon','5-26-2006');
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

//ex-5(using class)

//class

// class Person{
//     constructor(firstName,lastName,dob)
//     {
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.dob=new Date(dob);
//     }

//     getBirthYear()
//     {
//         return  this.dob.getFullYear();
//     }

//     getFullName()
//     {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1=new Person('Rohan','Mendon','5-26-2006');
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());


// ********************************* DOM ***********************************************

// Single-Element-Selector

//ex-1
// console.log(document.getElementById('my-form'));

//ex-2(you can do in this way also)
// const form=document.getElementById('my-form');
// console.log(form);

//ex-3
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// queryselector can take any type such as class,tags,id etc.
// console.log(document.querySelector('h1'));

// Multiple-Element-Selector

//ex-1
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

//ex-2

// const items=document.querySelectorAll('.item');
// items.forEach((item) => console.log(item))

// *************************** Manipulating-Dom ***********************************

//ex-1
const ul= document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent='Hello guys';
// ul.children[1].innerText='Virat';
// ul.lastElementChild.innerHTML='<h1>Monkey D Luffy</h1>';

//ex-2
// const btn=document.querySelector('.btn');
// btn.style.background='red'


// ************** Events(like when you cilck it will change like that) ******************

// const btn=document.querySelector('.btn');
// btn.addEventListener('click',(e)=>
// btn.addEventListener('mouseover',(e)=>
// btn.addEventListener('mouseout',(e)=>
// {
    // e.preventDefault(); /* -> this is to prevent that below flash on and off of click */
    // console.log('click'); /* -> if you click submit in terminal click will flash and go. */
    // console.log(e);
    // console.log(e.target);/* -> if you want the html code */
    // console.log(e.target.className); /* -> it can be anything id,class,etc.*/
    // document.querySelector('#my-form').style.background='#ccc';
    // document.querySelector('body').classList.add('bg-dark');
    // document.querySelector('.items').lastElementChild.innerHTML='<h1>Roronoa Zoro</h1>';
// }
// )


// ************************ Little-Application **********************************

const myForm =document.querySelector('#my-form');
const nameInput =document.querySelector('#name');
const emailInput =document.querySelector('#email');
const msg =document.querySelector('.msg');
const userList =document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e)
{
    e.preventDefault();
    console.log(nameInput.value);
    if(nameInput.value==='' || emailInput.value ==='')
    {
        msg.classList.add('error')
        msg.innerHTML='Please enter all fields';
        setTimeout(() => 
        {
            msg.remove();
        }, 3000);
        // alert('Please enter fields');
    }
    else
    {
        console.log('sucess');
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //Clear-Fields

        nameInput.value='';
        emailInput.value='';

        
    }
}























