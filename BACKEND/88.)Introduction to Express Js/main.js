// npm i express ->  is used to install the Express.js framework in your Node.js project.

const express = require('express')
const app = express()
const port = 3000

// app.use(express.static('public'))

// app.use()--->
// Used to add middleware in Express.js.
// express.static()-->
// Built-in middleware that serves static files.
// 'public'--->
// The folder name where your static files are stored.


//app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.get('/blog', (req, res) => {
  res.send('Hello blogi!')
})

app.get('/blog/:slug', (req, res) => {
  res.send(`Hello ${req.params.slug}`)
  console.log(req.params);
  console.log(req.query);
  
})

// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('JavaScript!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//   res.send('Python!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  
})
