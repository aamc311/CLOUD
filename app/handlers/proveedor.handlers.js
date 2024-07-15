const Proveedor = require('../models/Proveedor');
//crear una funcion para llamar a select del modelo para enviar parametro
//req y res, req significa request=peticion, res significado response=respuesta
const listProveedor = async(req, res)=>{
    try{
        const proveedor=await Proveedor.getProveedor();
        res.json(proveedor);// parsea a json y retorna la respuesta
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const insertProveedor = async(req, res)=>{
    try{
        const proveedor = await Proveedor.insert(req.body);
        //201 para crear
        res.status(201).json(proveedor)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const updataProveedor = async(req, res)=>{
    try{
        const proveedor = await Proveedor.update(req.body, req.params.id);
        //200 para default
        res.json(proveedor)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const deleteProveedor = async(req, res)=>{
    try{
        const proveedor = await Proveedor.delete(req.params.id);
        res.json(proveedor)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
module.exports = {
    listProveedor,
    insertProveedor,
    updataProveedor,
    deleteProveedor,
}