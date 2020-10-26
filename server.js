const express = require('express');

const app = express();

const PORT = 3000;

const mongoose = require('mongoose');

const methodOverride = require('method-override')

app.use(methodOverride('_method'));


app.use(express.urlencoded({extended:false}));



const mongodbURI = 'mongodb://localhost:27017/reservations'

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
	res.render('index.ejs');
});

app.get('/home', (req, res)=>{
	res.render('home.ejs');
});

app.listen(PORT, ()=> {
	console.log("Listening to port")
})
