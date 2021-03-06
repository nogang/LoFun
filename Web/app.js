var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var index = require('./routes/index');
var users = require('./routes/users');
var team = require('./routes/team');
var fundList = require('./routes/fundList');
var participateFund = require('./routes/participateFund');
var raiseFund = require('./routes/raiseFund');
var raiseFundTest = require('./routes/raiseFundTest');
var manager = require('./routes/manager');
var flashRotto = require('./routes/flashRotto');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.set('socket', socket);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/team', team);
app.use('/fundList', fundList);
app.use('/participateFund', participateFund);
app.use('/raiseFund', raiseFund);
app.use('/raiseFundTest', raiseFundTest);
app.use('/manager', manager);
app.use('/flashRotto', flashRotto);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
