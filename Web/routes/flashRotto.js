var express = require('express');
var router = express.Router();
var app = require('../app');
//var socket = require('socket.io');
var global = require('../global.js');

console.log("flash" + global);

var socket = require('socket.io');

router.get('/', function(req, res, next) {
  res.render('flashRotto', { title: 'flashRotto'
						});
});

module.exports = router;
