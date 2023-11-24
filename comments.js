// Create web server 

// Import modules
const express = require('express');
const router = express.Router();

// Import controllers
const commentsCtrl = require('../controllers/comments');

// Import middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Routes
router.post('/new', auth, multer, commentsCtrl.createComment);
router.get('/', auth, commentsCtrl.listComments);
router.put('/modify/:id', auth, multer, commentsCtrl.modifyComment);
router.delete('/delete/:id', auth, commentsCtrl.deleteComment);

module.exports = router;