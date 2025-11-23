const CaseLaw = require('../models/CaseLaw');

// @desc    Get all case laws
// @route   GET /api/cases
// @access  Public
const getCaseLaws = async (req, res) => {
    try {
        const { search, court, year } = req.query;
        let query = { isPublic: true };

        if (search) {
            query.$or = [
                { citation: { $regex: search, $options: 'i' } },
                { details: { $regex: search, $options: 'i' } },
                { judge: { $regex: search, $options: 'i' } },
            ];
        }

        if (court) {
            query.court = court;
        }

        // Date filtering logic could be added here

        const cases = await CaseLaw.find(query).sort({ date: -1 });
        res.status(200).json(cases);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get my uploaded cases
// @route   GET /api/cases/mycases
// @access  Private
const getMyCases = async (req, res) => {
    try {
        const cases = await CaseLaw.find({ uploadedBy: req.user.id }).sort({ createdAt: -1 });
        res.status(200).json(cases);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Upload a case law
// @route   POST /api/cases
// @access  Private
const createCaseLaw = async (req, res) => {
    try {
        const { citation, court, judge, date, details, isPublic } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: 'Please upload a file' });
        }

        const caseLaw = await CaseLaw.create({
            citation,
            court,
            judge,
            date,
            details,
            fileUrl: `/uploads/${req.file.filename}`,
            uploadedBy: req.user.id,
            isPublic: isPublic !== undefined ? isPublic === 'true' : true,
        });

        res.status(201).json(caseLaw);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getCaseLaws,
    getMyCases,
    createCaseLaw,
};
