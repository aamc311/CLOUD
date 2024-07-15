const { format } = require('mysql2');
const { Model } = require('objection');//llamar al modelo de la libreria objetion
const Producto = require('./Producto');

class Pedido extends Model{
    static get tableName(){
        return 'pedido';
    }
    static get jsonSchema(){// especifica la estructura de la tabla
        return{
            type: 'object', //object para un dato, array para una lista
            required: ['producto','cantidad'],// campos requeridos
            properties: {
                id: { type: 'integer'},
                producto: { type: 'string',minLength:1},
                cantidad: {type: 'integer'},
                dia_hora: {type: 'string', format: 'date-time'},
                precio: {type: 'string', format:'decimal'}
            }
        };
    }
    
    static async getPedido(){// metodos para listar clientes
        return await Pedido.query();// select¨from clientes
    }
    static async insert(data){// metodopara insertar clientes
        return await Pedido.query()
            .insert(data);//insert into cliente values....
    }
    static async update(){//metodo para editar cliente
        return await Pedido.query()
            .patch(id,data);//uptate set data where id = 0
    }
    static async delete(id){// metodo para eliminara cliente
        return await Pedido.query()
            .deleteById(id);//delete from customer where id = 0
    }
}

module.exports = Pedido;