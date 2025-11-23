const mongoose = require('mongoose');

const videoSchema = mongoose.Schema(
    {
        youtubeId: {
            type: String,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
            required: true,
        },
        publishedAt: {
            type: Date,
        },
        description: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
