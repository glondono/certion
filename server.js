var express = require('express');
var compression = require('compression');

var app = express();


app.set('port', process.env.PORT || 3001);
app.use(compression());
app.use('/',express.static(__dirname));

//Start server
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port) + " " + process.env.NODE_ENV;
});