import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="relative bg-primary h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary z-10"></div>
                {/* Abstract Background Animation could go here */}
                <div className="relative z-20 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-serif font-bold text-accent mb-8 tracking-tight"
                    >
                        MAB Judiciary
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Excellence in Legal Education & Judiciary Preparation.<br />
                        <span className="text-accent">Empowering Future Judges & Lawyers.</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex justify-center space-x-4"
                    >
                        <Link to="/laws" className="bg-accent text-primary px-10 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-primary transition duration-300 uppercase tracking-widest">
                            Explore Laws
                        </Link>
                        <Link to="/videos" className="border border-accent text-accent px-10 py-4 rounded-sm font-bold text-lg hover:bg-accent hover:text-primary transition duration-300 uppercase tracking-widest">
                            Watch Lectures
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-20 bg-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-white mb-12">Our Premium Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['Civil Law', 'Criminal Law', 'Family Law', 'Corporate Law', 'Taxation', 'Cyber Crime'].map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-primary p-6 rounded-lg shadow-md border border-gray-700 hover:border-accent transition"
                            >
                                <h3 className="text-xl font-bold text-accent mb-2">{service}</h3>
                                <p className="text-muted">Comprehensive resources and expert guidance for {service} matters.</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link to="/services" className="text-accent hover:underline text-lg">View All Services &rarr;</Link>
                    </div>
                </div>
            </section>

            {/* Featured Video Section */}
            <section className="py-20 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">Latest Video Lecture</h2>
                    <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                        {/* Placeholder for Video Embed */}
                        <div className="flex items-center justify-center h-96 text-muted">
                            <p>Featured Video Loading...</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-white mb-12">Success Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Ali Khan", role: "Civil Judge", quote: "MAB Judiciary's resources were instrumental in my success." },
                            { name: "Sara Ahmed", role: "ADPP", quote: "The video lectures clarified complex legal concepts perfectly." },
                            { name: "Usman Zafar", role: "High Court Advocate", quote: "A must-have platform for every law student in Pakistan." }
                        ].map((t, i) => (
                            <div key={i} className="bg-primary p-6 rounded-lg shadow-lg relative">
                                <div className="text-accent text-4xl absolute top-4 left-4">"</div>
                                <p className="text-muted mt-6 mb-4 italic">{t.quote}</p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
                                    <div>
                                        <h4 className="text-white font-bold">{t.name}</h4>
                                        <p className="text-sm text-gray-400">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
