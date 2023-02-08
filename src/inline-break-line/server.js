var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/question.html');
});
app.get('/way1', function (req, res) {
    res.sendFile(__dirname + '/way-1.html');
});
app.get('/way2', function (req, res) {
    res.sendFile(__dirname + '/way-2.html');
});
app.get('/way3', function (req, res) {
    res.sendFile(__dirname + '/way-3.html');
});
app.get('/way4', function (req, res) {
    res.sendFile(__dirname + '/way-4.html');
});
app.get('/s', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.css', function (req, res) {
    res.sendFile(__dirname + '/index.css');
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
