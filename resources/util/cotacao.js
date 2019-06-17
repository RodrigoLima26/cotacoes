const request = require('request');
const api_token = "VOruMT7KqUbkT5h3zKsPQprJl3LPORMEhcfooZWGQHaPefLSLE7SSEVb0bou"

const cotacao = (symbol, callback) => {
	
	let url = `https://api.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=${api_token}`;

	console.log(symbol)

	request({url: url, json: true}, (err, response) => {

		if(err) {
			let error = {
				message: 'O Ativo deve ser informado'
			}
			return callback(null, error);
		}
		
		if(response.body.data === undefined) {

			let error = {
				message: 'Data not Found'
			}
			return callback(null, error);
		}

		let parseJSON = response.body.data[0];

		let {symbol, price_open, price, day_high, day_low} = parseJSON;

		let data = {symbol, price_open, price, day_high, day_low};

		callback(data, null);
	})

}

module.exports = cotacao;