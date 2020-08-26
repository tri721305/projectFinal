var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./db');
var userRoute = require('./routes/user.route');


// port

var port = 4000;

var listUsers=[]
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res){
  res.render('index.pug', {
    name: 'DHMTri'
  })
});

app.use('/users',userRoute);

app.listen(port, ()=> {
  console.log('Example app is listening at port' + port )
});




