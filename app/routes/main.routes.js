const router = require('express').Router()
const mainController = require('../controllers/main.controller')

module.exports = router

router.get('/', mainController.readAll)
//router.get('/', mainController.readAll)