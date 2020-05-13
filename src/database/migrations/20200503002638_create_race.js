const { onUpdateTrigger } = require('../../../knexfile')

exports.up = function (knex, Promise) {
    return knex.schema.createTable('race', function (table) {
        table.increments();

        table.integer('stage_id').notNullable().unsigned();
        table.foreign('stage_id').references('id').inTable('stages')

        table.integer('runner_id').notNullable().unsigned();
        table.foreign('runner_id').references('id').inTable('runners')

        table.string('km').notNullable();
        table.string('number').notNullable();
        table.datetime('totaltime')
        table.boolean('isQualify').notNullable().defaultTo('false');
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        table.timestamp('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'))

    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('race')
};