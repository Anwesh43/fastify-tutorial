async function basicRoutes(fastify, options) {
    fastify.get('/name', async (req, res) => {
        res.send(`My name is ${req.query.value}`)
    })
    fastify.get('/aelo', async (req, res) => {
        res.send('Aelo world')
    })
    fastify.post('/put/:key/:data', (req, res) => {
        const {key, data} = req.params
        fastify.inmemorydb.put(key, data)
        res.send(`put data in the ${key} successfully`)
    })
    fastify.get('/get/:key', (req, res) => {
        res.send(`got data ${fastify.inmemorydb.get(req.params.key)}`)
    })
}
module.exports = basicRoutes
