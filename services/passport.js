const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('../models/User');

const {
  auth: { google },
} = require('../config');

// INFO: Used for cookies setup, remove if JWT
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => done(err, false));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: google.clientID,
      clientSecret: google.clientSecret,
      callbackURL: google.callbackURL,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id })
        .then(user => {
          if (user) {
            done(null, user);
          } else {
            new User({ googleID: profile.id })
              .save()
              .then(user => done(null, user))
              .catch(err => done(err, false));
          }
        })
        .catch(err => done(err, false));
    }
  )
);

module.exports = passport;
