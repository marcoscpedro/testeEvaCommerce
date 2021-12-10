const database = require("./db")
const jwt = require("jsonwebtoken")

class Authentication {
    static async authenticate (id) {
        const sql = `UPDATE users SET token=? WHERE id=?` 
        const token = jwt.sign({
                data: 'foobar'
        }, 'secret', { expiresIn: '1h' })
        const values = [token, id]
        const userToken = await database.execute(sql, values)
        return token
    }

    static verify(jwtToken) {
        const decoded = jwt.verify(jwtToken.split(' ')[1], 'secret', (err, data) => {
            if (err) {
                throw err
            } else {
                return data
            }
        })
    }

    static async getUserId(jwtToken){
        const jwt = jwtToken.split(' ')[1]
        const sql = `SELECT * FROM users WHERE token=?`
        const userId = await database.execute(sql,[jwt])
        return userId[0][0].id
    }


}
module.exports = Authentication