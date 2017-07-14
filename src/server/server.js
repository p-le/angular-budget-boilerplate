const express = require('express');
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const passport = require('./libs/passport');
const visionRouter = require('./routers/vision');
const watsonRouter = require('./routers/watson');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

// if (process.env.NODE_ENV === 'production') {
  app.use(compression())
    .use(session({
      secret: 'AIDEMO',
      resave: false,
      saveUninitialized: false, 
      cookie: {
        secure: true
      }
    }))
    .use(passport.initialize())
    .use(passport.session());

app.use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(express.static(path.resolve(__dirname, '../../public')));

app.use('/vision', visionRouter);
app.use('/watson', watsonRouter);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../public/index.html'));
});

module.exports = app;