var express = require('express');
var app = express();
var path = require('path');

var __projectRoot = __dirname ;

app.use(express.static(__projectRoot));
app.get('/', function (req, res) {
  res.sendFile(path.join(__projectRoot + '/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
