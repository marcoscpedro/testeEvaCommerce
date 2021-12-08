require('dotenv').config()
const express = require('express');
const app = express();


app.listen(3030, () => {
    console.log("Server on em http://localhost:3000")
})