const express = require('express');
const router = express.Router();
const Categories = require('../../models/Categories');

// @route GET api/categories
// desc GET ALL cagtegories
// @access Public

router.get('/', async (req, res) => {
	try {
		const categories = await Categories.find();
		res.json(categories);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

// admin to add new category to the db
///////////////////////////////////////////////////
// @route POST api/categories
// desc POST POST new category
// @access Public

router.post('/new', async (req, res) => {
	try {
		const newCategory = Categories(req.body);

		const savedCategory = await newCategory.save();
		res.json(savedCategory);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
