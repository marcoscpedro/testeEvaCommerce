const database = require("../config/db")
const userTable = require("../tables/user")
const md5 = require("md5")

class User {
    static async create(Obj) {
        const sql = `INSERT INTO users(name, email, password) VALUES(?,?,?)`
        const values = [Obj.name, Obj.email, md5(Obj.password)]
        try {
            const user = await database.execute(sql,values)
            return {
                id:user[0].insertId,
            }
        } catch (err) {
            return {
                error: true,
                message: err
            }
        }
    }
}

module.exports = User