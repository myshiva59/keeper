const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', passport.authenticate('google', { scope: ['profile'] }));

router.get(
	'/callback',
	passport.authenticate('google', { failureRedirect: '/' }),
	(req, res) => {
		res.redirect('/home');
	}
);

module.exports = router;
