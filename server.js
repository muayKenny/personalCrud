const express = require('express');
//const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const app = express()
const router = require('./app/routes')

const port = 8082

app.use(router)

app.listen(port, ()=> {
    console.log('live from ' + port + ' @joburg')
})