import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaFilePdf, FaDownload, FaSearch, FaPlus, FaTimes } from 'react-icons/fa';
import AuthContext from '../context/AuthContext';

const Laws = () => {
    const [documents, setDocuments] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    // Upload State
    const [showUpload, setShowUpload] = useState(false);
    const [uploadData, setUploadData] = useState({ title: '', category: '', description: '', file: null, isOverseas: false });
    const [uploadLoading, setUploadLoading] = useState(false);

    const fetchDocuments = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/documents?search=${search}&category=${category}`);
            setDocuments(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDocuments();
    }, [search, category]);

    const handleUpload = async (e) => {
        e.preventDefault();
        setUploadLoading(true);
        const formData = new FormData();
        formData.append('title', uploadData.title);
        formData.append('category', uploadData.category);
        formData.append('description', uploadData.description);
        formData.append('isOverseas', uploadData.isOverseas);
        formData.append('file', uploadData.file);

        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            };
            await axios.post('http://localhost:5000/api/documents', formData, config);
            setUploadLoading(false);
            setShowUpload(false);
            setUploadData({ title: '', category: '', description: '', file: null, isOverseas: false });
            fetchDocuments();
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
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-bold text-accent mb-4">Laws & Ordinances</h1>
                <p className="text-muted text-lg">Access the latest bare acts, rules, and legal documents.</p>
                {user && user.role === 'admin' && (
                    <button
                        onClick={() => setShowUpload(true)}
                        className="mt-6 bg-accent text-primary px-6 py-2 rounded-full font-bold hover:bg-yellow-600 transition flex items-center mx-auto"
                    >
                        <FaPlus className="mr-2" /> Upload Document
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
                        <h2 className="text-2xl font-bold text-white mb-6">Upload Document</h2>
                        <form onSubmit={handleUpload} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Title"
                                className="w-full bg-primary text-white px-4 py-2 rounded border border-gray-600"
                                value={uploadData.title}
                                onChange={(e) => setUploadData({ ...uploadData, title: e.target.value })}
                                required
                            />
                            <select
                                className="w-full bg-primary text-white px-4 py-2 rounded border border-gray-600"
                                value={uploadData.category}
                                onChange={(e) => setUploadData({ ...uploadData, category: e.target.value })}
                                required
                            >
                                <option value="">Select Category</option>
                                <option value="Constitution">Constitution</option>
                                <option value="CrPC">CrPC</option>
                                <option value="CPC">CPC</option>
                                <option value="Family Laws">Family Laws</option>
                                <option value="Overseas">Overseas Laws</option>
                                <option value="Other">Other</option>
                            </select>
                            <textarea
                                placeholder="Description"
                                className="w-full bg-primary text-white px-4 py-2 rounded border border-gray-600"
                                value={uploadData.description}
                                onChange={(e) => setUploadData({ ...uploadData, description: e.target.value })}
                            ></textarea>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="overseas"
                                    className="mr-2"
                                    checked={uploadData.isOverseas}
                                    onChange={(e) => setUploadData({ ...uploadData, isOverseas: e.target.checked })}
                                />
                                <label htmlFor="overseas" className="text-white">Is Overseas Law?</label>
                            </div>
                            <input
                                type="file"
                                className="w-full text-gray-400"
                                onChange={(e) => setUploadData({ ...uploadData, file: e.target.files[0] })}
                                required
                            />
                            <button
                                type="submit"
                                disabled={uploadLoading}
                                className="w-full bg-accent text-primary font-bold py-2 rounded hover:bg-yellow-600 transition disabled:opacity-50"
                            >
                                {uploadLoading ? 'Uploading...' : 'Upload'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0">
                <div className="relative w-full md:w-1/2">
                    <FaSearch className="absolute left-3 top-3 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search laws..."
                        className="w-full bg-secondary text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <select
                    className="bg-secondary text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    <option value="Constitution">Constitution</option>
                    <option value="CrPC">CrPC</option>
                    <option value="CPC">CPC</option>
                    <option value="Family Laws">Family Laws</option>
                    <option value="Overseas">Overseas Laws</option>
                </select>
            </div>

            {/* Documents List */}
            {loading ? (
                <div className="text-center text-muted">Loading documents...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {documents.map((doc) => (
                        <motion.div
                            key={doc._id}
                            whileHover={{ scale: 1.02 }}
                            className="bg-secondary p-6 rounded-lg shadow-md border border-gray-700"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <FaFilePdf className="text-4xl text-red-500 mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">{doc.title}</h3>
                                    <span className="bg-primary text-xs px-2 py-1 rounded text-gray-400">{doc.category}</span>
                                    {doc.isOverseas && <span className="ml-2 bg-blue-900 text-xs px-2 py-1 rounded text-blue-200">Overseas</span>}
                                </div>
                                <a
                                    href={`http://localhost:5000${doc.fileUrl}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent hover:text-white"
                                    download
                                >
                                    <FaDownload />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Laws;
