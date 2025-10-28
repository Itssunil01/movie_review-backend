const express = require("express");
const { signup } = require("../Controller/user");
const { signupValidation } = require("../Middleware/user");
const router = express.Router();

router.post("/signup" ,  signupValidation , signup);

module.exports = router;