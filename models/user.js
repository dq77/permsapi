/*
 * @Author: 刁琪
 * @Date: 2020-11-24 14:38:28
 * @LastEditors: わからないよう
 */
var db = require('../dataBase/mysql');
const moment = require('moment')
var User = {};

// 获取用户信息
User.find = function(artid, callback) {
  var sql = "SELECT * FROM `perms`.`permtable` WHERE `artid` = '"+artid+"' LIMIT 0, 10;";
  db.query(sql, function(err, rows) {
    callback(err, rows)
  });
};

// 查询历史记录
User.getOld = function(artid, callback) {
  var sql = "SELECT * FROM `perms`.`history` WHERE `artid` = '"+artid+"' ORDER BY `savetime` DESC LIMIT 0, 10;";
  db.query(sql, function(err, rows) {
    callback(err, rows)
  });
};

// 保存历史记录
User.saveOld = function(artid, val, callback) {
  var sql = "INSERT INTO `perms`.`history` (artid, val, savetime) VALUES ("+artid+", '"+val+"', '"+moment(new Date()).format('YYYY-MM-DD HH:mm:ss')+"');";
  db.query(sql, function(err, rows) {
    callback(err, rows)
  });
};

// 编辑用户信息
User.setArtInfo = function(artid, val, callback) {
  var sql = "UPDATE `perms`.`permtable` SET val = '"+val+"' WHERE artid = "+artid+";";
  db.query(sql, function(err, rows) {
    callback(err, rows)
  });
};

// 新增用户信息
User.addArtInfo = function(artid, val, callback) {
  var sql = "INSERT INTO `perms`.`permtable` (artid, val) VALUES ("+artid+", '"+val+"');";
  db.query(sql, function(err, rows) {
    callback(err, rows)
  });
};

module.exports = User;