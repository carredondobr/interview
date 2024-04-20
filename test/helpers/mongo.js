const _ = require('lodash');
const mongoose = require('mongoose');

async function clean () {
  const collections = _.values(mongoose.connection.collections);
  for (let i = 0; i < collections.length; i++) {
    await collections[0].deleteMany({});
  }
}

async function drop () {
  const connection = mongoose.connection;
  await connection.dropDatabase();
  const models = connection.modelNames();
  for (const model of models) {
    await connection.models[model].createIndexes();
  }
}

module.exports = {
  clean,
  drop,
};
