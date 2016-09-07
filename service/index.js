var express = require('express');
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/JPMPortfolioManagement';

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/stocks', function(req,res){

    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {

            console.log('Connection established to', url);

            // do some work here with the database.
            var cursor = db.collection('stocks').find({}, {_id :0, name:1, currentPrice:1});

            cursor.toArray(function(err, docs) {
                console.log(docs);
                res.send(docs);
            })

            //Close connection
            db.close();
        }
    });
});

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)

})