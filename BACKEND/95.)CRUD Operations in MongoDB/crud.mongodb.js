// ********** CRUD OPERATIONS ******************
use("CrudDb")
console.log(db); //CrudDb

//**********   CREATE COLLECTION **************

db.createCollection("courses")

//***************** INSERTING **************

db.courses.insertOne({
    name:"Harry free web dev course",
    price:0,
    assignments:12,
    projects:45
})

db.courses.insertMany([{
    "name": "Complete Python Bootcamp",
    "price": 5000,
    "assignments": 20,
    "projects": 30
  },
  {
    "name": "Java Masterclass",
    "price": 8000,
    "assignments": 18,
    "projects": 25
  },
  {
    "name": "C++ for Beginners",
    "price": 4000,
    "assignments": 15,
    "projects": 20
  },
  {
    "name": "Full Stack Web Dev",
    "price": 12000,
    "assignments": 25,
    "projects": 50
  },
  {
    "name": "Data Structures & Algorithms",
    "price": 10000,
    "assignments": 30,
    "projects": 15
  },
  {
    "name": "Machine Learning A-Z",
    "price": 15000,
    "assignments": 22,
    "projects": 35
  },
  {
    "name": "Cyber Security Basics",
    "price": 7000,
    "assignments": 10,
    "projects": 18
  },
  {
    "name": "Android App Development",
    "price": 9000,
    "assignments": 16,
    "projects": 28
  },
  {
    "name": "Cloud Computing Fundamentals",
    "price": 11000,
    "assignments": 14,
    "projects": 22
  }])

//***************** READING *******************

//   let a=db.courses.find({price:0});
//   console.log(a);
//   console.log(a.count());
//   console.log(a.toArray());

let b=db.courses.findOne({price:0})
console.log(b);


//****************** UPDATING *********************

db.courses.updateOne({price:0},{$set:{price:100}})
db.courses.updateMany({price:0},{$set:{price:1000}})


//******************* DELETING ********************

db.courses.deleteOne({price:100})
db.courses.deleteMany({price:1000})

// https://www.mongodb.com/docs/manual/reference/operator/query/