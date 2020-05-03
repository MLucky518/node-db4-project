
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, step: 'bake cheese',step_number:1},
        {id: 2, step: 'roll dough',step_number:1},
        {id: 3, step: 'microwave',step_number:1}
      ]);
    });
};
