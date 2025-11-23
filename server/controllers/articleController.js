const Article = require('../models/Article');

// @desc    Get all articles
// @route   GET /api/articles
// @access  Public
const getArticles = async (req, res) => {
    try {
        const articles = await Article.find().sort({ createdAt: -1 });
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single article
// @route   GET /api/articles/:id
// @access  Public
const getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (article) {
            res.status(200).json(article);
        } else {
            res.status(404).json({ message: 'Article not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create an article
// @route   POST /api/articles
// @access  Private/Admin
const createArticle = async (req, res) => {
    try {
        const { title, content, author, tags } = req.body;
        let image = '';

        if (req.file) {
            image = `/uploads/${req.file.filename}`;
        }

        const article = await Article.create({
            title,
            content,
            author,
            tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
            image,
        });

        res.status(201).json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getArticles,
    getArticleById,
    createArticle,
};
