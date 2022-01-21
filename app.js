const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose')
const passport = require('passport')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const albumRouter = require('./routes/albums');
const artistsRouter = require('./routes/artists');
const genresRouter = require('./routes/genres');
const tracksRouter = require('./routes/tracks');

const app = express();

require('./middleware/auth.js');
mongoose.connect('mongodb+srv://admin:root@isdb.sdyth.mongodb.net/isdb')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/albums', albumRouter);
app.use('/artists', artistsRouter);
app.use('/genres', genresRouter);
app.use('/tracks', tracksRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
