const express = require('express')
const ifsc = require('ifsc')
const bodyParser = require('body-parser')
const { urlencoded, json } = require('express')
const { MONGOURI } = require('./config/keys')
const mongoose = require('mongoose')
const Bank = require('./model/bank')
const User=require('./model/user')
const path=require('path')



const PORT = process.env.PORT || 4000
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))




mongoose.connect(MONGOURI, (
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
))

mongoose.connection.on('connected', () => {
    console.log("connected to mongodb")
})
mongoose.connection.on('error', (err) => {
    console.log("err in connecting", err)
})




app.use(express.json())
app.use(require('./routes/ifscauth'))
app.use(require('./routes/addbank'))
app.use(require('./routes/user'))



if (process.env.NODE_ENV == "production") {
    app.use(express.static('client/build'))
  
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


app.listen(PORT, () => {
    console.log("server startedat"+PORT)
})
