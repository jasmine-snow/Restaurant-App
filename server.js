const express = require('express');

const app = express();

const PORT = 3000;

const mongoose = require('mongoose');




mongoose.connect('mongodb://localhost:27017/blog');
mongoose.connection.once('open', ()=>{
	console.log('connected to mongo');
});

const menuController = require('./controllers/menuController');
app.use('/menu', menuController);

const aboutController = require('./controllers/aboutController');
app.use('/about', aboutController);

const reservationsController = require('./controllers/reservationsController');
app.use('/reservations', reservationsController);

app.get('/home', (req, res)=>{
	res.render('home.ejs');
});

app.listen(PORT, ()=> {
	console.log("Listening to port")
})
