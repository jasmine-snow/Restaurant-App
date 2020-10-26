const mongoose = require('mongoose');
const moment = require('moment');
const reservationSchema = mongoose.Schema({
	name: {type: String, required: true},
  email: {type: String},
  phone: {type: Number, required: true},
  date: {type: Date, moment: moment, required: true},
  seating: {type: Number, required: true},
  message: {type: String}


});
const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
