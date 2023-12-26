# 手机端模拟遥控器控制电脑页面显示

## 安装依赖
### npm install

## 运行
### npm run start

次操作会自动在浏览器启动http://xxx.xxx.xxx.xxx:3000/index.html页面

如果不想自动启动，可以在 app.js中注释掉--》open(`http://${ip}:${port}/index.html`);

## 手机端打开 
http://xxx.xxx.xxx.xxx:3000/mobile.html 页面
在手机端操作可以改变pc页面的显示


#### 打不开可能是findIP.js方法在获取ip时候有问题可以将findIP.js内容注释掉，只导出module.exports.ip = '你的ip'