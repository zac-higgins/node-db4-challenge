
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Chocolate Chip Cookies' },
        { recipe_name: 'PB&J' },
        { recipe_name: 'BLT' },
      ]);
    });
};
