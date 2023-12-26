const { Module } = require('module');
const os = require('os');

// 获取本地计算机的所有网络接口信息
const networkInterfaces = os.networkInterfaces();

// 打印所有网络接口信息
// console.log(networkInterfaces);


// 存储满足条件的网络接口
const connectedInterfaces = [];
// 遍历每个网络接口
for (const [interfaceName, interfaces] of Object.entries(networkInterfaces)) {
    // 遍历每个接口的详细信息
    for (const iface of interfaces) {
        // 如果接口有IPv4地址，认为是当前连接的接口
        if (iface.family === 'IPv4' && !iface.internal) {
            connectedInterfaces.push({ interfaceName, iface });
        }
    }
}
// 如果有满足条件的接口，选择第一个
if (connectedInterfaces.length > 0) {
    const firstConnectedInterface = connectedInterfaces[0];
    // console.log(`当前连接的网络接口是: ${firstConnectedInterface.interfaceName}`);
    // console.log(firstConnectedInterface.iface);
    module.exports.ip = firstConnectedInterface.iface.address
} else {
    console.log('没有找到满足条件的网络接口。');
    module.exports.ip = '127.0.0.1'
}
