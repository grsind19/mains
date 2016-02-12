var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})
app.get('/index.html', function(req, res) {
     res.sendFile( __dirname + "/" + "index.html" );
})
var server =app.listen(process.env.PORT, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
