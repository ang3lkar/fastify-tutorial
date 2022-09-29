const items = require('../Items')

function getItems() {

}

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
    handler: function(req, reply) {
        reply.send(items)
    } 
}

function itemRoutes(fastify, options, done) {
    fastify.get('/items', getItemsOpts) // uses a handler method defined in getItemsOpts

    fastify.get('/items/:id', (req, reply) => {
        const { id } = req.params
        const item = items.find((item) => item.id === id)
        reply.send(item)
    })

    done()
}

module.exports = itemRoutes
