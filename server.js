const express = require('express');

const app = express();


const mongoose = require('mongoose');

const methodOverride = require('method-override')

require('dotenv').config()


const PORT = process.env.PORT


app.use(methodOverride('_method'));

app.use(express.static('public'))

app.use(express.urlencoded({extended:false}));



const mongodbURI = process.env.MONGODBURI


mongoose.connect(mongodbURI, { useNewUrlParser: true}, { useUnifiedTopology: true });
mongoose.connection.on('open', ()=>{
	console.log('connected to mongo', mongodbURI);
});
mongoose.connection.on('error', (error) => {
	console.log('error', error)
})

const menuController = require('./controllers/menuController');
app.use('/menu', menuController);

const aboutController = require('./controllers/aboutController');
app.use('/about', aboutController);

const reservationsController = require('./controllers/reservationsController');
app.use('/reservations', reservationsController);

app.get('/', (req, res)=>{
	res.render('/reservations/index.ejs');
});

app.get('/home', (req, res)=>{
	res.render('home.ejs');
});

app.listen(PORT, ()=> {
	console.log("Listening to port:", PORT)
})
