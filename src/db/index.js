const mongoose = require('mongoose'); 
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const conn = mongoose.connection;

conn.on('error', () => console.error.bind(console, 'connection error'));

conn.once('open', () => console.info('Connection to Database is successful'));

module.exports = conn;
