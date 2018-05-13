const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('../models/User');

const {
  auth: { google },
} = require('../config');

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
          } else {
            new User({ googleID: profile.id }).save();
          }
        })
        .catch(err => console.log(err));
    }
  )
);

module.exports = passport;
