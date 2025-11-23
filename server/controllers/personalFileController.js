const PersonalFile = require('../models/PersonalFile');

// @desc    Get my files
// @route   GET /api/vault
// @access  Private
const getMyFiles = async (req, res) => {
    try {
        const files = await PersonalFile.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Upload a file to vault
// @route   POST /api/vault
// @access  Private
const uploadFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Please upload a file' });
        }

        const file = await PersonalFile.create({
            user: req.user.id,
            fileName: req.file.originalname,
            fileUrl: `/uploads/${req.file.filename}`,
            fileType: req.file.mimetype,
            size: req.file.size,
        });

        res.status(201).json(file);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a file
// @route   DELETE /api/vault/:id
// @access  Private
const deleteFile = async (req, res) => {
    try {
        const file = await PersonalFile.findById(req.params.id);

        if (!file) {
            return res.status(404).json({ message: 'File not found' });
        }

        // Check user
        if (file.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not authorized' });
        }

        await file.deleteOne();
        res.status(200).json({ id: req.params.id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getMyFiles,
    uploadFile,
    deleteFile,
};
