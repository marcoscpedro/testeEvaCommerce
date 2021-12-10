const jwt = require('../config/jwt')
const Product = require("../models/product")

const create = async (req,res) => {
    jwt.verify(req.headers.authorization)
    if (req.files.length > 6 || req.files.length < 1){
        res.sendStatus(403)
    }
    const id = await jwt.getUserId(req.headers.authorization)
    const product = await Product.create(req.body, req.files, id)
    res.send(product)
}

module.exports = {
    create
}