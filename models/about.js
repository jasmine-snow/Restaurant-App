const mongoose = require('mongoose');

const aboutSchema = mongoose.Schema({
	email: String
});

const About = mongoose.model('About', aboutSchema);

module.exports = About;
