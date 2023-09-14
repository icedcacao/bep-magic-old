const { ImgurClient } = require("imgur");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const client = new ImgurClient({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
});

module.exports = client;
