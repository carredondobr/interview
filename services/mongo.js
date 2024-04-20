const mongoose = require('mongoose');

mongoose.Promise = Promise;

/**
 * Connect to mongo
 * @param url URL for the database connection - this includes host, port and database
 */
async function connect() {
  await mongoose.connect('mongodb://127.0.0.1:27017/pokemon', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 120000,
  });
}

/**
 * Disconnect from mongo
 */
async function disconnect() {
  await mongoose.connection.close();
}

module.exports = { connect, disconnect };