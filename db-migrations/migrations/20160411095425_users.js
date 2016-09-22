
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('name');
    table.string('age');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
