const Producto = require('../models/Producto');
//crear una funcion para llamar a select del modelo para enviar parametro
//req y res, req significa request=peticion, res significado response=respuesta
const listProducto = async(req, res)=>{
    try{
        const producto=await Producto.getProducto();
        res.json(producto);// parsea a json y retorna la respuesta
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const insertProducto = async(req, res)=>{
    try{
        const producto = await Producto.insert(req.body);
        //201 para crear
        res.status(201).json(producto)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const updataProducto = async(req, res)=>{
    try{
        const producto = await Producto.update(req.body, req.params.id);
        //200 para default
        res.json(producto)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const deleteProducto = async(req, res)=>{
    try{
        const producto = await Producto.delete(req.params.id);
        res.json(producto)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
module.exports = {
    listProducto,
    insertProducto,
    updataProducto,
    deleteProducto,
}