const express = require("express")
const router = express.Router()
app.use(express.json())
const UserController = require("../controllers/user")

router.post("/user", UserController.create)


module.exports = router