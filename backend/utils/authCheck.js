const jwt = require("jsonwebtoken");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const errorMessages = require("./error_messages.json");

const authCheck = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    res
      .status(errorMessages.UNAUTHORIZED.code)
      .json({ Error: errorMessages.UNAUTHORIZED.message });
  }
  jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, data) => {
    if (err) {
      res.status(errorMessages.FORBIDDEN.code).cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
      });
    }
    next();
  });
};

module.exports = authCheck;
