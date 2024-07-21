const express = require('express');
const { getMessageResponse } = require('../controllers/messageController');

const router = express.Router();

router.post('/message', getMessageResponse);

module.exports = router;
