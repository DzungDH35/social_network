const User = require('./models/user')
const socketService = require('./services/socket.service');
const chatService = require('./services/chat.service')
module.exports = io => {
    io.on("connection", async socket => {
        console.log(`${socket.id} is online`)

        socket.onAny((event, ...args) => {
            console.log(event, args);
        });

        socket.on('disconnect', async (reason) => {
            console.log(`${socket.id} disconnected: ` + reason)
            await socketService.disconnect(socket.id)
        });

        socket.on('home', async (userId) => {
            socket.user = userId;
            await socketService.connected(userId, socket.id)
            User.findById(userId).populate('followers').then(async u => {
                for (let f of u.followers) {
                    if (f.online) {
                        io.to(`${f.socketId}`).emit('followingLogin', u.name)
                    }
                }
            })
        })

        socket.on('sendMsg', async data => {
            let userTo = await User.findById(data.to);
            let userFrom = await User.findById(data.from);
            await chatService.sendMessage(data.from, data.to, data.content, '')
            data.avatar = userFrom.avatar
            console.log(`from ${userFrom.socketId} to ${userTo.socketId}`)
            io.to(`${userTo.socketId}`).emit('receiveMsg', data);
            io.to(`${userFrom.socketId}`).emit('receiveMsg', data);
        })

    })
}
