const express = require('express');
const router = express.Router();
const Products = require('../../models/Products');

// @route GET api/products
// desc Test route
// @access Public

// router.get('/', (req, res) => {
// 	console.log(req.body);
// 	res.send('products route');
// });

// @route GET api/products
// desc GET 10 products
// @access Public

router.get('/', async (req, res) => {
	try {
		const products = await Products.find().limit(14);
		res.json(products);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

// @route GET api/products/product/_id
// desc GET product by ID
// @access Public

router.get('/product/:product_id', async (req, res) => {
	try {
		const product = await Products.findOne({ _id: req.params.product_id });
		if (!product) return res.status(400).json({ msg: 'no details for this product !' });
		res.json(product);
	} catch (error) {
		console.error(error.message);
		if (error.kind == 'ObjectID') {
			return res.status(400).json({ msg: 'no details for this product !' });
		}
		res.status(500).send('Server Error');
	}
});
// @route GET api/Products/s/:product_name
// desc GET product by name
// @access Public

router.get('/s/:product_name', async (req, res) => {
	try {
		const product = await Products.find({ name: req.params.product_name });
		if (!product) return res.status(400).json({ msg: 'no product found!' });
		res.json(product);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

// @route GET api/Products/category
// desc GET product by Category
// @access Public

router.get('/:product_cat', async (req, res) => {
	try {
		const product_cat = await Products.find({ category: `${req.params.product_cat}` }).limit(20);
		res.json(product_cat);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

// admin to add new food products to the db
///////////////////////////////////////////////////
// @route POST api/Products
// desc POST POST new product
// @access Public

router.post('/new', async (req, res) => {
	try {
		const newProduct = Products(req.body);

		const savedProduct = await newProduct.save();
		res.json(savedProduct);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
