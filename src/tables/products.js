const database = require("../config/db")

const productsTable = async () => {
    await database.execute(
        `CREATE TABLE IF NOT EXISTS products(
            id INT PRIMARY KEY AUTO_INCREMENT,
            id_user INT NOT NULL,
            name VARCHAR(255) NOT NULL,
            FOREIGN KEY (id_user) REFERENCES users(id)
            ON DELETE CASCADE
        )`
    )
}

module.exports = productsTable()