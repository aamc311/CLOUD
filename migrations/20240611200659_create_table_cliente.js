/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('cliente',table=>{
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('email').notNullable();
        table.timestamp('dia_hora');
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('cliente');
  
};
