var express = require("express");

var router = express.Router();

//Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//Create all our routes and set up logic within those routes where required.

router.get('/', function (req, res){
    burger.selectall(function (data){
        var hbsObject = { burgers: data};
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//Create a New Burger to the database
router.post("/burger/create", function (req, res) {
    burger.CreateOne(req.body.burger_name, function() {
      res.redirect("/");
    });
  });

//Devour a Burger
router.post("/burger/eat", function (req, res){
    burger.updateOne(req.body.id, function(){
        res.redirect("/");
    });
  });
  router.post("/burger/restore", function (req, res){
      burger.restoreOne(reg.body.id, function(){
          res.redirect("/");
      });
  });


// Export routes for server.js to use

module.exports = router;