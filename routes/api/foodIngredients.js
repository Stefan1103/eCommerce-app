const express = require('express');
const router = express.Router();

// @route GET api/foodIngredients
// desc Test route
// @access Public

router.get('/', (req, res) => res.send('FOODingredients route'));

module.exports = router;
