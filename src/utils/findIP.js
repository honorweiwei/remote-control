const { Module } = require('module');
const os = require('os');

// 获取本地计算机的所有网络接口信息
const networkInterfaces = os.networkInterfaces();

// 打印所有网络接口信息
// console.log(networkInterfaces);

let localIpAddress;

networkInterfaces.en0.forEach((iface) => {
    if (iface.family === 'IPv4' && !iface.internal) {
        localIpAddress = iface.address;

    }
});



// console.log(`Local IP Address: ${localIpAddress}`);

module.exports.ip = localIpAddress
