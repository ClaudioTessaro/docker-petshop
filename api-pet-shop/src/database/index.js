const mongoose = require('mongoose');
const url = `mongodb://mongodb:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`;
const DATABASE_URL = url;

mongoose.connect(DATABASE_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true
});

module.exports = mongoose.connection;
