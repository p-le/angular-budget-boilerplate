const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(express.static(path.resolve(__dirname, '../../public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../public/index.html'));
});

module.exports = app;