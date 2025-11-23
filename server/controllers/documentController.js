const Document = require('../models/Document');

// @desc    Get all documents
// @route   GET /api/documents
// @access  Public
const getDocuments = async (req, res) => {
    try {
        const { category, search } = req.query;
        let query = {};

        if (category) {
            query.category = category;
        }

        if (search) {
            query.title = { $regex: search, $options: 'i' };
        }

        const documents = await Document.find(query).sort({ createdAt: -1 });
        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Upload a document
// @route   POST /api/documents
// @access  Private/Admin
const createDocument = async (req, res) => {
    try {
        const { title, category, isOverseas, description } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: 'Please upload a file' });
        }

        const document = await Document.create({
            title,
            category,
            fileUrl: `/uploads/${req.file.filename}`,
            uploadedBy: req.user.id,
            isOverseas: isOverseas === 'true',
            description,
        });

        res.status(201).json(document);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a document
// @route   DELETE /api/documents/:id
// @access  Private/Admin
const deleteDocument = async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);

        if (!document) {
            return res.status(404).json({ message: 'Document not found' });
        }

        await document.deleteOne();
        res.status(200).json({ id: req.params.id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getDocuments,
    createDocument,
    deleteDocument,
};
