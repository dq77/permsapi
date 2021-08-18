# permsapi
- 个人笔记node端代码
- 存放位置：etc/nodefront/permsapi
- Linux先安装MySql并配置好远程连接，IP地址和密码在服务器上改好(dataBase/dbConfig文件)
- pm2 start ./bin/www 即可
- 如跨域，反向代理配置：
```
location /picert {
    rewrite ^/picert/(.*)$ /$1 break;
    proxy_pass http://123.123.123.123:9305;
}
```