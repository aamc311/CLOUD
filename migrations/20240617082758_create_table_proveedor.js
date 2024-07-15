/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('proveedor',table=>{
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('cliente').notNullable();
        table.date('fecha').notNullable();
        table.decimal('total').notNullable();
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
