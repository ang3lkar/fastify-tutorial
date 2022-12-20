const {getItems, getItem, addItem, deleteItem} = require('../controllers/items');

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

const deleteItemOps = {
    schema: {
        response: {
            204: {
                type: 'object',
                message: {
                    type: 'string'
                }
            }
        }
    },
    handler: deleteItem
}

function itemRoutes(fastify, options, done) {
    fastify.get('/items', getItemsOpts);
    fastify.get('/items/:id', getItemOps);
    fastify.post('/items', addItemOps);
    fastify.delete('/items/:id', deleteItemOps);

    done()
}

module.exports = itemRoutes
