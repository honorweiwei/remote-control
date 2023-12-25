const express = require('express');
const path = require('path');
// 默认安装最高版本报错，降低到了8.2.0版本
const open = require('open');
// 获取设备ip
let { ip } = require('./src/utils/findIP.js');

const app = express();
const port = 3000;

const server = require('http').createServer(app);
require('./src/utils/io.js')(server);
// 静态文件服务，指定静态文件夹（例如：public）
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')));

// 启动服务器
server.listen(port, ip, () => {
    console.log(`Server is running at http://${ip}:${port}`);
    // 打开浏览器
    // open('http://localhost:3000/index.html');
    open(`http://10.6.226.138:${port}/index.html`);
});
