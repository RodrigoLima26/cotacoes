const Task = require('../models/tasks');

async function get(req, res) {

    if(req.query.id) {
        try {
            let task = await Task.findById(req.query.id);

            res.status(201).send(task);
        }
        catch(err) {
            res.status(400).send();
        }
    }
    else {
        let tasks = await Task.find({});

        res.status(201).send(tasks);
    }
}

async function save(req, res) {

    if(req.query.id) {
        let params = Object.keys(req.body);
        let allowedParams = ['description', 'completed'];
        let isValidOperation = params.every((update) => allowedParams.includes(update));

        if(!isValidOperation)
            return res.status(400).send({ error: "Esses campos não podem ser atualizados" });
        else {
            try {
                let task = await Task.findByIdAndUpdate(req.query.id, req.body, {new: true, runValidators: true});

                if(!task)
                    return res.status(404).send();
                else
                    res.send(task);
            }
            catch(err) {
                res.status(500).send(err);
            }
        }

    }
    else {

        const task = new Task(req.body);
        try {
            await task.save();
            res.status(200).send(task);
        } catch(err) {
            res.status(400).send(err);
        }
    }
}

async function remove(req, res) {
    try {
        if(req.query.id) {
            let task = await Task.findByIdAndDelete(req.query.id);
            
            if(!user) {
                res.status(404).send({message: 'Task não encontrada'});
            }

            res.send(task);
        }
        else
            res.status(404).send({message: 'Task não encontrada'});
    }
    catch(err) {
        res.status(500).send(err);
    }
}

module.exports = {
	get: get,
    save: save,
    remove: remove
}