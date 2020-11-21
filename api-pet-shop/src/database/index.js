const mongoose = require('mongoose');
const url = `mongodb://127.0.0.1:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
const DATABASE_URL = url;

mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useFindAndModify: true});

module.exports = mongoose.connection;