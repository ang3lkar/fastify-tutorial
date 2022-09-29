const fastify = require('fastify')({ logger: true })

const PORT = 5000

// simplest route
fastify.get('/test', (req, reply) => {
  reply.send({ test: 'hello'})
})

// route via custom plugin
fastify.register(require('./routes/items'))

const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
