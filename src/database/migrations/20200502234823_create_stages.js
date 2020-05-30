const { onUpdateTrigger } = require('../../../knexfile')

exports.up = function (knex, Promise) {
    return knex.schema.createTable('stages', function (table) {
        table.increments().primary();
        table.string('name').notNullable();
        table.string('city');
        table.string('uf');
        table.datetime('start');
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
        // table.timestamp('updated_at').defaultTo(knex.raw('NULL ON UPDATE now()'))

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('stages')
};