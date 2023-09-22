const userRepo = require('../repositories/userRepo');
const jwt = require('jsonwebtoken');

const getUserFromToken = async function (token) {
  try {
    const decodedToken = jwt.decode(token, process.env.JWT_SECRET_TOKEN);
    const id = decodedToken.id;
    return await userRepo.findById(id);
  } catch (error) {
    return null;
  }
};

module.exports = { getUserFromToken };