const { format } = require('mysql2');
const { Model } = require('objection');//llamar al modelo de la libreria objetion

class Producto extends Model{
    static get tableName(){
        return 'producto';
    }
    static get jsonSchema(){// especifica la estructura de la tabla
        return{
            type: 'object', //object para un dato, array para una lista
            required: ['nombre','precio'],// campos requeridos
            properties: {
                id: { type: 'integer'},
                nombre: { type: 'string',minLength:1},
                descripcion: {type: 'string'},
                precio: {type: 'number'},
                stok: {type: 'integer'},
                dia_hora: {type: 'string', format: 'date-time'}
            }
        };
    }
    
    static async getProducto(){// metodos para listar clientes
        return await Producto.query();// select¨from clientes
    }
    static async insert(data){// metodopara insertar clientes
        return await Producto.query()
            .insert(data);//insert into cliente values....
    }
    static async update(){//metodo para editar cliente
        return await Producto.query()
            .patch(id,data);//uptate set data where id = 0
    }
    static async delete(id){// metodo para eliminara cliente
        return await Producto.query()
            .deleteById(id);//delete from customer where id = 0
    }
}

module.exports = Producto;