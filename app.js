const path = require('path');
const express = require('express');
const hbs = require('hbs');

const cotacaoRouter = require('./src/routes/cotacoes');

const app = express();

const public_path = path.join(__dirname, './public');
const views_path = path.join(__dirname, './resources/views');
const partials_path = path.join(__dirname, './resources/partials');
const controllers_path = path.join(__dirname, './resources/controllers');

const index_controller = require(controllers_path+'/indexController.js');
const cotacoes_controller = require(controllers_path+'/cotacoesController.js');
// const pokedex_controller = require(controllers_path+'/pokedexController.js');
// const about_controller = require(controllers_path+'/aboutController.js');

app.set('view engine', 'hbs');
app.set('views', views_path);
hbs.registerPartials(partials_path);

app.use(express.static(public_path));
app.use(cotacaoRouter);

// Routes
// Index Routes
app.get('', index_controller.index);

// About Routes
app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About'
	});
});

// Error Handler
app.get('*', (req, res) => {
	res.render('404', {
		title: 'Page Not Found',
		errorMessage: 'URL não especificada.'
	});
});

const port = process.env.PORT || 1337;

app.listen(port, () => {
	console.log('Server is running in port '+port);
});