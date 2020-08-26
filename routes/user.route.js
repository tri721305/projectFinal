var express = require('express')
var shortid = require('shortid')


var db = require('../db')
var controller = require('../controller/user.controller')
var router = express.Router()

router.get('/', controller.index)
  
  
  router.get('/search', controller.search)
  
  router.get('/create', controller.create )
  
  router.post('/create', controller.createPost)
  
  router.get('/:id', controller.id)

module.exports = router