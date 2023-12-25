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
                status: USER_STATUS[0]
            };
        })


        socket.on('private_chat', (params, fn) => {
            // params---> { sender: '赵敏', receiver: '聂小倩', text: '111' }
            // const receiver = users[params.receiver];
            // params.createTime = moment().format('YYYY-MM-DD HH:mm:ss');
            // const senderData = _.findWhere(userData, { username: params.sender });
            // // senderData --->{ username: '赵敏', photo: './img/zhaomin.jpeg' }
            // params.senderPhoto = (senderData || {}).photo;


            // if (!params.senderPhoto) {
            //     const senderLen = params.sender.length;
            //     params.senderPhotoNickname = params.sender.substr(senderLen - 2)
            // }

            // fn(params);

            // if (receiver && receiver.status === USER_STATUS[0]) {
            //     socket.to(users[params.receiver].socketId).emit('reply_private_chat', params);
            // } else {
            //     console.log(`${params.receiver} 不在线`);
            // }
        });

        socket.on('disconnect', reason => {
            console.log('disconnect: ', reason);

            // if (users[socket.username]) {
            //     users[socket.username].status = USER_STATUS[1];
            // }
        });
    });
}