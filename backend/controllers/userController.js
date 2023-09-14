const { userRepo } = require("../repositories/index");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const errorMessages = require("../utils/error_messages.json");

function generateToken(user) {
  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.ACESS_TOKEN_SECRET
  );
  return token;
}

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userRepo.findOne({ username });
    if (!user) {
      throw errorMessages.UNAUTHORIZED;
    }

    const isPasswordMatch = bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw errorMessages.UNAUTHORIZED;
    }

    const token = generateToken(user);
    res.status(200).cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 5,
    });
  } catch (error) {
    res.status(error.code).json({ Error: error.message });
  }
};

const auth = async (req, res) => {
  res.status(200).json({ message: "Success" });
};

module.exports = { login, auth };
