const express = require('express');
const router = express.Router();
const Reservations = require('../models/reservations.js')

router.get('/', (req, res)=>{
	res.render('reservations/index.ejs');
});




router.get('/:id', (req, res)=>{
	Reservations.findById(req.params.id, (err, foundReservations)=>{
		res.render('reservations/index.ejs', {
			reservations: foundReservations
		});
	});
});
module.exports = router;
