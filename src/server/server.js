const express = require('express');
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const passport = require('./libs/passport');
const visionRouter = require('./routers/vision');
const watsonRouter = require('./routers/watson');
const indexRouter = require('./routers/index');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
}
app.use(cors())
  .use(session({
    secret: 'AIDEMO',
    resave: false,
    saveUninitialized: false, 
    cookie: {
      secure: true
    }
  }))
  .use(passport.initialize())
  .use(passport.session())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(express.static(path.resolve(__dirname, '../../public'), {index: false, redirect: false}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.use('/', indexRouter);
app.use('/google', visionRouter);
app.use('/watson', watsonRouter);

module.exports = app;