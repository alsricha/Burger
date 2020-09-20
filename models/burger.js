// Import the ORM to create functions that will interact with the database.

var orm = require("..config/orm.js");

var burger = {
    all: function(cb){
        orm.all( 'burgers', function(res){
            cb(res);
        });
    },

    // The variables cols and vals are arrays.

    createOne: function(bruger_name, cb) {
        orm.createOne('burgers', 'burger_name', function(res) {
            cb(res);
        });
    },

    updateOne: function(burger_id,cb){
        orm.updateOne('burgers', 'devoured', true, burger_id, function (res){
            cb(res);
        });
    },

    restoreOne: function(burger_id, cb) {
        orm.updateOne('burgers', 'devoured', false, burger_id, function(res){
            cb(res)
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;