var express=require('express')
var app=express()
var socket=require('socket.io')
var server=app.listen(4000,function(req,res){
    console.log("Listening on 4000")

})

app.use(express.static('public'))
var io=socket(server)
io.on('connection',function(socket){
    console.log("Connection made")
    socket.on('chat',function(data){
io.sockets.emit('chat',data)
    })

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data)
    })
})
