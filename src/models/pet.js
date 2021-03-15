const db = require("monastery")(process.env.MONGO_URL);

const Pet = db.model("pet", {
  fields: {
    name: { type: "string", required: [true, "Insert name..!!"] },
    age: { type: "number" },
  },
});

module.exports = Pet;
