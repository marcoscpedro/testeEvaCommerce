const md5 = require("md5")

const hashPassword = (password) => {
    const newPassoword = md5(password)
    return newPassoword
}

const passwordVerification = (password, passwordAttempt) => {
    return password === md5(passwordAttempt)
}

module.exports = {
    hashPassword,
    passwordVerification
}