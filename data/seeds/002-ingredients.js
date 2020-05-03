
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'cheese',ingredient_quantity:2.4 },
        {id: 2, ingredient_name: 'pepperoni',ingredient_quantity:2.3 },
        {id: 3, ingredient_name: 'bread crumbs', ingredient_quantity:2.4 }
      ]);
    });
};
