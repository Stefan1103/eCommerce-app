const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
	name: { type: String },
	desc: { type: String },
	category: { type: String },
	calories: { type: String },
	price: { type: String },
	image: { type: String },
	discount: { type: String },
	onSale: { type: Boolean },
});

module.exports = Products = mongoose.model('Products', ProductsSchema);
