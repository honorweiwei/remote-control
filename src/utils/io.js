const USER_STATUS = ['ONLINE', 'OFFLINE'];
const users = {};
// {
//   '赵敏': { socketId: 'ocoSKZQaRVOTt884AAAA', status: 'ONLINE' },
//   '聂小倩': { socketId: 'QmnuCtXtI-Ser59JAAAB', status: 'OFFLINE' }
// }
module.exports = server => {
    const io = require('socket.io')(server);

    io.on('connection', socket => {

        // 上线后保存到users
        socket.on('online', username => {
            socket.username = username;
            users[username] = {
                socketId: socket.id,
                status: USER_STATUS[0],
                socket:socket
            };

            if (socket.username){
                console.log(socket.username+' is online')
            }


        })


        socket.on('send_mobile', data => {
            // 只给制定页面发送消息
            const targetSocket = users.index && users.index.socket
            if (targetSocket) {
                targetSocket.emit('send_index', data)
            }

        });

        socket.on('disconnect', reason => {
            console.log('disconnect: ', socket.username);
        });
    });
}