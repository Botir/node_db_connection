var express = require('express');
var router = express.Router();

var models = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
    models.User.findAll({ attributes: ['id','email']}).then(function(users) {
        res.json(users);
    });

  //res.render('index', { title: 'Express' });
});

module.exports = router;
