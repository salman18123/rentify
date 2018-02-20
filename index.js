const express=require('express')
const path=require('path')
const socketio=require('socket.io')
const http=require('http')
const app=express()
const server=http.createServer(app)
app.use('/',express.static(path.join(__dirname,'public')))
const io=socketio(server)


const SERVER_PORT=process.env.PORT||2345





io.on('connection',(socket)=>{
    console.log("new socket formed "+socket.id)
    socket.emit('connected')
    socket.on('send_msg',(data)=>{
        io.emit('re_msg',data);
    })
})

server.listen(SERVER_PORT,()=>{
    console.log("started")
})
