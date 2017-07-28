'use strict';

(function(){
	var mysql = require('mysql');

	var con = mysql.createConnection({
	host: "localhost",
	user: "username",
	password: "password",
	database: "bootcamp_db"
	});

	module.exports = con;
})();