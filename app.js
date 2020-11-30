/*
 * @Author: 刁琪
 * @Date: 2020-11-24 11:40:35
 * @LastEditors: わからないよう
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// 视图渲染及模板
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev')); // 请求打印
app.use(express.json()); // json解析
app.use(express.urlencoded({ extended: false })); // 解析content-type匹配模式
app.use(cookieParser()); // cookie操作
app.use('/static', express.static(path.join(__dirname, 'public'))) // 静态托管

// 路由部分
app.use('/', indexRouter);
app.use('/user', usersRouter);

// 404捕获
app.use(function(req, res, next) {
  next(createError(404));
});

// 500报错
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
