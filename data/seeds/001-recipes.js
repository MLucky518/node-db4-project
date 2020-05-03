
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'mac and cheese'},
        {id: 2, recipe_name: 'pizza'},
        {id: 3, recipe_name: 'tacos'}
      ]);
    });
};
