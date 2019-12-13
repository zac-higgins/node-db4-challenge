const express = require('express');
const recipes = require('./recipesModel');
const router = express.Router();

//----------POST Requests----------//

//----------GET Requests----------//
router.get('/', (req, res) => {
    recipes.getRecipes()
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes' });
        });
});

router.get('/:id/shopping-list', (req, res) => {
    const { id } = req.params;

    recipes.findById(id)
        .then(recipe => {
            if (recipe) {
                recipes.getShoppingList(id)
                    .then(list => {
                        res.status(200).json(list)
                    })
            } else {
                res.status(404).json({ message: 'Could not find recipe with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes' });
        });
});

router.get('/:id/steps', (req, res) => {
    const { id } = req.params;

    recipes.findById(id)
        .then(recipe => {
            if (recipe) {
                recipes.getInstructions(id)
                    .then(steps => {
                        res.status(200).json(steps)
                    })
            } else {
                res.status(404).json({ message: 'Could not find recipe with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get steps' });
        });
});
//----------PUT Requests----------//

//----------DELETE Requests----------//

module.exports = router;