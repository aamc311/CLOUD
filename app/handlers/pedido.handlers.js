const Pedido = require('../models/Pedido');
//crear una funcion para llamar a select del modelo para enviar parametro
//req y res, req significa request=peticion, res significado response=respuesta
const listPedido = async(req, res)=>{
    try{
        const pedido=await Pedido.getPedido();
        res.json(pedido);// parsea a json y retorna la respuesta
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const insertPedido = async(req, res)=>{
    try{
        const pedido = await Pedido.insert(req.body);
        //201 para crear
        res.status(201).json(pedido)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const updataPedido = async(req, res)=>{
    try{
        const pedido = await Pedido.update(req.body, req.params.id);
        //200 para default
        res.json(pedido)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const deletePedido = async(req, res)=>{
    try{
        const pedido = await Pedido.delete(req.params.id);
        res.json(pedido)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
module.exports = {
    listPedido,
    insertPedido,
    updataPedido,
    deletePedido,
}