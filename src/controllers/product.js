const jwt = require('../config/jwt')
const Product = require("../models/product")

const create = async (req,res) => {
    jwt.verify(req.headers.authorization)
    const id = await jwt.getUserId(req.headers.authorization)
    const product = await Product.create(req.body, req.files, id)
    res.send(product)
}

module.exports = {
    create
}