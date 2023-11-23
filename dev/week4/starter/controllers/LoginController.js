// LoginController.js
const User = require("../models/UsersModel");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists with the provided email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Check if the provided password (converted to Number) matches the stored password
    const isPasswordValid = user.password === Number(password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Login successful
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { login };
