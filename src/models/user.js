const database = require("../config/db")
const userTable = require("../tables/user")
const jwt = require("../config/jwt")
const hash = require("../config/hash")

class User {
    static async create(Obj) {
        const sql = `INSERT INTO users(name, email, password) VALUES(?,?,?)`
        const values = [Obj.name, Obj.email, hash.hashPassword(Obj.password)]
        try {
            const user = await database.execute(sql,values)
            return {
                id:user[0].insertId,
                name:values[0],
                email:values[1],
                password:values[2]
            }
        } catch (err) {
            return {
                error: true,
                message: err
            }
        }
    }

    static async login(Obj) {
        const { email, password } = Obj
        const sql = `SELECT * FROM users WHERE email=?`
        const userEmail = await database.execute(sql,[email])
        try {
            const passwordTest = hash.passwordVerification(userEmail[0][0].password,password)
            if (passwordTest === true){
                const token = await jwt.authenticate(userEmail[0][0].id)
                return {
                    Message:"Usuário logado",
                    token:token
                }
            } else {
                return {
                    Message:"Email ou senha incorretos"
                }
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