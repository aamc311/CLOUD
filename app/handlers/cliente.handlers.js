const Cliente = require('../models/Cliente');
//crear una funcion para llamar a select del modelo para enviar parametro
//req y res, req significa request=peticion, res significado response=respuesta
const listCliente = async(req, res)=>{
    try{
        const cliente=await Cliente.getCliente();
        res.json(cliente);// parsea a json y retorna la respuesta
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const insertCliente = async(req, res)=>{
    try{
        const cliente = await Cliente.insert(req.body);
        //201 para crear
        res.status(201).json(cliente)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const updataCliente = async(req, res)=>{
    try{
        const cliente = await Cliente.update(req.body, req.params.id);
        //200 para default
        res.json(cliente)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const deleteCliente = async(req, res)=>{
    try{
        const cliente = await Cliente.delete(req.params.id);
        res.json(cliente)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
module.exports = {
    listCliente,
    insertCliente,
    updataCliente,
    deleteCliente,
}