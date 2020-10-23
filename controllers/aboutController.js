const express = require('express');
const router = express.Router();
const About = require('../models/about.js')

router.get('/', (req, res)=>{
	res.render('about/index.ejs');
});

router.get('/:id', (req, res)=>{
	About.findById(req.params.id, (err, foundAbout)=>{
		res.render('about/index.ejs', {
			about: foundAbout
		});
	});
});




module.exports = router;
