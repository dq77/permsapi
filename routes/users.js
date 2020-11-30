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
  User.setArtInfo(req.body.artid, req.body.val, function(err, result){
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
