const db = require('../data/db-config')

module.exports = {
    getRecipes,
    findById,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function findById(id) {
    return db('recipes')
        .where({ id })
        .first();
}

function getShoppingList(recipe_id) {
    return db('recipe_ingredients')
        .select('recipe_name', 'ingredient_name', 'measure_quantity', 'measure_unit')
        .join('recipes', 'recipe_ingredients.recipe_id', 'recipes.id')
        .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
        .where('recipe_id', recipe_id)

}

function getInstructions(recipe_id) {
    return db('steps')
        .where('recipe_id', recipe_id)
        .orderBy('step_number')

}