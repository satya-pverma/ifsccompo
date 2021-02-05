const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/keys')
const mongoose = require('mongoose')
const User = mongoose.model("User")



const isAdmin = (req, res, next) => {
    console.log(typeof(req.user.admin))

    if (req.user.admin==='true') {
      return next();
    }
    return res.status(401).send({ msg: 'Admin Token is not valid.' })
  }
  
  module.exports =  isAdmin
  