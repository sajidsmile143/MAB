import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaGavel, FaSearch, FaPlus, FaTimes } from 'react-icons/fa';
import AuthContext from '../context/AuthContext';

const CaseLaws = () => {
    const { user } = useContext(AuthContext);
    const [cases, setCases] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [showUpload, setShowUpload] = useState(false);
    const [uploadData, setUploadData] = useState({ citation: '', court: '', judge: '', date: '', details: '', file: null });
    const [uploadLoading, setUploadLoading] = useState(false);

    useEffect(() => {
        const fetchCases = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/api/cases?search=${search}`);
                setCases(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchCases();
    }, [search]);

    const handleUpload = async (e) => {
        e.preventDefault();
        setUploadLoading(true);
        const formData = new FormData();
        formData.append('citation', uploadData.citation);
        formData.append('court', uploadData.court);
        formData.append('judge', uploadData.judge);
        formData.append('date', uploadData.date);
        formData.append('details', uploadData.details);
        formData.append('isPublic', 'true');
        formData.append('file', uploadData.file);

        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            };
            await axios.post('http://localhost:5000/api/cases', formData, config);
            setUploadLoading(false);
            setShowUpload(false);
            setUploadData({ citation: '', court: '', judge: '', date: '', details: '', file: null });
            // Refresh cases
            const { data } = await axios.get(`http://localhost:5000/api/cases?search=${search}`);
            setCases(data);
        } catch (error) {
            console.error(error);
            setUploadLoading(false);
            alert('Upload failed');
        }
    };

    return (
        <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h1 className="text-4xl font-bold text-accent mb-2">Case Laws</h1>
                    <p className="text-muted">Search decided cases and judgments.</p>
                </div>
                {user && user.role === 'admin' && (
                    <button
                        onClick={() => setShowUpload(true)}
                        className="bg-accent text-primary px-4 py-2 rounded-lg font-bold flex items-center hover:bg-yellow-600 transition"
                    >
                        <FaPlus className="mr-2" /> Upload Case
                    </button>
                )}
            </div>

            {/* Upload Modal */}
            {showUpload && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-4">
                    <div className="bg-secondary p-8 rounded-lg w-full max-w-md relative">
                        <button onClick={() => setShowUpload(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                            <FaTimes />
                        </button>
                        <h2 className="text-2xl font-bold text-white mb-6">Upload Case Law</h2>
                        <form onSubmit={handleUpload} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Citation (e.g., 2023 SCMR 123)"
                                className="w-full bg-primary text-white px-4 py-2 rounded border border-gray-600"
                                value={uploadData.citation}
                                onChange={(e) => setUploadData({ ...uploadData, citation: e.target.value })}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Court (e.g., Supreme Court)"
                                className="w-full bg-primary text-white px-4 py-2 rounded border border-gray-600"
                                value={uploadData.court}
                                onChange={(e) => setUploadData({ ...uploadData, court: e.target.value })}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Judge Name"
                                className="w-full bg-primary text-white px-4 py-2 rounded border border-gray-600"
                                value={uploadData.judge}
                                onChange={(e) => setUploadData({ ...uploadData, judge: e.target.value })}
                                required
                            />
                            <input
                                type="date"
                                className="w-full bg-primary text-white px-4 py-2 rounded border border-gray-600"
                                value={uploadData.date}
                                onChange={(e) => setUploadData({ ...uploadData, date: e.target.value })}
                                required
                            />
                            <textarea
                                placeholder="Details/Summary"
                                className="w-full bg-primary text-white px-4 py-2 rounded border border-gray-600"
                                value={uploadData.details}
                                onChange={(e) => setUploadData({ ...uploadData, details: e.target.value })}
                            ></textarea>
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

            <div className="relative mb-8">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search by citation, judge, or details..."
                    className="w-full bg-secondary text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {loading ? (
                <div className="text-center text-muted">Loading cases...</div>
            ) : cases.length === 0 ? (
                <div className="text-center text-muted py-12">
                    <p className="text-xl mb-2">No case laws found</p>
                    <p className="text-sm">Upload your first case law to get started</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {cases.map((c) => (
                        <motion.div
                            key={c._id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-secondary p-6 rounded-lg shadow-md border border-gray-700 hover:border-accent transition"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{c.citation}</h3>
                                    <p className="text-accent text-sm mb-2">{c.court} | {c.judge}</p>
                                    <p className="text-muted mb-4">{c.details}</p>
                                    <span className="text-xs text-gray-500">Date: {new Date(c.date).toLocaleDateString()}</span>
                                </div>
                                <a
                                    href={`http://localhost:5000${c.fileUrl}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-accent hover:text-primary transition"
                                >
                                    View Judgment
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CaseLaws;
