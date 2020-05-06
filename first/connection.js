// connection.js
const mongoose = require("mongoose");
const User = require("./user");


// const connection = "mongodb://localhost:27017/mongo-test";

//must change container url to match name of service

const connection = "mongodb://mongo:27017/mongo-test";
const connectDb = () => {
    return mongoose.connect(connection);
};
module.exports = connectDb;