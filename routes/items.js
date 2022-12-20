const {getItems, getItem, addItem} = require('../controllers/items');

// Item schema
const Item = {
    type: 'object',
    properties: {
      id: { type: 'string' }, // comment out and is not returned
      name: { type: 'string' }, // can also coarse value
    },
  }

// Options for get all items
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item,
            },
        },
    },
    handler: getItems
}

const getItemOps = {
    schema: {
        response: {
            200: Item
        }
    },
    handler: getItem
}

const addItemOps = {
    schema: {
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                name: {type: 'string'}
            }
        },
        response: {
            201: Item
        }
    },
    handler: addItem
}

function itemRoutes(fastify, options, done) {
    fastify.get('/items', getItemsOpts);
    fastify.get('/items/:id', getItemOps);
    fastify.post('/items', addItemOps);

    done()
}

module.exports = itemRoutes
