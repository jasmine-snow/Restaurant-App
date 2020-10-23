const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
	name: String
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
