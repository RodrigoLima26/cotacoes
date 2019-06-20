const app = require('./app.js');

const port = process.env.PORT || 1337;

// npm run dev
// npm run test

app.listen(port, () => {
	console.log('Server is running in port '+port);
});