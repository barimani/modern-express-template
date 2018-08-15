

export const CRUD = (app, model, url) => {
    app.get(url, getAll(model));
    app.post(url, create(model));
    app.get(url + '/:itemId', get(model));
    app.put(url + '/:itemId', patch(model)); //TODO update should be implemented
    app.patch(url + '/:itemId', patch(model));
    app.delete(url + '/:itemId', remove(model));
};

const getAll = model => (req, res) => {
    model.findAll().then(items => res.send(items));
};

const get = model => (req, res) => {
    const {itemId} = req.params;
    model.findById(itemId).then(item => {
        if (!item) {
            res.status(400);
            res.send({message: `No such entity with id ${itemId} found`});
            return;
        }
        res.send(item)
    });
};


const create = model => (req, res) => {
    model.create(req.body).then(item => res.send(item));
};

const patch = model => (req, res) => {
    const {itemId} = req.params;
    model.findById(itemId).then(item => {
        if (!item) {
            res.status(400);
            res.send({message: `No such entity with itemId ${itemId} found`});
            return;
        }
        item.update(req.body).then(updatedItem => {
            res.send(updatedItem);
        })
    })
};

const remove = model => (req, res) => {
    const {itemId} = req.params;
    model.destroy({where: {id: itemId}})
        .then(() => res.send(200))
};