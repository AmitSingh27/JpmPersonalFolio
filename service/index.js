var app = require('express')(); // Require Express module
var http = require('http').Server(app); // Http server
var bodyParser = require("body-parser"); // Require Body parser module
var mongo = require('mongoskin'); // Require mongoskin module
var db = mongo.db("mongodb://localhost:27017/JPMPortfolioManagement", {native_parser: true}); // Connection MongoDB book collection DB
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // Body parser use JSON data
app.use(function (req, res, next) {
    req.db = db;
    res.header('Access-Control-Allow-Origin', '*'); // We can access from anywhere
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});
app.listen(3000);
console.log("server starts ...");

app.get('/:collectionName', function (req, res) {
    var obj = req.params['collectionName'];
    var ret = {};
    db.collection(obj).find().toArray(function (err, data) {
        if (data.length != 0) {
            ret['error'] = 0;
            ret['data'] = data;
        } else {
            ret['error'] = 1;
            ret['data'] = err;
        }
        res.json(ret);
    });
});

app.post('/:collectionName', function (req, res) {
    var obj = req.params['collectionName'];
    var ret = {};
    db.collection(obj).insert(req.body, function (err, data) {
        if (!err) {
            ret['error'] = 0;
        } else {
            ret['error'] = 1;
            ret['data'] = err;
        }
        res.json(ret);
    });
});

app.put('/:collectionName/:key/:value', function (req, res) {
    var obj = req.params['collectionName'];
    var keyName = req.params['key'];
    var value = req.params['value'];
    var query = {};
    query[keyName] = value;
    var ret = {};
    db.collection(obj).update(query, {$set: req.body}, function (err, data) {
        if (!err) {
            ret['error'] = 0;
        } else {
            ret['error'] = 1;
            ret['data'] = err;
        }
        res.json(ret);
    });
});

app.delete('/:collectionName/:key/:value', function (req, res) {
    var obj = req.params['collectionName'];
    var keyName = req.params['key'];
    var value = req.params['value'];
    var query = {};
    query[keyName] = value;
    var ret = {};
    db.collection(obj).remove(query, function (err, data) {
        if (!err) {
            ret['error'] = 0;
        } else {
            ret['error'] = 1;
            ret['data'] = err;
        }
        res.json(ret);
    });
});