const mainService = require('../services/main.service')

module.exports = {
    readAll: readAll
}

function readAll(req, res){
    res.send("<h1>h1 fundamentally important programming concept </h1>")
}