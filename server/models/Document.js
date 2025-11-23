const mongoose = require('mongoose');

const documentSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            // e.g., 'Constitution', 'CrPC', 'CPC', 'Family Laws', 'Overseas'
        },
        fileUrl: {
            type: String,
            required: true,
        },
        uploadedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        isOverseas: {
            type: Boolean,
            default: false,
        },
        description: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
