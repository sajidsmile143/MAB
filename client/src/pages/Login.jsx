import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { motion } from 'framer-motion';

const Login = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const { login, register } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            if (isRegister) {
                await register(formData.name, formData.email, formData.password);
            } else {
                await login(formData.email, formData.password);
            }
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className="pt-32 pb-20 min-h-screen flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-secondary p-8 rounded-lg shadow-2xl border border-gray-700 w-full max-w-md"
            >
                <h2 className="text-3xl font-bold text-accent mb-6 text-center">
                    {isRegister ? 'Create Account' : 'Welcome Back'}
                </h2>

                {error && <div className="bg-red-500 text-white p-3 rounded mb-4 text-center">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {isRegister && (
                        <div>
                            <label className="block text-gray-400 mb-2">Full Name</label>
                            <input
                                type="text"
                                className="w-full bg-primary text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent border border-gray-600"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                    )}
                    <div>
                        <label className="block text-gray-400 mb-2">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-primary text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent border border-gray-600"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full bg-primary text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent border border-gray-600"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-accent text-primary font-bold py-3 rounded-lg hover:bg-yellow-600 transition"
                    >
                        {isRegister ? 'Register' : 'Login'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-400">
                        {isRegister ? 'Already have an account?' : "Don't have an account?"}
                        <button
                            onClick={() => setIsRegister(!isRegister)}
                            className="text-accent ml-2 hover:underline font-bold"
                        >
                            {isRegister ? 'Login' : 'Register'}
                        </button>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
