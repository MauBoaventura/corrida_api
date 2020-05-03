exports.up = function (knex, Promise) {
    return knex.schema.createTable('etapas', function (table) {
        table.increments().primary();
        table.string('name').notNullable();
        table.string('city');
        table.string('uf');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('etapas')
};