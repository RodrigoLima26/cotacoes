const User = require('../models/users');

async function get(req, res) {

    if(req.query.id) {
        try {
            let user = await User.findById(req.query.id);

            res.status(201).send(user);
        }
        catch(err) {
            res.status(400).send();
        }
    }
    else {
        let users = await User.find({});

        res.status(201).send(users);
    }
}

async function save(req, res) {
    
    if(req.query.id) {
        let params = Object.keys(req.body);
        let allowedParams = ['name', 'email', 'password', 'age'];
        let isValidOperation = params.every((update) => allowedParams.includes(update));

        if(!isValidOperation)
            return res.status(400).send({ error: "Esses campos não podem ser atualizados" });
        else {
            try {
                let user = await User.findByIdAndUpdate(req.query.id, req.body, {new: true, runValidators: true});

                if(!user)
                    return res.status(404).send();
                else
                    res.send(user);
            }
            catch(err) {
                res.status(500).send(err);
            }
        }

    }
    else {

        const user = new User(req.body);
        try {
            await user.save();
            res.status(200).send(user);
        } catch(err) {
            res.status(400).send(err);
        }
    }
}

module.exports = {
	get: get,
	save: save
}