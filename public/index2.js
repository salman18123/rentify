var myapp=angular.module('chatapp',['ngRoute','ngStorage'])
myapp.controller('chatcontroller',['$location','$http','socket',function($location,$http,socket){
   
    var main=this
    
socket.on('connected',()=>{
    console.log("connected "+socket.id() )
})
this.sendmsg=function(){
    socket.emit('send_msg',{message:main.msg})
    
}
socket.on('re_msg',(data)=>{
    
    let li=document.createElement('li')
    li.innerHTML=`<li>`+data.message+`</li>`
    document.getElementById("msglist").appendChild(li);
})
}])
myapp.controller('logincontroller',['$location','$http',function($http,$location){
    var main=this;
    
}])