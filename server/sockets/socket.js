//Exportamos la variable io
const {io} = require('../server');

//Para saber si un usuario se conecta al server
io.on('connection', (client) => {
    console.log('Usuario conectado');

    //Emitir mensaje una ves se conecte el usuario
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    //Para saver si al usuario se le cayo el servidor
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar entiende
    client.on('enviarMensaje', (data) =>{
        console.log(data);

        //client.emit('enviarMensaje',data);//Escucha solo un cliente
        client.broadcast.emit('enviarMensaje',data);//Escucha todos los clientes a la vez
        //if(mensaje.usuario) {
        //    callback({
        //        resp : 'TODO SALIO BIEN!'
        //    });
        //}else {
        //   callback({
        //        resp: 'TODO SALIO MAL!!!!!!!'
        //    });
        //}
        //callback();
    });
});
