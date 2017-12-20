const router = require('express').Router()
const messagesController = require('../controllers/messages.controller')

module.exports = router

router.get('/', messagesController.readAll)
router.post('/', messagesController.create)