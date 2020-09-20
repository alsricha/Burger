// Import MYSQL connection

var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
var orm = {
	selectAll: function( tablename,cb){

		connection.query('SELECT * FROM ??;', [tablename], function(err, result){
			if (err) throw err;
			// console.log(result);
			 cb(result);
		})
	},
	insertOne: function (tablename, colname, burger_name, cb) {
		
		connection.query("INSERT INTO ?? (??) VALUES (?)", [ tablename ,colname, burger_name], function (err, result) {
			if (err) throw err;			
			 cb(result);
		});
	},
	updateOne: function ( tablename,colname, devoured, id, cb) {
		
		connection.query("UPDATE ?? SET ?? = ? WHERE id = ?", [tablename , colname ,devoured , id], function (err, result) {
			if (err) throw err;			
			cb(result);
			
		});
	},
};



// Export the ORM object 
module.exports = orm