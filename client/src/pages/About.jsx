import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl font-bold text-accent mb-4">About MAB Judiciary</h1>
                <p className="text-muted text-lg max-w-3xl mx-auto">
                    Dedicated to shaping the future of Pakistan's legal system through excellence in education and practice.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Law Office"
                        className="rounded-lg shadow-2xl border border-gray-700"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                        MAB Judiciary was founded with a singular vision: to bridge the gap between academic legal education and practical judicial requirements. We understand the challenges faced by aspiring judges and lawyers in Pakistan.
                    </p>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                        Our platform combines traditional legal wisdom with modern technology, providing students and professionals with accessible, high-quality resources. From comprehensive case law databases to expert video lectures, we are your partners in legal success.
                    </p>
                    <div className="flex space-x-4 mt-8">
                        <div className="text-center">
                            <h3 className="text-4xl font-bold text-accent">500+</h3>
                            <p className="text-sm text-gray-400">Successful Students</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-4xl font-bold text-accent">1000+</h3>
                            <p className="text-sm text-gray-400">Case Laws</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-4xl font-bold text-accent">50+</h3>
                            <p className="text-sm text-gray-400">Video Lectures</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
