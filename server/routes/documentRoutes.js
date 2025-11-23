const express = require('express');
const router = express.Router();
const {
    getDocuments,
    createDocument,
    deleteDocument,
} = require('../controllers/documentController');
const { protect, admin } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.route('/').get(getDocuments).post(protect, admin, upload.single('file'), createDocument);
router.route('/:id').delete(protect, admin, deleteDocument);

module.exports = router;
