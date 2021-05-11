const db = require('../database/mongodb.js')

const Pet = db.model("pet", {
  fields: {
    name: { type: 'string', required: true },
    age: { type: 'number' },
  },
});

module.exports = Pet;
