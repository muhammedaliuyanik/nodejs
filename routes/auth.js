const express = require('express');
const {register} = required('.../controllers/auth.js');

const router = express.router();

router.post('/register', register)
router.post('/login', login)

router.post('/product', auth , sadasdsad)

module.exports = router;