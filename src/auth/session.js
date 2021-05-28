const redis = require('redis')
const connectRedis = require('connect-redis')
const session = require('express-session')

const RedisStore = connectRedis(session)
const redisClient = redis.createClient({
    host: 'localhost'
})

const ttl = 60 * 60 * 1000

module.exports = session({
    store: new RedisStore({client: redisClient}),
    secret: 'secret cat',
    resave: true,
    rolling: true,
    saveUninitialized: false,
    cookie: {
        httpOnly:false,
        maxAge: ttl
    }
})