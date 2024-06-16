var socket = io();

socket.on('connect', function(){

    console.log('Conectado al servidor');

});

//Escuchar informacion
socket.on('disconect', function(){

    console.log('Perdimos conexion con el servidor');

});

//Enviar Informacion(Emit solo envia al servidor)
socket.emit('enviarMensaje', {
    usuario: 'Max',
    mensaje: 'Hello Work'
}, function(resp) {//Funcion que se ejecuta cuando sale todo bien
    //console.log('Se disparo el callback');//Se usa en verificaciones DB
    console.log('respuesta server: ', resp);//Respuesta del servidor
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje){
    
    console.log('Servidor:', mensaje);

});
