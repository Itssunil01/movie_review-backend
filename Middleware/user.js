const signupSchema = require("../SchemaValidation/user");

module.exports.signupValidation = (req,res,next) => {
    const { err } = signupSchema.validate(req.body);
    if(err){
        return res.status(404).json({message: err , success: false});
    }
    next();
}