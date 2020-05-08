exports.up = function (knex, Promise) {
    return knex.schema.createTable('stages', function (table) {
        table.increments().primary();
        table.string('name').notNullable();
        table.string('city');
        table.string('uf');
        table.datetime('start');
        table.timestamps()

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('stages')
};