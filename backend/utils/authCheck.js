const jwt = require("jsonwebtoken");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const errorMessages = require("./error_messages.json");

const authCheck = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res
      .status(errorMessages.UNAUTHORIZED.code)
      .json({ Error: errorMessages.UNAUTHORIZED.message });
  }
  jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, data) => {
    if (err) {
      return res.status(errorMessages.FORBIDDEN.code).cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
      });
    }
    next();
  });
};

module.exports = authCheck;
