import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlus, FaTimes } from 'react-icons/fa';
import AuthContext from '../context/AuthContext';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    // Upload State
    const [showUpload, setShowUpload] = useState(false);
    const [uploadData, setUploadData] = useState({ title: '', content: '', tags: '', image: null });
    const [uploadLoading, setUploadLoading] = useState(false);

    const fetchArticles = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/articles');
            setArticles(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const handleUpload = async (e) => {
        e.preventDefault();
        setUploadLoading(true);
        const formData = new FormData();
        formData.append('title', uploadData.title);
        formData.append('content', uploadData.content);
        formData.append('tags', uploadData.tags);
        if (uploadData.image) {
            formData.append('image', uploadData.image);
        }

        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            };
            await axios.post('http://localhost:5000/api/articles', formData, config);
            setUploadLoading(false);
            setShowUpload(false);
            setUploadData({ title: '', content: '', tags: '', image: null });
            fetchArticles();
        } catch (error) {
            console.error(error);
            setUploadLoading(false);
            alert('Upload failed');
        }
    };

    return (
        <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl font-bold text-accent mb-4">Legal Articles & Insights</h1>
                <p className="text-muted text-lg">In-depth analysis and updates on Pakistani law.</p>
                {user && user.role === 'admin' && (
                    <button
                        onClick={() => setShowUpload(true)}
                        className="mt-6 bg-accent text-primary px-6 py-2 rounded-full font-bold hover:bg-yellow-600 transition flex items-center mx-auto"
                    >
                        <FaPlus className="mr-2" /> Write Article
                    </button>
                )}
            </motion.div>

            {/* Upload Modal */}
            {showUpload && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-4">
                    <div className="bg-secondary p-8 rounded-lg w-full max-w-md relative">
                        <button onClick={() => setShowUpload(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                            <FaTimes />
                        </button>
                        <h2 className="text-2xl font-bold text-white mb-6">Write New Article</h2>
                        <form onSubmit={handleUpload} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Article Title"
                                className="w-full bg-primary text-white px-4 py-2 rounded border border-gray-600"
                                value={uploadData.title}
                                onChange={(e) => setUploadData({ ...uploadData, title: e.target.value })}
                                required
                            />
                            <textarea
                                placeholder="Content (Markdown supported)"
                                rows="6"
                                className="w-full bg-primary text-white px-4 py-2 rounded border border-gray-600"
                                value={uploadData.content}
                                onChange={(e) => setUploadData({ ...uploadData, content: e.target.value })}
                                required
                            ></textarea>
                            <input
                                type="text"
                                placeholder="Tags (comma separated)"
                                className="w-full bg-primary text-white px-4 py-2 rounded border border-gray-600"
                                value={uploadData.tags}
                                onChange={(e) => setUploadData({ ...uploadData, tags: e.target.value })}
                            />
                            <input
                                type="file"
                                className="w-full text-gray-400"
                                onChange={(e) => setUploadData({ ...uploadData, image: e.target.files[0] })}
                            />
                            <button
                                type="submit"
                                disabled={uploadLoading}
                                className="w-full bg-accent text-primary font-bold py-2 rounded hover:bg-yellow-600 transition disabled:opacity-50"
                            >
                                {uploadLoading ? 'Publishing...' : 'Publish Article'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {loading ? (
                <div className="text-center text-muted">Loading articles...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <motion.div
                            key={article._id}
                            whileHover={{ scale: 1.02 }}
                            className="bg-secondary rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-accent transition"
                        >
                            {article.image && (
                                <img src={`http://localhost:5000${article.image}`} alt={article.title} className="w-full h-48 object-cover" />
                            )}
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {article.tags.map((tag, index) => (
                                        <span key={index} className="bg-primary text-accent text-xs px-2 py-1 rounded">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{article.content}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-500">By {article.author}</span>
                                    <Link to={`/articles/${article._id}`} className="text-accent hover:underline text-sm font-bold">Read More &rarr;</Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Articles;
