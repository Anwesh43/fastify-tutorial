const fastifyPlugin = require('fastify-plugin')
class InMemoryDb {

    constructor() {
        this.data = {}
    }

    put(key, data) {
        this.data[key] = data
    }

    get(key) {
        return this.data[key]
    }

    addToList(key, data) {
        if (!(key in this.data)) {
            this.data[key] = []
        }
        this.data[key].push(data)
    }

    popFromFirst(key) {
        if (!(key in this.data) || this.data[key].length == 0) {
            return null
        }
        return this.data[key].splice(0, 1)[0]
    }

    popFromLast(key) {
        if (!(key in this.data) || this.data[key].length == 0) {
            return null
        }
        return this.data[key].splice(-1, 1)[0]
    }
}

async function getInMemoryDB(fastify, options) {
    const inmemoryDb = new InMemoryDb()
    fastify.decorate('inmemorydb', inmemoryDb)
}

module.exports = fastifyPlugin(getInMemoryDB)
