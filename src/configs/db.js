const mongoose = require("mongoose");
require("dotenv").config();

const MongoURL =
  process.env.MONGO_URL ||
  "mongodb+srv://akshaykumar:akshay123+@haus.mmor8.mongodb.net/HighDash" ||
  "http://localhost:27017/";

const connect = () => mongoose.connect(MongoURL);

module.exports = connect;
