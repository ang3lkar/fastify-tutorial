let items = require('../Items');
const {v4:uuidv4} = require('uuid')

function getItems(req, reply) {
    reply.send(items);
}

function getItem(req, reply) {
    const { id } = req.params;
    const item = items.find((item) => item.id === id);
    reply.send(item);
}

const addItem = (req, reply) => {
  const {name} = req.body;
  const item = {
    id: uuidv4(),
    name: name
  }

  items = [...items, item];

  reply.code(201).send(item);
}

const deleteItem = (req, reply) => {
  const {id} = req.params;

  items = items.filter((item) => item.id !== id);

  reply.send({message: `Item ${id} has been removed`});
}

module.exports = {
  getItems,
  getItem,
  addItem,
  deleteItem
}
