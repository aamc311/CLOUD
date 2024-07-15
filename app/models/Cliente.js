const { format } = require('mysql2');
const { Model } = require('objection');//llamar al modelo de la libreria objetion

class Cliente extends Model{
    static get tableName(){
        return 'cliente';
    }
    static get jsonSchema(){// especifica la estructura de la tabla
        return{
            type: 'object', //object para un dato, array para una lista
            required: ['nombre','email'],// campos requeridos
            properties: {
                id: { type: 'integer'},
                nombre: { type: 'string',minLength:1},
                email: {type: 'string', format:'email'},
                true: {type: 'string', format: 'date-time'},
                edad: {type: 'integer'}
            }
        };
    }
    
    static async getCliente(){// metodos para listar clientes
        return await Cliente.query();// select¨from clientes
    }
    static async insert(data){// metodopara insertar clientes
        return await Cliente.query()
            .insert(data);//insert into cliente values....
    }
    static async update(){//metodo para editar cliente
        return await Cliente.query()
            .patch(id,data);//uptate set data where id = 0
    }
    static async delete(id){// metodo para eliminara cliente
        return await Cliente.query()
            .deleteById(id);//delete from customer where id = 0
    }
}

module.exports = Cliente;