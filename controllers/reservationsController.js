const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservations.js')


// sends home page to reservation DO NOT CHANGE
router.get('/new', (req, res)=>{
	res.render('reservations/new.ejs');
});

// route works DO NOT CHANGE
router.post('/index', (req, res) => {
	Reservation.create(req.body, (error, createdReservations) => {
		if (error){
			console.log(error)
		} else {
			console.log('createdReservations')
			console.log(createdReservations)
			res.redirect('/reservations/index')
		}

	})
})

//now working DO NOT CHANGE
router.get('/index', (req, res)=>{
	Reservation.find({}, (error, foundReservations)=>{
		if (error){
			console.log(error)
		}else{
			console.log('foundReservations')
			console.log(foundReservations)
			res.render('reservations/index.ejs', {
				reservations: foundReservations

			});
		}

	})
});

//reservation goes to show
// router.get('/:id', (req, res)=>{
// 	Reservations.findById(req.params.id, (err, foundReservations)=>{
// 		res.render('reservations/show.ejs', {
// 			reservations: foundReservations
// 		});
// 	});
// });

module.exports = router;
