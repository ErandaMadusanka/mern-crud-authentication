const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const mongoose = require('mongoose')
const User = mongoose.model("User")

module.exports = (req, res, next) => {
    const {authorization} = req.headers

    //authorization === bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2JkMmI1ZWRmOTZkYzYyMjZiODJlNzgi 

    if(!authorization){
        return res.status(401).json({ error: "You must be logged in"})
    }

    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, JWT_SECRET, (error, payload) => {
        if(error){
            return res.status(401).json({ error: "You must be logged in"})
        }
        const {_id} = payload

        User.findById(_id).then(userData => {
            req.user = userData
            console.log(req)
            next()
        })
    })
} 