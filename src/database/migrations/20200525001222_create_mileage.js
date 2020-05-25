const { onUpdateTrigger } = require('../../../knexfile')

exports.up = function (knex, Promise) {
    return knex.schema.createTable('mileage', function (table) {
        table.increments();

        table.integer('stage_id').notNullable().unsigned();
        table.foreign('stage_id').references('id').inTable('stages')

        table.string('distance').notNullable();
        table.string('mileage');
        
    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('mileage')
};