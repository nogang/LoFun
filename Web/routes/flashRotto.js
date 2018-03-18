var express = require('express');
var router = express.Router();
var app = require('../app');
//var socket = require('socket.io');
var global = require('../global.js');

console.log("flash" + global);

var socket = require('socket.io');

/*
global.io.sockets.on('connection', function () {
  console.log('hello world im a hot socket');

});
*/

/*
var socket = require('socket.io');
var server = require('http').createServer(express());
var io = socket.listen(server);

io.sockets.on('connection', function () {
  console.log('hello world im a hot socket');
  socket.on('event_name', function(data) {
    console.log('Message from Client: ' + data);
  });
});
*/

/*
io.on('connection', function(socket) {
  socket.on('event_name', function(data) {
    console.log('Message from Client: ' + data);
  });
});
*/
//var socketio = require('socket.io');
/* GET home page. */
//req.app.get('socket');
router.get('/', function(req, res, next) {
  res.render('flashRotto', { title: 'flashRotto'
						});
});


/*
io.sockets.on('connection', function (socket) {
  socket.on('rint', function(data) {
    consile.log('Client Send Data:', data);

  });
});
*/
module.exports = router;
