const router = require('express').Router();
const authenticationService = require('../services/passport');

router.get(
  /\/google(\/callback)?/,
  authenticationService.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

module.exports = router;
