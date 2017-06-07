var express = require("express"),
    app = express();

var stackexchange = require('stackexchange');

var options = { version: 2.2 };
var context = new stackexchange(options);

var filter = {
  key: 'a8EnTxQopPrufO31sh6aKg((',
  pagesize: 50,
  tagged: 'node.js',
  sort: 'activity',
  order: 'asc'
};

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get("/sayHello", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});

app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();
