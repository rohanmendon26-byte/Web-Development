const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require('./models/Employee');
const port = 3000

mongoose.connect('mongodb://localhost:27017/company')

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' });
})

app.get('/generate',async (req, res) => {
  //delete the contents
  await Employee.deleteMany();

  //Generate Random Data
  let randomCity=["Billaspur","Moradabad","Mysore","Kolkata"]
  let randomLang=["Python","C++","Java","JavaScript"]
  let randomName=["Rohan","Nandan","Manoj","Pranav"]

  
  const getRandom=(arr)=>{
    let rno=Math.floor(Math.random() *(arr.length-1))
    return arr[rno];
  }

  for (let index = 0; index < 10; index++) {
    let e =await Employee.create({
      name: getRandom(randomName),
      salary: Math.floor(Math.random() *22000), 
      language: getRandom(randomLang),
      city: getRandom(randomCity),
      isManager: (Math.random()>0.5)>0 ?true:false
    })
  }
    
res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
