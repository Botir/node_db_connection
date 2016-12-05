var mysql = require('mysql');
var pg = require('pg');
var pgp = require('pg-promise')(/*options*/);

var $conf = require('../config/db');


// var connection = mysql.createConnection($conf.mysql);
//
//
// connection.connect(function (err) {
// 	if (err) {
// 		console.error('error connecting: ' + err.stack);
// 		return;
// 	}
// 	console.log('Connection Sucessful! and connected as id ' + connection.threadId);
// });

// connection = pg.connect($conf.postgres, function(err, client, done) {
//     if(err)
//         console.log("Could not connect to DB: " + err);
//     else
//         console.log('Connection Sucessful!');
// });

//module.exports = connection;

var db = pgp($conf.postgres); // database instance;

module.exports  =  db;
