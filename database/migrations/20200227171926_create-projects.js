exports.up = function(knex) {
  return knex.schema.createTable("projects", function(tbl) {
    tbl.increments();

    tbl
      .string("name", 255)
      .notNullable()
      .unique()
      .index();
    tbl
      .string("description", 255)
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
