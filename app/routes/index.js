const router = require('express').Router()
const mainRoutes = require('./main.routes')
const messageRoutes = require('./messages.routes')
const content = require('./content.routes')

module.exports = router
router.use('/api/main', mainRoutes)
router.use('/api/messages', messageRoutes)
router.use(content)


function useApiErrorHandlers(router) {
    //send 404 if there's weird

    router.use('/api/*', (req, res, next) => {
        res.sendStatus(404)
    })

    router.use((err, req, res, next) => {
        // if the error object doesn't exist
        if (!err) {
            return next()
        }

        // log it
        console.error(err.stack)

        res.sendStatus(500)
    })
}