/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('producto',table=>{
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.text('descripcion').notNullable();
        table.decimal('precio').notNullable();
        table.integer('stok').notNullable();
        table.timestamp('dia_hora');
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('producto');
  
};
