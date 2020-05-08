exports.up = function (knex, Promise) {
    return knex.schema.createTable('runners', function (table) {
        table.increments().primary();
        table.string('name').notNullable();
        table.datetime('age').notNullable();
        table.string('gender').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp');
        table.string('city');
        table.string('uf');
        table.timestamps()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('runners')
};