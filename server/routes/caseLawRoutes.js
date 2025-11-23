const express = require('express');
const router = express.Router();
const {
    getCaseLaws,
    getMyCases,
    createCaseLaw,
} = require('../controllers/caseLawController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.route('/').get(getCaseLaws).post(protect, upload.single('file'), createCaseLaw);
router.route('/mycases').get(protect, getMyCases);

module.exports = router;
