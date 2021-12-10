require('dotenv').config()
const express = require('express');
const app = express();
app.use(express.json())
const userRoutes = require("./src/routes/user")
const productRoutes = require('./src/routes/product')


app.use('/evaCommerce', userRoutes)
app.use('/evaCommerce', productRoutes)



app.listen(3030, () => {
    console.log("Server on em http://localhost:3030")
})