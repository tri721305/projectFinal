var express = require('express')
var app = express()
var bodyParser = require('body-parser')
// port
var port = 4080

var listUsers = [
  {id: 1, name: 'Tri'},
  {id: 2, name: 'Truck'},
  {id: 3, name: 'Kimteahea'}
]
// set view engine using pug, 

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res){
  res.render('index.pug', {
    name: 'DHMTri'
  })
})

app.get('/users', function(req, res){
  res.render('users/index.pug',{
    listUsers: listUsers
  })
})

app.get('/users/search', function(req,res){
  var q = req.query.q;
  var temp = listUsers.filter(function(listUsers){
    return listUsers.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
  })
  res.render('users/index',{
    listUsers : temp
  })
})

app.get('/users/create', function(req, res){
  res.render('users/create')
})

app.post('/users/create', function(req, res){
  console.log(req.body)
  listUsers.push(req.body)
  res.redirect('/users')
})

app.listen(port, ()=> {
  console.log('Example app is listening at port' + port )
})