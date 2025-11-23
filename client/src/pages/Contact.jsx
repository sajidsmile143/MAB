import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create mailto link with form data
        const subject = encodeURIComponent(`Contact Form - ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}\n\n` +
            `---\n` +
            `This message was sent from MAB Judiciary contact form.`
        );

        // Open user's email client
        window.location.href = `mailto:mablawcompany@gmail.com?subject=${subject}&body=${body}`;

        // Clear form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-accent mb-4">Contact Us</h1>
                <p className="text-muted text-lg">Get in touch with our team for inquiries and support.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-secondary p-8 rounded-lg shadow-lg border border-gray-700"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <FaMapMarkerAlt className="text-accent text-xl mt-1 mr-4" />
                            <div>
                                <h3 className="text-white font-bold">Address</h3>
                                <p className="text-gray-400">Office no.06 third floor, the mall, lahore</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaPhone className="text-accent text-xl mt-1 mr-4" />
                            <div>
                                <h3 className="text-white font-bold">Phone</h3>
                                <p className="text-gray-400">0301-7683233</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaEnvelope className="text-accent text-xl mt-1 mr-4" />
                            <div>
                                <h3 className="text-white font-bold">Email</h3>
                                <a href="mailto:mablawcompany@gmail.com" className="text-accent hover:text-white transition">
                                    mablawcompany@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-white font-bold mb-4">Connect on WhatsApp</h3>
                        <a
                            href="https://wa.me/923332511993"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-500 text-white px-6 py-3 rounded-full font-bold flex items-center justify-center hover:bg-emerald-600 transition w-full md:w-auto"
                        >
                            <FaWhatsapp className="mr-2 text-xl" /> Chat with Us
                        </a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-secondary p-8 rounded-lg shadow-lg border border-gray-700"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full bg-primary text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent border border-gray-600"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full bg-primary text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent border border-gray-600"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 mb-2">Message</label>
                            <textarea
                                rows="4"
                                className="w-full bg-primary text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent border border-gray-600"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-accent text-primary font-bold py-3 rounded-lg hover:bg-yellow-600 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="mt-6 p-4 bg-primary/50 rounded-lg border border-accent/30">
                        <p className="text-sm text-gray-400 text-center">
                            Clicking "Send Message" will open your email client with the message pre-filled.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
