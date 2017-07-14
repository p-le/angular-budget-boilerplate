const express = require('express');
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');

const visionRouter = require('./routers/vision');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
}

app.use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(express.static(path.resolve(__dirname, '../../public')));

app.use('/vision', visionRouter);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../public/index.html'));
});

module.exports = app;