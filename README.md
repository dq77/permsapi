<!--
 * @Author: 刁琪
 * @Date: 2020-11-30 16:10:48
 * @LastEditors: 掉漆
-->
# permsapi
-个人笔记node端代码
-存放位置：etc/nodefront/permsapi
-Linux先安装MySql并配置好远程连接
-forever运行./bin/www即可
-如跨域，反向代理配置：
```
location /picert {
    rewrite ^/picert/(.*)$ /$1 break;
    proxy_pass http://123.123.123.123:9305;
}
```