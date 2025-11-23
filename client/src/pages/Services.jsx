import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaGavel, FaBook, FaGlobe, FaBuilding, FaUserTie } from 'react-icons/fa';

const servicesList = [
    { title: 'Civil Law', slug: 'civil-law', icon: <FaBalanceScale />, desc: 'Expert guidance on civil disputes, property matters, and contracts.' },
    { title: 'Criminal Law', slug: 'criminal-law', icon: <FaGavel />, desc: 'Defense and prosecution strategies for criminal cases.' },
    { title: 'Family Law', slug: 'family-law', icon: <FaUserTie />, desc: 'Divorce, custody, and inheritance matters.' },
    { title: 'Corporate Law', slug: 'corporate-law', icon: <FaBuilding />, desc: 'Company registration, compliance, and mergers.' },
    { title: 'Taxation', slug: 'taxation', icon: <FaBook />, desc: 'Income tax, sales tax, and corporate tax filing.' },
    { title: 'Cyber Crime', slug: 'cyber-crime', icon: <FaGlobe />, desc: 'Legal support for cyber harassment and fraud cases.' },
    { title: 'Immigration', slug: 'immigration', icon: <FaGlobe />, desc: 'Visa applications and immigration appeals.' },
    { title: 'Intellectual Property', slug: 'intellectual-property', icon: <FaBook />, desc: 'Trademark, copyright, and patent registration.' },
    { title: 'Labor Law', slug: 'labor-law', icon: <FaUserTie />, desc: 'Employment disputes and labor rights.' },
    { title: 'Banking Law', slug: 'banking-law', icon: <FaBuilding />, desc: 'Banking disputes and financial regulations.' },
    { title: 'Constitutional Law', slug: 'constitutional-law', icon: <FaBalanceScale />, desc: 'Writs and constitutional petitions.' },
    { title: 'Overseas Services', slug: 'overseas-services', icon: <FaGlobe />, desc: 'Legal assistance for overseas Pakistanis.' },
];

const Services = () => {
    return (
        <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-accent mb-4">Our Services</h1>
                <p className="text-muted text-lg">Comprehensive legal solutions for individuals and businesses.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesList.map((service, index) => (
                    <Link key={index} to={`/services/${service.slug}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-secondary p-8 rounded-lg shadow-lg border border-gray-700 hover:border-accent transition group cursor-pointer h-full"
                        >
                            <div className="text-4xl text-accent mb-6 group-hover:text-white transition">{service.icon}</div>
                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-muted">{service.desc}</p>
                            <div className="mt-4 text-accent group-hover:text-white transition">
                                Learn More →
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Services;
