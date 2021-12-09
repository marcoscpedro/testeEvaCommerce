const database = require("../config/db")

const userTable = async () => {
    (await database).execute(
        `CREATE TABLE IF NOT EXISTS users(
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(254) NOT NULL,
            email VARCHAR(254) UNIQUE NOT NULL,
            password VARCHAR(254) NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`)
}

module.exports = userTable()