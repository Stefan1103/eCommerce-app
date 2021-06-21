const mongoose = require('mongoose');

const FoodIngredientsSchema = new mongoose.Schema({
	name: { type: String },
	desc: { type: String },
	category: { type: String },
	calories: { type: String },
	price: { type: String },
	image: { type: String },
});

module.exports = FoodIngredient = mongoose.model('foodIngredient', FoodIngredientsSchema);
