const mongoose = require('mongoose');

const caseLawSchema = mongoose.Schema(
    {
        citation: {
            type: String,
            required: true,
        },
        court: {
            type: String,
            required: true,
        },
        judge: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        details: {
            type: String,
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
        isPublic: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const CaseLaw = mongoose.model('CaseLaw', caseLawSchema);

module.exports = CaseLaw;
