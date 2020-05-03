exports.up = async function (knex) {
await knex.schema.createTable("instructions", (table) =>{
    table.increments("id");
    table.text("step").notNull();
    table.integer("step_number").unsigned().notNull();
})
};

exports.down = async function (knex) {
await knex.schema.dropTableIfExists("instructions");
};
