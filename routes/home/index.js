'use strict';

const express = require('express');
const router = express.Router();

const output = require('./home.output');

router.get('/',output.home); //서버 연결

router.get('/login',output.login);

module.exports = router;