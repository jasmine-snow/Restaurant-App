const express = require('express');
const router = express.Router();
const Menu = require('../models/menu.js')

router.get('/', (req, res)=>{
	res.render('menu/index.ejs');
});




router.get('/:id', (req, res)=>{
	Menu.findById(req.params.id, (err, foundMenu)=>{
		res.render('menu/show.ejs', {
			menu: foundMenu
		});
	});
});
module.exports = router;
