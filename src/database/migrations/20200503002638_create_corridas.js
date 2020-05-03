exports.up = function (knex, Promise) {
    return knex.schema.createTable('corridas', function (table) {
        table.increments();

        table.integer('etapa_id').notNullable().unsigned();
        table.foreign('etapa_id').references('id').inTable('etapas')
        
        table.integer('corredor_id').notNullable().unsigned();
        table.foreign('corredor_id').references('id').inTable('corredores')

        table.string('km').notNullable();
        table.string('number').notNullable();
        table.datetime('totaltime', { precision: 2 })
        table.boolean('isQualify').notNullable().defaultTo('false');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('corridas')
};