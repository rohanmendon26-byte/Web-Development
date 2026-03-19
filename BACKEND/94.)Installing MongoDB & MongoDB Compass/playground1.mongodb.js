

// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {
    "name": "Python",
    "Price": 15000,
    "Instructor": "Rahul"
  },
  {
    "name": "C++",
    "Price": 18000,
    "Instructor": "Amit"
  },
  {
    "name": "JavaScript",
    "Price": 17000,
    "Instructor": "Sneha"
  },
  {
    "name": "Data Structures",
    "Price": 22000,
    "Instructor": "Vikram"
  },
  {
    "name": "Machine Learning",
    "Price": 30000,
    "Instructor": "Priya"
  },
  {
    "name": "Web Development",
    "Price": 25000,
    "Instructor": "Karan"
  },
  {
    "name": "Cyber Security",
    "Price": 27000,
    "Instructor": "Anjali"
  },
  {
    "name": "Cloud Computing",
    "Price": 28000,
    "Instructor": "Rohit"
  },
  {
    "name": "Android Development",
    "Price": 24000,
    "Instructor": "Neha"
  },
  {
    "name": "AI Fundamentals",
    "Price": 32000,
    "Instructor": "Arjun"
  }
]);


// Print a message to the output window.
console.log("Done inserting data");

