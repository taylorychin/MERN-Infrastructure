const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/users/check-token
router.get('/check-token', usersCtrl.checkToken);


// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', ensureLoggedIn, usersCtrl.login);

module.exports = router;