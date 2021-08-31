const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

router.post('/registerUser',userController.registerUser);
router.post('/login',roleController.login)

module.exports = router;