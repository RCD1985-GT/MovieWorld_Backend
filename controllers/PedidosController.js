
const { Pedido } = require('../models/index'); // ¿PORQUE LLAMA A MODELS/INDEX.JS?


const PedidosController = {};


// Funcion nuevoPedido

PedidosController.nuevoPedido = (req,res) => {
    
    let body = req.body;

    console.log("este es body",body)

    Pedido.create({
        peliculaId: body.peliculaId,
        usuarioId: body.usuarioId,
        precio: body.precio,
        fecha: body.fecha
    })
    .then(pedido => {
        if(pedido){
            res.send(pedido)
        }else{
            res.send("La creación de un nuevo pedido ha fallado");
        }
    })
    .catch((error => {
        res.send(error)
    }))
}




// Funcion totalPedidos
PedidosController.totalPedidos = (req, res) => {
    Pedido.findAll()
    .then(data => {
        res.send(data)
    });
};
module.exports = PedidosController;