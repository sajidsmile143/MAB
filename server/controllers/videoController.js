const Video = require('../models/Video');
const axios = require('axios');

// @desc    Get all videos
// @route   GET /api/videos
// @access  Public
const getVideos = async (req, res) => {
    try {
        const videos = await Video.find().sort({ publishedAt: -1 });
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Fetch videos from YouTube (Manual trigger or Cron)
// @route   POST /api/videos/fetch
// @access  Private/Admin
const fetchVideos = async (req, res) => {
    try {
        const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
        const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || 'UC_x5XG1OV2P6uZZ5FSM9Ttw'; // Default to Google Developers if not provided

        if (!YOUTUBE_API_KEY) {
            return res.status(500).json({ message: 'YouTube API Key not configured' });
        }

        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                key: YOUTUBE_API_KEY,
                channelId: CHANNEL_ID,
                part: 'snippet',
                order: 'date',
                maxResults: 10,
                type: 'video'
            }
        });

        const videos = response.data.items.map(item => ({
            youtubeId: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
            publishedAt: item.snippet.publishedAt,
            description: item.snippet.description,
        }));

        for (const video of videos) {
            const exists = await Video.findOne({ youtubeId: video.youtubeId });
            if (!exists) {
                await Video.create(video);
            }
        }

        res.status(200).json({ message: 'Videos fetched successfully', count: videos.length });
    } catch (error) {
        console.error('YouTube Fetch Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Failed to fetch videos from YouTube' });
    }
};

module.exports = {
    getVideos,
    fetchVideos,
};
