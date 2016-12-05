var express = require('express');
var router = express.Router();

var db = require('../config/connection.js');


/* GET users listing. */
router.get('/', function(req, res, next) {

    var queryString = 'SELECT * FROM news LIMIT 5';
    db.query(queryString)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL puppies'
                });
        })
        .catch(function (err) {
            return next(err);
        });

    //res.send('respond with a resource');
});

module.exports = router;
