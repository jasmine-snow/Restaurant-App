const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
	name: {type: String, required: true},
  email: {type: String},
  phone: {type: Number, required: true},
  date: {type: Date, required: true},
  seating: {type: Number, required: true},
  message: {type: String}


});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
