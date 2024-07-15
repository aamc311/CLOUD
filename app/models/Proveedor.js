const { format } = require('mysql2');
const { Model } = require('objection');//llamar al modelo de la libreria objetion

class Proveedor extends Model{
    static get tableName(){
        return 'proveedor';
    }
    static get jsonSchema(){// especifica la estructura de la tabla
        return{
            type: 'object', //object para un dato, array para una lista
            required: ['nombre','total'],// campos requeridos
            properties: {
                id: { type: 'integer'},
                nombre: { type: 'string',minLength:1},
                cliente: {type: 'string', minLength:1},
                fecha: {type: 'string', format: 'date-time'},
                total: {type: 'string', format: 'decimal'}
            }
        };
    }
    
    static async getProveedor(){// metodos para listar clientes
        return await Proveedor.query();// select¨from clientes
    }
    static async insert(data){// metodopara insertar clientes
        return await Proveedor.query()
            .insert(data);//insert into cliente values....
    }
    static async update(){//metodo para editar cliente
        return await Proveedor.query()
            .patch(id,data);//uptate set data where id = 0
    }
    static async delete(id){// metodo para eliminara cliente
        return await Proveedor.query()
            .deleteById(id);//delete from customer where id = 0
    }
}

module.exports = Proveedor;