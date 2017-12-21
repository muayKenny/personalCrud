const messagesService = require('../services/messages.service')
const apiPrefix = '/api/messages'

module.exports = {
    readAll: _readAll,
    create: _create
}

function _readAll(req, res) {
    messagesService.readAll()
        .then(messages => {
            res.json(messages)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        });
}

function _create(req, res) {
    messagesService.create(req.body)
        .then(id =>{
            res.status(201)
                .location(`${apiPrefix}/${id}`)
                .json(id)
        })
}