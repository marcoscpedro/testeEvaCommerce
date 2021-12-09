const User = require("../models/user")

const create = async (req,res) => {
    const newUser = await User.create(req.body)
    res.send(newUser)
}

const login = async (req,res) => {
    const userLogin = await User.login(req.body)
    res.send(userLogin)
}




module.exports = {
    create,
    login
}