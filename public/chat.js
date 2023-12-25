const socket = io();
socket.on('connect', () => {
  // 赵敏
  socket.emit('online', 'user-one');
});
socket.on('reply_private_chat', replyPrivateMessage);


function replyPrivateMessage(call) {
  call()
}
