const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

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
      console.log('accessToken:', accessToken);
      console.log('refreshToken:', refreshToken);
      console.log('profile:', profile);
    }
  )
);

module.exports = passport;
