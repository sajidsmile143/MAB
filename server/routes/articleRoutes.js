const express = require('express');
const router = express.Router();
const {
    getArticles,
    getArticleById,
    createArticle,
} = require('../controllers/articleController');
const { protect, admin } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.route('/').get(getArticles).post(protect, admin, upload.single('image'), createArticle);
router.route('/:id').get(getArticleById);

module.exports = router;
