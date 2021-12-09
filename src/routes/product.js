const express = require("express")
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/'})
const productController = require("../controllers/product")


router.post("/product", upload.array("images", maxCount = 5), productController.create)

module.exports = router