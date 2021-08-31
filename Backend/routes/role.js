const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role');
const Auth = require('../middleware/auth');
const Valid = require('../middleware/validate');

router.get('/listRole',Auth,Valid,roleController.listRole);
router.post('/registerRole',roleController.registerRole);

module.exports = router;