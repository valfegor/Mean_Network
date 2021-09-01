const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');
const Auth = require('../middleware/auth');
const Valid = require('../middleware/validate');


router.post('/registerPost',Auth,Valid,postController.registerPost);

router.get('/listPost',Auth,Valid,postController.listPost);
router.put('/updatePost',Auth,Valid,postController.updatePost);
router.delete('/deletePost/:_id',Auth,Valid,postController.deletePost);
module.exports = router;
