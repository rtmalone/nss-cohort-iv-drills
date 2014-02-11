'use strict';

var Stock = require('../lib/stock');

exports.create = function(req, res){
  var stock = new Stock(req.params.symbol);
  console.log(stock);
  var randomNum = Math.floor(Math.random() * (250-50+1) + 50);
  console.log(randomNum);
  stock.quote = randomNum;
  res.jsonp({quotes:stock});
};
