// Require these npm packages
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
/* var db = require("./models"); */

var port = process.env.PORT || 8080;

var app = express();

/* db.sequelize.sync().then(function(){
  app.listen(PORT,function(){
    console.log("Listening on port %s", PORT);
  });
}); */

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=UPDATE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});

// Timeout

app.use(timeout(15000));
app.use(haltOnTimedout);

function haltOnTimedout (req, res, next) {
  if (!req.timedout) next();
}