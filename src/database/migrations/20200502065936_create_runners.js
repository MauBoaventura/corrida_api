const { onUpdateTrigger } = require('../../../knexfile')

exports.up = function (knex, Promise) {
    return knex.schema.createTable('runners', function (table) {
        table.increments().primary();
        table.string('name').notNullable();
        table.datetime('age').notNullable();
        table.string('gender').notNullable();
        table.string('email').notNullable();
        table.unique('email');
        table.string('whatsapp');
        table.string('city');
        table.string('uf');
        table.string('password');
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        // table.timestamp('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'))

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('runners')
};