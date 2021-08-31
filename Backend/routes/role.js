const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role');


router.get('/listRole',roleController.listRole);
router.post('/registerRole',roleController.registerRole);

module.exports = router;