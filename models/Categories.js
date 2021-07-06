const mongoose = require('mongoose');

const CategoriesSchema = new mongoose.Schema({
	category: { type: String },
});

module.exports = Categories = mongoose.model('Categories', CategoriesSchema);
