const http = require('http')
const bodyParser = require('body-parser')


const path = require('path')

const express = require('express');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();


app.use(bodyParser.urlencoded({extended: false})); 

app.use(express.static(path.join(__dirname, 'public'))) // allows to set static files i.e files that go direct to the file system 

app.use('/admin', adminRoutes) // '/admin' is added to filter the path.

app.use(shopRoutes)

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "views", "PageNotFound.html"))
})

const server = http.createServer(app)


server.listen(3000)