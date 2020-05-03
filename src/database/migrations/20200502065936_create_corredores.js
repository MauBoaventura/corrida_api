exports.up = function (knex, Promise) {
    return knex.schema.createTable('corredores', function (table) {
        table.increments().primary();
        table.string('name').notNullable();
        table.integer('age').notNullable();
        table.string('gender').notNullable();
        table.string('email');
        table.string('whatsapp');
        table.string('city');
        table.string('uf');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('corredores')
};