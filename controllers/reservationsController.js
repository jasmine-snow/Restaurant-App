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


router.get('/:id', (req, res)=>{
	Reservation.findById(req.params.id, (err, foundReservations)=>{
		res.render('reservations/show.ejs', {
			reservations: foundReservations,
		});
	});
});

router.delete('/:id', (req, res)=>{
	Reservation.findByIdAndRemove(req.params.id, ()=>{
		res.redirect('/reservations/index');
	});
});

router.get('/:id/edit', (req, res)=>{
	Reservation.findById(req.params.id, (err, foundReservations)=>{
		res.render('reservations/edit.ejs', {
			reservations: foundReservations
		});
	});
});

router.put('/:id', (req, res)=>{
	Reservation.findByIdAndUpdate(req.params.id, req.body, ()=>{
		res.redirect('/reservations/index');
	});
});
// router.get('/show:id', (req, res)=>{
// 		res.render('reservations/show.ejs')
// });


module.exports = router;
