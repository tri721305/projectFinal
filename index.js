var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var lowdb = require('lowdb')
var fileSync = require('lowdb/adapters/FileSync')
var shortid = require('shortid')
//
var adapter = new fileSync('db.json')
var db = lowdb(adapter)
db.defaults({listUsers: []}).write()
// port
var port = 4080
//
//
// var listUsers = [
//   {id: 1, name: 'Tri'},
//   {id: 2, name: 'Truck'},
//   {id: 3, name: 'Kimteahea'}
// ]
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
    listUsers: db.get('listUsers').value()
  })
})


app.get('/users/search', function(req,res){
  var q = req.query.q;
  // var listUsers = db.get('listUsers')
  var temp = db.get('listUsers').value().filter(function(x){
    return x.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
  })
  res.render('users/index',{
    listUsers : temp
  })
})

app.get('/users/create', function(req, res){
  res.render('users/create')
})

app.post('/users/create', function(req, res){
  req.body.id = shortid.generate();
  console.log(req.body)
  db.get('listUsers').push(req.body).write()
  res.redirect('/users')
})

app.get('/users/:id', function(req, res){
  var id = req.params.id;
  console.log(id)
  console.log(typeof(id))
  var listUsers = db.get('listUsers').find({id:id}).value()
  console.log(listUsers)
  res.render('users/view',{
    listUsers:listUsers
  })
})
app.listen(port, ()=> {
  console.log('Example app is listening at port' + port )
})