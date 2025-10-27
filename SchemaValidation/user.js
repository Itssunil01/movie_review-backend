const joi = require("joi")

// signup
const signupSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().required,
    password: joi.string().required(),
})

module.exports = {signupSchema}