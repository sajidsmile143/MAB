const mongoose = require('mongoose');

const personalFileSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        fileName: {
            type: String,
            required: true,
        },
        fileUrl: {
            type: String,
            required: true,
        },
        fileType: {
            type: String, // 'pdf', 'image', 'audio', etc.
        },
        size: {
            type: Number, // in bytes
        },
    },
    {
        timestamps: true,
    }
);

const PersonalFile = mongoose.model('PersonalFile', personalFileSchema);

module.exports = PersonalFile;
