exports.up = async function (knex) {
    await knex.schema.createTable("recipe_instructions", (tbl) => {
      tbl
        .integer("recipe_id")
        .notNull()
        .unsigned()
        .references("id")
        .inTable("recipes");
  
      tbl
        .integer("instruction_id")
        .notNull()
        .unsigned()
        .references("id")
        .inTable("instructions");
  
        tbl.primary(["recipe_id","instruction_id"]);
    });
  };
  
  exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("recipe_instructions");
  };
  