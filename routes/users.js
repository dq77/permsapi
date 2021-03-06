/*
 * @Author: 刁琪
 * @Date: 2020-11-24 11:41:41
 * @LastEditors: わからないよう
 */
var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET 带参数请求 */
router.get('/userlist', function(req, res, next) {
  res.send(req.query.page);
});

/* POST 带参数请求 */
router.post('/getartinfo', function(req, res, next) {
  User.find(req.body.artid, function(err, result){
    if(err){
      res.send('not found');
    }
    res.send(result);
  });
});

/* POST 带参数请求 */
router.post('/saveart', function(req, res, next) {
  User.find(req.body.artid, function(err, result){
    let resp = {}
    if(result[0] && result[0].id){
      // 编辑保存 先存历史记录
      User.saveOld(req.body.artid, result[0].val, function(err, result){});
      User.setArtInfo(req.body.artid, req.body.val, function(err, result1){
        if(err){
          res.send('not found');
        }
        res.send(result1);
      });
    } else {
      // 新增保存
      User.addArtInfo(req.body.artid, req.body.val, function(err, result2){
        if(err){
          res.send('not found');
        }
        res.send(result2);
      });
    }
  });
});

/* 获取历史记录 */
router.post('/gethistory', function(req, res, next) {
  User.getOld(req.body.artid, function(err, result){
    if(err){
      res.send('not found');
    }
    res.send(result);
  });
});

/* POST 带参数请求 */
router.post('/addart', function(req, res, next) {
  User.addArtInfo(req.body.artid, req.body.val, function(err, result){
    if(err){
      res.send('not found');
    }
    res.send(result);
  });
});



module.exports = router;
