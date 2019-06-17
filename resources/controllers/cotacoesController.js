const cotacao = require('../util/cotacao');

function index(req, res) {
	res.render('cotacoes', {
		title: 'Cotações'
	});
}

function find(req, res) {

	if(req.query.ativo === undefined)
		res.status(400).json({message: "O ativo deve ser informado"});

	const active = req.query.ativo.toUpperCase();


	cotacao(active, (data, err) => {
		if(data)
			res.status(200).json(data);
		else
			res.status(500).json(err);
	})
}

module.exports = {
	index: index,
	find: find
}