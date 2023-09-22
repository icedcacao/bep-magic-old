const jwt = require("jsonwebtoken");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const userService = require("../services/userService");

const authCheck = async (req, res, next) => {
  const token = req.headers.token;
  const user = await userService.getUserFromToken(token);
  if (!user) {
    return res.status(401).send('Error: Unauthenticated');
  }
  req.user = user; // Từ bây giờ ở bất kỳ route nào em đều có thể lấy user bằng cách viết req.user
  next();
};

module.exports = authCheck;
