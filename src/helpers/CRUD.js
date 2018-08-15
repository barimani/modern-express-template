

export const CRUD = (app, model, url) => {
    app.get(url, getAll(model));
    app.post(url, create(model));
    app.get(url + '/:id', get(model));
    app.put(url + '/:id', patch(model)); //TODO update should be implemented
    app.patch(url + '/:id', patch(model));
    app.delete(url + '/:id', remove(model));
};

const getAll = model => (req, res) => {
    model.findAll().then(items => res.send(items));
};

const get = model => (req, res) => {
    const {id} = req.params;
    model.findById().then(item => {
        if (!item) {
            res.status(400);
            res.send({message: `No such entity with id ${id} found`});
            return;
        }
        res.send(item)
    });
};


const create = model => (req, res) => {
    model.create(req.body).then(item => res.send(item));
};

const patch = model => (req, res) => {
    const {id} = req.params;
    model.findById(id).then(item => {
        if (!item) {
            res.status(400);
            res.send({message: `No such entity with id ${id} found`});
            return;
        }
        item.update(req.body).then(updatedItem => {
            res.send(updatedItem);
        })
    })
};

const remove = model => (req, res) => {
    const {id} = req.params;
    model.destroy({where: {id}})
        .then(() => res.send(200))
};