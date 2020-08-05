var express = require('express')
var app = express()
// port
var port = 4080

app.get('/', function(req, res){
  res.send('Hello world, I am Tri<a href = "/users">Click to go to Todo list users</a>')
})

app.get('/users', function(req, res){
  res.send('Todo list users')
})

app.listen(port, ()=> {
  console.log('Example app is listening at port' + port )
})