const fastify = require("fastify")({
    logger : true
})

// routes
const routes = require("./routes")


// db
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/fastify")
.then( () => console.log("mongo connected") )
.catch(err =>  console.log(err) )


// routes
fastify.get('/', async (request,reply) => {
    return {visitor : "hey there"}
} )

routes.forEach( (route,index) => {
    fastify.route(route)
} )

const address = 3000

const start = async () => {
    try {
        await fastify.listen(address)
        fastify.log.info(`Server at ${address}`)
    } catch (err) {
        console.log(err)
    }
}

start()
