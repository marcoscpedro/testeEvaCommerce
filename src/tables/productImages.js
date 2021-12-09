const database = require("../config/db")

const productImagesTable = async () => {
    await database.execute(
        `CREATE TABLE IF NOT EXISTS productImages(
            id INT PRIMARY KEY AUTO_INCREMENT,
            id_product INT NOT NULL,
            image LONGTEXT NOT NULL,
            FOREIGN KEY (id_product) REFERENCES products(id)
            ON DELETE CASCADE
        )`
    )
}

module.exports = productImagesTable()