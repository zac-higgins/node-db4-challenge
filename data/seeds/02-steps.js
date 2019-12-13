
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          step_number: 1,
          instructions: 'Preheat oven to 350 degrees F (175 degrees C).',
          recipe_id: 1
        },
        {
          step_number: 2,
          instructions: 'Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.',
          recipe_id: 1
        },
        {
          step_number: 3,
          instructions: 'Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.',
          recipe_id: 1
        },
        {
          step_number: 1,
          instructions: 'Spread the peanut butter on one piece of bread.',
          recipe_id: 2
        },
        {
          step_number: 2,
          instructions: 'Spread the jelly on the other side.',
          recipe_id: 2
        },
        {
          step_number: 3,
          instructions: 'Put the two pieces of bread together to form a sandwich.',
          recipe_id: 2
        },
        {
          step_number: 1,
          instructions: 'Cook the bacon in a large, deep skillet over medium-high heat until evenly browned, about 10 minutes. Drain the bacon slices on a paper towel-lined plate.',
          recipe_id: 3
        },
        {
          step_number: 2,
          instructions: 'Arrange the cooked bacon, lettuce, and tomato slices on one slice of bread. Spread one side of remaining bread slice with the mayonnaise. Bring the two pieces together to make a sandwich.',
          recipe_id: 3
        },

      ]);
    });
};
