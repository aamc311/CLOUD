const Empleado = require('../models/Empleado');
//crear una funcion para llamar a select del modelo para enviar parametro
//req y res, req significa request=peticion, res significado response=respuesta
const listEmpleado = async(req, res)=>{
    try{
        const empleado=await Empleado.getEmpleado();
        res.json(empleado);// parsea a json y retorna la respuesta
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const insertEmpleado = async(req, res)=>{
    try{
        const empleado = await Empleado.insert(req.body);
        //201 para crear
        res.status(201).json(empleado)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const updataEmpleado = async(req, res)=>{
    try{
        const empleado = await Empleado.update(req.body, req.params.id);
        //200 para default
        res.json(empleado)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
const deleteEmpleado = async(req, res)=>{
    try{
        const empleado = await Empleado.delete(req.params.id);
        res.json(empleado)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
module.exports = {
    listEmpleado,
    insertEmpleado,
    updataEmpleado,
    deleteEmpleado,
}