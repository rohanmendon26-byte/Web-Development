//npm init -y --> a shortcut command in Node.js / npm that automatically creates a package.json file with default values.

//npm i express jsonwebtoken dotenv --> This command installs three npm packages into your project and adds them to your package.json under dependencies.

//npm install --global nodemon-->This command installs nodemon globally on your system.Automatically restarts your Node.js server whenever you save changes.

//node main.js --> This command runs your Node.js file main.js using nodemon instead of normal node.

const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});