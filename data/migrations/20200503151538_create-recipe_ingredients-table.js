exports.up = async function (knex) {
  await knex.schema.createTable("recipe_ingredients", (tbl) => {
    tbl
      .integer("recipe_id")
      .notNull()
      .unsigned()
      .references("id")
      .inTable("recipes");

    tbl
      .integer("ingredient_id")
      .notNull()
      .unsigned()
      .references("id")
      .inTable("ingredients");

      tbl.primary(["recipe_id","ingredient_id"]);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("recipe_ingredients");
};
