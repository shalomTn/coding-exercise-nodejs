const express = require('express')
/**  
 * Why use express?
 * express is a minimal and flexible node js web app frwamework that is robust:
 * 1. setting up middles wares
 * 2. reouting table for https methso
 * 
 * How to install?
 * use npm install express --save
 * modules that should be installed  with express:
 * 1. body-parser: handles json raw text url encoded form data
 * 2. cookie-parser: populates req.ocokies with an object keyed by the cookie names
 * 3. mutler: handles mutlipart form data
 *
 * How to run the file?
 * 1. command-line> node server.js
 * 2. open address in the browser
 * 
 */
const app= express();
const cors = require('cors');
const path = require("path");
var bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());
var jsonParser = bodyParser.json();
app.get('/', function(req, res){//get is a callback function with parameters request and reponse
    //res.send('Hello world');// this prints it to the screen as a resposnse
    res.sendFile(path.join(__dirname, '/index_node.html'))
})
app.post('/add',jsonParser, function(req, res){//this responds a POST request for the homepage
    let expression = parseInt(req.body.a)+parseInt(req.body.b)
    res.send(JSON.stringify({ans:expression}));
})
app.post('/sub',jsonParser, function(req, res){//this responds a POST request for the homepage
    let expression = parseInt(req.body.a)-parseInt(req.body.b)
    res.send(JSON.stringify({ans:expression}));
})
app.post('/mul',jsonParser, function(req, res){//this responds a POST request for the homepage
    let expression = parseInt(req.body.a)*parseInt(req.body.b)
    res.send(JSON.stringify({ans:expression}));
})
app.post('/div',jsonParser, function(req, res){//this responds a POST request for the homepage
    let expression = parseInt(req.body.a)/parseInt(req.body.b)
    res.send(JSON.stringify({ans:expression}));
})
app.post('/div',jsonParser, function(req, res){//this responds a POST request for the homepage
    let expression = req.body.a+req.body.s+req.body.b
    res.send(JSON.stringify({ans:expression}));
})
app.listen(3000, ()=>console.log("server is listening"))
//we can also create a server on a particular port and access its address using .address().address/.port
//var server=app.listen(8081, fucntion(){//whatever yo uwant done})
