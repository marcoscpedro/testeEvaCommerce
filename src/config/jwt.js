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

    static verify() {
        const decoded = jwt.verify(jwtToken.split(' ')[1], 'secret', (err, data) => {
            if (err) {
                throw err
            } else {
                return data
            }
        })
    }


}
module.exports = Authentication