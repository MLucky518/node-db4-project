exports.up = async function (knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id");
    table.text("recipe_name").notNull().unique();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("recipes");
};
