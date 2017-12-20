const mongodb = require('../mongodb')
const conn = mongodb.connection
//const ObjectId = mongodb.ObjectId

module.exports ={
    readAll: _readAll,
    create: _create
}

function _readAll() {
    return conn.db().collection('messages').find().toArray()
        .then(messages => {
            for (message in messages){
                message._id = message._id.toString()
            }
            return messages
        })
}

function _create(body){
    return conn.db().collection('messages').insert(body)
        .then(result => result.insertedIds[0].toString())
}