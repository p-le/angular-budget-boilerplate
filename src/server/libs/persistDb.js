const Datastore = require('nedb');
const path = require('path');

const db = new Datastore({
  filename: path.resolve(__dirname, '../data/data.db'),
  autoload: true
});

module.exports = db;