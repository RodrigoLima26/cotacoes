const path = require('path');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

require('./src/db/mongoose');

const cotacaoRouter = require('./src/routes/cotacoes');
const usersRouter = require('./src/routes/user');
const tasksRouter = require('./src/routes/task');

const app = express();

const public_path = path.join(__dirname, './public');
const views_path = path.join(__dirname, './resources/views');
const partials_path = path.join(__dirname, './resources/partials');
const controllers_path = path.join(__dirname, './src/controllers');

const index_controller = require(controllers_path+'/indexController.js');

app.set('view engine', 'hbs');
app.set('views', views_path);
hbs.registerPartials(partials_path);

app.use (bodyParser.json({ type: "*/*" }));

app.use(express.static(public_path));

app.use(cotacaoRouter);
app.use(usersRouter);
app.use(tasksRouter);

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

module.exports = app;