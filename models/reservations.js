const mongoose = require('mongoose');

const reservationsSchema = mongoose.Schema({
	name: String
});

const Reservations = mongoose.model('Reservations', reservationsSchema);

module.exports = Reservations;
