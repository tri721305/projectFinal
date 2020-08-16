var express = require('express')
var shortid = require('shortid')


var db = require('../db')
var router = express.Router()

router.get('/', function(req, res){
    res.render('users/index.pug',{
      listUsers: db.get('listUsers').value()
    })
  })
  
  
  router.get('/search', function(req,res){
    // var q = req.query.q;
    // // var listUsers = db.get('listUsers')
    // var temp = db.get('listUsers').value().filter(function(x){
    //   return x.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    // })
    // res.render('users/index',{
    //   listUsers : temp
    // })
    var item = db.get('listUsers').value()
    console.log(item)
    console.log(typeof(item))
    var q = req.query.inputState;
    var temp=item.filter(function(users){
      return users.name.indexOf(q) !==-1
    })
    res.render('users/index',{
      listUsers : temp
    })
    
  })
  
  router.get('/create', function(req, res){
    res.render('users/create')
  })
  
  router.post('/create', function(req, res){
    req.body.id = shortid.generate();
    console.log(req.body)
    db.get('listUsers').push(req.body).write()
    res.redirect('/users')
  })
  
  router.get('/:id', function(req, res){
    var id = req.params.id;
    console.log(id)
    console.log(typeof(id))
    var listUsers = db.get('listUsers').find({id:id}).value()
    console.log(listUsers)
    res.render('users/view',{
      listUsers:listUsers
    })
  })

module.exports = router