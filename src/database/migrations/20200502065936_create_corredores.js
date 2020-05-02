exports.up = function (knex, Promise) {
    return knex.schema.createTable('corredores', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('km').notNullable();
        table.integer('age').notNullable();
        table.string('number').notNullable();
        table.string('gender').notNullable();
        table.string('totaltimer').notNullable();
        table.boolean('isQualify').notNullable().defaultTo('false');
        table.string('email');
        table.string('whatsapp');
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('corredores')
};