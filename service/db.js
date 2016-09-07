//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/JPMPortfolioManagement';

function getStocks()
{
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {

            console.log('Connection established to', url);

            // do some work here with the database.
            var cursor = db.collection('stocks').find({}, {_id :0, name:1, currentPrice:1});

            cursor.toArray(function(err, docs) {
                console.log(docs);
                return docs;
            })

            //Close connection
            db.close();
        }
    });
}

