const fastify = require('fastify')
const server = fastify({logger : true})
const basicRoutes = require('./basic-routes')
const inmemoryPlugin = require('./inmemory-plugin')
server.register(inmemoryPlugin)
server.register(basicRoutes)


const startServer = async() => {
    try {
        await server.listen(3000)
        server.log.info("started server on 3000")
    } catch(err) {
        server.log.error(`falied to start server due to ${JSON.stringify(err)}`)
        process.exit(1)
    }
}
startServer()
server.listen(3000)
