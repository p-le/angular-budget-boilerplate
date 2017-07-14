const passport = require('passport');
const Strategy = require('passport-http').DigestStrategy;

var users = [
  { id: 1, username: 'root', password: 'zFq7ctTB' },
  { id: 2, username: 'admin', password: 'kCwx8uKg' }
]

function findUser(username, fn) {
  const result = users.filter(u => u.username == username);
  console.log(username);
  if (result.length > 0) {
    return fn(null, result);
  }

  return fn('Invalid Username', null);
}

passport.use(new Strategy(
  { qop: 'auth' },
  (username, done) => {
    findUser(username, function(err, user) {
      if (err) return done(err);
      if (!user) return done(null, false);
      return done(null, {}, user.password);
    });
  },
  (params, done) => done(null, true)
));

module.exports = passport;