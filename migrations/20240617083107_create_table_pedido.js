/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pedido',table=>{
        table.increments('id').primary();
        table.string('producto').notNullable();
        table.integer('cantidad').notNullable();
        table.timestamp('dia_hora');
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('proveedor');
  
};
