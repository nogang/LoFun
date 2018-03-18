module.exports = (io) => {
  io.on('connection', (socket) => { // 웹소켓 연결 시
    console.log('Socket initiated!');
    socket.on('newScoreToServer', (data) => { 
      console.log('Socket: newScore');
      io.emit('newScoreToClient', data);
    });
  });
};
