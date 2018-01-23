const express = require('express');
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const app = express()
const router = require('./app/routes')
const mongo = require('./app/mongodb')
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT || 80

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(router)

// app.listen(port, ()=> {
//     console.log('live from ' + port + ' @joburg')
// })

mongo.connect(process.env.MONGODB_URL) 
    // if I decide to do indexing later .then(()=> configMongoDB(app))
    .then(()=> app.listen(port))
    .then(()=> console.log(`all about that port: ${port}`))
    .catch((err)=> {
        console.error(err)
        process.exit(1)
    })