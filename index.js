const app = require('./app.js');

const port = process.env.PORT || 1337;

// npm run dev
// npm run test

const carro = {
    name: "Ferrari",
    year: 2019
}

const output = JSON.stringify(carro)
console.log(output)

app.listen(port, () => {
	console.log('Server is running in port '+port);
});