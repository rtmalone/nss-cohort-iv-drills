'use strict';

var express = require('express');
var home = require('./routes/home');
var quotes = require('./routes/quotes');
var app = express();

app.set('port', process.env.PORT || 4000);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.get('/', home.index);
app.get('/quotes/:symbol', quotes.create);

var server = require('http').createServer(app);
server.listen(app.get('port'), function(){
  console.log('Node server listening. Port: ' + app.get('port'));
});

