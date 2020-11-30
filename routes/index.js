/*
 * @Author: 刁琪
 * @Date: 2020-11-24 11:41:41
 * @LastEditors: わからないよう
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* 自定义参数 */
router.get("/login/:aid",function(req,res){
	res.send(req.params.aid);
});

module.exports = router;
