const express = require('express');
const router = express.Router();
const {
    getMyFiles,
    uploadFile,
    deleteFile,
} = require('../controllers/personalFileController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.route('/').get(protect, getMyFiles).post(protect, upload.single('file'), uploadFile);
router.route('/:id').delete(protect, deleteFile);

module.exports = router;
