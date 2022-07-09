const database = require("monastery")(process.env.MONGO_URL)
.then((db) => {
    console.log('Database Connect', db);    
}).catch((err) => {
    console.log('Database error', err);
});

module.exports = database