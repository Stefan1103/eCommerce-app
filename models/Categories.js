const mongoose = require('mongoose');

const CategoriesSchema = new mongoose.Schema({
	category: { type: String, unique: true },
});

module.exports = Categories = mongoose.model('Categories', CategoriesSchema);
