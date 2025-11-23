import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ArticleDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/api/articles/${id}`);
                setArticle(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchArticle();
    }, [id]);

    if (loading) return <div className="pt-32 text-center text-white">Loading...</div>;
    if (!article) return <div className="pt-32 text-center text-white">Article not found</div>;

    return (
        <div className="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {article.image && (
                <img src={`http://localhost:5000${article.image}`} alt={article.title} className="w-full h-96 object-cover rounded-lg shadow-2xl mb-8" />
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{article.title}</h1>
            <div className="flex items-center justify-between text-gray-400 mb-8 border-b border-gray-700 pb-4">
                <span>By {article.author}</span>
                <span>{new Date(article.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed whitespace-pre-wrap">
                {article.content}
            </div>
            <div className="mt-8 pt-4 border-t border-gray-700">
                <h3 className="text-accent font-bold mb-2">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                        <span key={index} className="bg-secondary text-white px-3 py-1 rounded-full text-sm border border-gray-600">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArticleDetail;
