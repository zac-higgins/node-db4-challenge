
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'Butter' },
        { ingredient_name: 'White Sugar' },
        { ingredient_name: 'Brown Sugar' },
        { ingredient_name: 'Eggs' },
        { ingredient_name: 'Vanilla Extract' },
        { ingredient_name: 'Baking Soda' },
        { ingredient_name: 'Hot Water' },
        { ingredient_name: 'Salt' },
        { ingredient_name: 'All-Purpose Flower' },
        { ingredient_name: 'Chocolate Chips' },
        { ingredient_name: 'Sandwich Bread' },
        { ingredient_name: 'Peanut Butter' },
        { ingredient_name: 'Grape Jelly' },
        { ingredient_name: 'Bacon' },
        { ingredient_name: 'Lettuce' },
        { ingredient_name: 'Tomato' },
        { ingredient_name: 'Mayonnaise' },
      ]);
    });
};
