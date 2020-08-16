var lowdb = require('lowdb')
var fileSync = require('lowdb/adapters/FileSync')
var adapter = new fileSync('db.json')
var db = lowdb(adapter)
db.defaults({listUsers: []}).write()

module.exports = db