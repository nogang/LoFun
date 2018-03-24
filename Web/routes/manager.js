var express = require('express');
var router = express.Router();
var app = require('../app');

router.get('/', function(req, res, next) {
  res.render('manager', { title: 'manager'
						});
});

module.exports = router;
