const items = require('../Items');

function getItems(req, reply) {
    reply.send(items);
}

function getItem(req, reply) {
    const { id } = req.params;
    const item = items.find((item) => item.id === id);
    reply.send(item);
}

module.exports = {
  getItems,
  getItem
}
