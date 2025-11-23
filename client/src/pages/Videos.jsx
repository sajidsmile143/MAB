import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaPlay, FaDownload } from 'react-icons/fa';

const Videos = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                // Mock data if API fails or is empty
                const { data } = await axios.get('http://localhost:5000/api/videos');
                if (data.length > 0) {
                    setVideos(data);
                } else {
                    setVideos([
                        {
                            _id: '1',
                            youtubeId: 'dQw4w9WgXcQ',
                            title: 'Introduction to Civil Law',
                            thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
                            description: 'A comprehensive guide to Civil Procedure Code.',
                        },
                        {
                            _id: '2',
                            youtubeId: 'dQw4w9WgXcQ',
                            title: 'Criminal Law Basics',
                            thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
                            description: 'Understanding the fundamentals of CrPC.',
                        },
                        // Add more mock videos
                    ]);
                }
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchVideos();
    }, []);

    return (
        <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-accent mb-4">Video Lectures</h1>
                <p className="text-muted text-lg mb-6">Expert guidance on judiciary exams and legal topics.</p>
                <a
                    href="https://www.youtube.com/@motivationallawyer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition"
                >
                    <FaPlay className="mr-2" /> Visit Our YouTube Channel
                </a>
            </div>

            {loading ? (
                <div className="text-center text-muted">Loading videos...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video) => (
                        <motion.div
                            key={video._id}
                            whileHover={{ scale: 1.05 }}
                            className="bg-secondary rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-accent transition"
                        >
                            <div className="relative aspect-w-16 aspect-h-9">
                                <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
                                    <a
                                        href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-4xl"
                                    >
                                        <FaPlay />
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                                <p className="text-muted text-sm mb-4">{video.description}</p>
                                <button className="w-full bg-gray-700 text-white py-2 rounded flex items-center justify-center hover:bg-accent hover:text-primary transition">
                                    <FaDownload className="mr-2" /> Download Video
                                </button>
                                <p className="text-xs text-gray-500 mt-2 text-center">*Disclaimer: For educational use only.</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Videos;
