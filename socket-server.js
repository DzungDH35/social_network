
let clientSocketIds = [];
let connectedUsers= [];

const getSocketByUserId = (userId) =>{
    let socket = '';
    for(let i = 0; i<clientSocketIds.length; i++) {
        if(clientSocketIds[i].userId === userId) {
            socket = clientSocketIds[i].socket;
            break;
        }
    }
    return socket;
}

module.exports = io => {
    io.on("connection", socket => {
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

        socket.on('loggedin', function (user) {
            clientSocketIds.push({socket: socket, userId: user.user_id});
            connectedUsers = connectedUsers.filter(item => item.user_id !== user.user_id);
            connectedUsers.push({...user, socketId: socket.id})
            io.emit('updateUserList', connectedUsers)
        });

        socket.on('create', function (data) {
            console.log("create room")
            socket.join(data.room);
            let withSocket = getSocketByUserId(data.withUserId);
            socket.broadcast.to(withSocket.id).emit("invite", {room: data})
        });

        socket.on('joinRoom', function (data) {
            socket.join(data.room.room);
        });

        socket.on('message', function (data) {
            socket.broadcast.to(data.room).emit('message', data);
        })

        // data: from, to, content
        // data: {from: from, content: content}
        
    })
}
