const express = require('express');
const router = express.Router();
const FoodIngredients = require('../../models/FoodIngredients');

// @route GET api/foodIngredients
// desc Test route
// @access Public

// router.get('/', (req, res) => {
// 	console.log(req.body);
// 	res.send('FOODingredients route');
// });

// module.exports = router;

// @route GET api/foodIngredients
// desc GET ALL FOOD INGREDIENTS
// @access Public

router.get('/', async (req, res) => {
	try {
		const ingredients = await FoodIngredients.find().limit(10);
		res.json(ingredients);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

// @route GET api/foodIngredients/ingredient/_id
// desc GET Ingredient by ID
// @access Public

router.get('/ingredient/:ingredient_id', async (req, res) => {
	try {
		const ingredient = await FoodIngredients.findOne({ _id: req.params.ingredient_id });
		if (!ingredient) return res.status(400).json({ msg: 'no details for this ingredient !' });
		res.json(ingredient);
	} catch (error) {
		console.error(error.message);
		if (error.kind == 'ObjectID') {
			return res.status(400).json({ msg: 'no details for this ingredient !' });
		}
		res.status(500).send('Server Error');
	}
});

// @route GET api/foodIngredients/category
// desc GET Ingredient by Category
// @access Public

router.get('/:ingredient_cat', async (req, res) => {
	try {
		const ingredients_cat = await FoodIngredients.find({ category: `${req.params.ingredient_cat}` });
		res.json(ingredients_cat);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

// admin to add new food ingredients to the db (if we make users model)
///////////////////////////////////////////////////
// @route POST api/foodIngredients
// desc POST POST new ingredients
// @access Public

// router.post('/new', async (req, res) => {
// 	try {
// 		const newIngredients = FoodIngredients(req.body);

// 		const savedIngredient = await newIngredients.save();
// 		res.json(savedIngredient);
// 	} catch (error) {
// 		console.error(error.message);
// 		res.status(500).send('Server Error');
// 	}
// });

module.exports = router;
