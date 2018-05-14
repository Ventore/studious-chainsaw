const router = require('express').Router();
const authenticationService = require('../services/passport');

router.get(
  /\/google(\/callback)?/,
  authenticationService.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get('logout', (req, res) => {
  req.logout();
});

module.exports = router;
