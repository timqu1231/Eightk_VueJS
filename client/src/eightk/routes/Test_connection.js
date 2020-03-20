var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/eightk_db/eightk_collection';
MongoClient.connect(url, function(err, db) {
    console.log("Connnnnnnect");
    db.close();
    console.log("Closssssse");
});

//var mongoose = require('mon')