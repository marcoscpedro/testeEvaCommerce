const database = require("../config/db")
const fs = require("fs")
const productsTable = require("../tables/products")
const productImagesTable = require("../tables/productImages")

class Product {

    static async create(Obj, files, id){
        const sql = `INSERT INTO products(id_user, name) VALUES(?,?)`
        const values = [id, Obj.name]
        try {
            const product = await database.execute(sql, values)    
            await this.storeImages(files, product[0].insertId)
            return {
                message:"produto criado",
                id:product[0].insertId,
                id_user:values[0],
                name:values[1]
            }
        } catch (err) {
            return {
                error: true,
                message: err
            }
        }
    }


    static async storeImages(arrayImages, id_product){
        const newImage = Promise.all(arrayImages.map(el => {
            const values = this.sortArrayImages(el, id_product)
            const sql = `INSERT INTO productImages(id_product,image) VALUES (?,?)`
            await database.execute(sql, values)
        }))
    }

    static sortArrayImages(image, id){
        const values = []
        const element = this.getFile(image)
        values.push(id, element)
        return values
    }

    static getFile(file) {
        const data = fs.readFileSync(file.path)
        const newData = Buffer.from(data).toString("base64")
        fs.unlink(file.path, () => {})
        return newData
    }



}

module.exports = Product