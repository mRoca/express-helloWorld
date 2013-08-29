var express = require('express');


var app = express();

app.get('/', function(req, res){
    res.send('Hello you! <a href="hello">Click here</a>');
});

app.get('/hello', function(req, res){
    res.send('Hello World <a href="hello.txt">Click here</a>');
});

app.get('/hello.txt', function(req, res){
    var body = 'Hello World';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.end(body);
});

app.listen(3000);
console.log('Listening on port 3000');