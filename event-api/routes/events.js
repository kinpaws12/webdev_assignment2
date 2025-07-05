const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { verifyToken, checkRoles } = require('../middleware/auth');


router.post('/', verifyToken, checkRoles(['admin', 'organizer']), eventController.createEvent);


router.get('/', eventController.getEvents);

module.exports = router;
