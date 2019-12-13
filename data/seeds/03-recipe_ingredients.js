
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          measure_quantity: 1,
          measure_unit: 'cup'
        },
        {
          recipe_id: 1,
          ingredient_id: 2,
          measure_quantity: 1,
          measure_unit: 'cup'
        },
        {
          recipe_id: 1,
          ingredient_id: 3,
          measure_quantity: 1,
          measure_unit: 'cup'
        },
        {
          recipe_id: 1,
          ingredient_id: 4,
          measure_quantity: 2,
          measure_unit: 'whole'
        },
        {
          recipe_id: 1,
          ingredient_id: 5,
          measure_quantity: 2,
          measure_unit: 'teaspoons'
        },
        {
          recipe_id: 1,
          ingredient_id: 6,
          measure_quantity: 1,
          measure_unit: 'teaspoon'
        },
        {
          recipe_id: 1,
          ingredient_id: 7,
          measure_quantity: 2,
          measure_unit: 'teaspoons'
        },
        {
          recipe_id: 1,
          ingredient_id: 8,
          measure_quantity: 0.5,
          measure_unit: 'teaspoons'
        },
        {
          recipe_id: 1,
          ingredient_id: 9,
          measure_quantity: 3,
          measure_unit: 'cups'
        },
        {
          recipe_id: 1,
          ingredient_id: 10,
          measure_quantity: 2,
          measure_unit: 'cups'
        },
        {
          recipe_id: 2,
          ingredient_id: 11,
          measure_quantity: 2,
          measure_unit: 'slices'
        },
        {
          recipe_id: 2,
          ingredient_id: 12,
          measure_quantity: 2,
          measure_unit: 'tablespoons'
        },
        {
          recipe_id: 2,
          ingredient_id: 13,
          measure_quantity: 2,
          measure_unit: 'teaspoons'
        },
        {
          recipe_id: 3,
          ingredient_id: 14,
          measure_quantity: 4,
          measure_unit: 'slices'
        },
        {
          recipe_id: 3,
          ingredient_id: 15,
          measure_quantity: 2,
          measure_unit: 'leaves'
        },
        {
          recipe_id: 3,
          ingredient_id: 16,
          measure_quantity: 2,
          measure_unit: 'slices'
        },
        {
          recipe_id: 3,
          ingredient_id: 11,
          measure_quantity: 2,
          measure_unit: 'slices'
        },
        {
          recipe_id: 3,
          ingredient_id: 17,
          measure_quantity: 1,
          measure_unit: 'tablespoon'
        },
      ]);
    });
};
