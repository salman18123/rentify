let socket=io()
socket.on('connected',()=>{
    console.log(socket.id)
})
$(function(){
    let msgbox=$("#msgbox")
    let sendmsg=$("#sendmsg")
    let msglist=$("#msglist")
    sendmsg.click(function(){
        
        let msg=msgbox.val()
        
        socket.emit('send_msg',{message:msg})
        
    })
    socket.on('re_msg',(data)=>{
        msglist.append(`<li>`+data.message+`</li>`)
    })
})