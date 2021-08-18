/*
 * @Date: 2021-02-18 13:25:48
 * @LastEditors: 掉漆
 * @LastEditTime: 2021-08-18 15:23:54
 */
let mysql = {

  host:"111.111.111.111", // 不要在远程仓库暴露你的IP地址，此文件务必在服务器上改动，不要推送至代码仓库
  user:"root",
  port: "3306",
  password:"xxxxxx", // 不要在远程仓库暴露你的密码，此文件务必在服务器上改动，不要推送至代码仓库
  database:"perms"
}
module.exports = mysql;
