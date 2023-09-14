// Using this when adding cart feature

const rateLimit = require("express-rate-limit");

const errorMessages = require("./error_messages.json");

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  handler: function (req, res) {
    res
      .status(errorMessages.TOO_MANY_REQUESTS.code)
      .json({ message: errorMessages.TOO_MANY_REQUESTS.message });
  },
});

module.exports = apiLimiter;
