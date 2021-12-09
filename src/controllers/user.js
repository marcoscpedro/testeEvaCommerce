const User = require("../models/user")

const create = async (req,res) => {
    const newUser = User.create(req.body)
    res.send(newUser)
}




module.exports = {
    create
}