exports.up = function (knex, Promise) {
    return knex.schema.createTable('runners', function (table) {
        table.increments().primary();
        table.string('name').notNullable();
        table.integer('age').notNullable();
        table.string('gender').notNullable();
        table.string('email');
        table.string('whatsapp');
        table.string('city');
        table.string('uf');
        table.timestamps()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('runners')
};