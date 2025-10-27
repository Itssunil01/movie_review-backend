const User = require("../Models/user");

// signup
module.exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = User.findOne({ email });

    if (user) {
      return res
        .status(404)
        .json({ message: "User Already Exist", success: false });
    }

    if (!username || !email || !password) {
      return res
        .status(404)
        .json({ message: "All fields are required", success: false });
    }

    const newUser = await User({username , email});

    await User.register(newUser , password);
    return res.status(200).json({message: "Account Created Successfully" , success: true })

  } catch (err) {
    return res.status(500).json({ message: err, success: false });
  }
};
