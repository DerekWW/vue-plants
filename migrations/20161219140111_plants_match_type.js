'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('plants_match_types', (table) => {
    table.increments();
    table.integer('plant1_id').notNullable().references('id').inTable('plants').index();
    table.integer('plant2_id').notNullable().references('id').inTable('plants').index();
    table.integer('match_type_id').notNullable().references('id').inTable('match_type').index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('plants_match_types');
};
