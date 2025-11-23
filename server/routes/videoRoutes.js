const express = require('express');
const router = express.Router();
const {
    getVideos,
    fetchVideos,
} = require('../controllers/videoController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getVideos);
router.route('/fetch').post(protect, admin, fetchVideos);

module.exports = router;
