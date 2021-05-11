const db = require('../database/mongodb.js')

const User = db.model("user", {
    fields: {
        name: { type: 'string', required: true}
    }
})

module.exports = User