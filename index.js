require('dotenv').config()
const express = require('express');
const app = express();
const userRoutes = require("./src/routes/user")



app.use('/evaCommerce', userRoutes)



app.listen(3030, () => {
    console.log("Server on em http://localhost:3030")
})