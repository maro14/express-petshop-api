const database = require("monastery")(process.env.MONGO_URL);

module.exports = database