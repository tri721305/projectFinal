var express = require('express')
var app = express()
// port
var port = 4080

// set view engine using pug, 

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', function(req, res){
  res.render('index.pug', {
    name: 'DHMTri'
  })
})

app.get('/users', function(req, res){
  res.render('users/index.pug',{
    listUsers: [
      {id: 1, name: 'Tri'},
      {id: 2, name: 'Truck'}
    ]
  })
})

app.listen(port, ()=> {
  console.log('Example app is listening at port' + port )
})