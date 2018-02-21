myapp.service('socket',function(){
    var socket=io()

    
        this.on=function(eventName, callback){
            socket.on(eventName, callback);
        }
        this.emit=function(eventName, data) {
            socket.emit(eventName, data);
        }
        this.id=function(){
            return socket.id
        }
    

})