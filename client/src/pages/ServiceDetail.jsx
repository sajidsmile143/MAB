import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaGavel, FaBook, FaGlobe, FaBuilding, FaUserTie, FaArrowLeft, FaPhone } from 'react-icons/fa';

const servicesData = {
    'civil-law': {
        title: 'Civil Law',
        icon: <FaBalanceScale />,
        description: 'Our civil law practice provides comprehensive legal solutions for disputes involving property, contracts, and personal rights.',
        details: [
            'Property disputes and land acquisition',
            'Contract drafting and enforcement',
            'Tort claims and damages',
            'Specific performance suits',
            'Injunction and restraining orders',
            'Civil appeals and revisions'
        ],
        laws: ['Civil Procedure Code 1908', 'Contract Act 1872', 'Transfer of Property Act 1882'],
    },
    'criminal-law': {
        title: 'Criminal Law',
        icon: <FaGavel />,
        description: 'Expert defense and prosecution services for all types of criminal cases under Pakistan Penal Code.',
        details: [
            'Murder and qatl cases (302 PPC)',
            'Theft, robbery, and dacoity',
            'Fraud and cheating cases',
            'Narcotics and drug offenses',
            'Bail applications and appeals',
            'Criminal trial representation'
        ],
        laws: ['Pakistan Penal Code 1860', 'Criminal Procedure Code 1898', 'Qanun-e-Shahadat Order 1984'],
    },
    'family-law': {
        title: 'Family Law',
        icon: <FaUserTie />,
        description: 'Sensitive handling of family matters including divorce, custody, and inheritance disputes.',
        details: [
            'Divorce (Khula, Talaq) proceedings',
            'Child custody and visitation rights',
            'Maintenance and alimony claims',
            'Inheritance and succession matters',
            'Guardianship certificates',
            'Marriage registration and nikah nama'
        ],
        laws: ['Muslim Family Laws Ordinance 1961', 'Guardians and Wards Act 1890', 'West Pakistan Family Courts Act 1964'],
    },
    'corporate-law': {
        title: 'Corporate Law',
        icon: <FaBuilding />,
        description: 'Complete corporate legal services from company formation to mergers and acquisitions.',
        details: [
            'Company registration and incorporation',
            'Corporate compliance and governance',
            'Mergers, acquisitions, and joint ventures',
            'Shareholder agreements and disputes',
            'Board resolutions and minutes',
            'Corporate restructuring'
        ],
        laws: ['Companies Act 2017', 'Securities Act 2015', 'Competition Act 2010'],
    },
    'taxation': {
        title: 'Taxation',
        icon: <FaBook />,
        description: 'Expert tax planning, filing, and dispute resolution services for individuals and businesses.',
        details: [
            'Income tax filing and returns',
            'Sales tax registration and compliance',
            'Tax audits and assessments',
            'Tax appeals and litigation',
            'Withholding tax matters',
            'Tax planning and advisory'
        ],
        laws: ['Income Tax Ordinance 2001', 'Sales Tax Act 1990', 'Federal Excise Act 2005'],
    },
    'cyber-crime': {
        title: 'Cyber Crime',
        icon: <FaGlobe />,
        description: 'Legal support for cyber harassment, fraud, and digital crimes under PECA.',
        details: [
            'Cyber harassment complaints',
            'Online fraud and scams',
            'Data theft and privacy violations',
            'Social media defamation',
            'Digital evidence collection',
            'FIA cyber crime reporting'
        ],
        laws: ['Prevention of Electronic Crimes Act 2016', 'Pakistan Penal Code 1860'],
    },
    'immigration': {
        title: 'Immigration',
        icon: <FaGlobe />,
        description: 'Visa applications, immigration appeals, and citizenship matters for overseas Pakistanis.',
        details: [
            'Work visa applications',
            'Student visa processing',
            'Family reunion visas',
            'Immigration appeals',
            'Citizenship applications',
            'Deportation defense'
        ],
        laws: ['Foreigners Act 1946', 'Pakistan Citizenship Act 1951'],
    },
    'intellectual-property': {
        title: 'Intellectual Property',
        icon: <FaBook />,
        description: 'Protection and enforcement of trademarks, copyrights, and patents.',
        details: [
            'Trademark registration and renewal',
            'Copyright registration',
            'Patent applications',
            'IP infringement cases',
            'Licensing agreements',
            'Brand protection'
        ],
        laws: ['Trade Marks Ordinance 2001', 'Copyright Ordinance 1962', 'Patents Ordinance 2000'],
    },
    'labor-law': {
        title: 'Labor Law',
        icon: <FaUserTie />,
        description: 'Employment disputes, wrongful termination, and labor rights representation.',
        details: [
            'Wrongful termination cases',
            'Employment contracts',
            'Workplace harassment',
            'Labor court representation',
            'Service tribunal matters',
            'Employee benefits and rights'
        ],
        laws: ['Industrial Relations Act 2012', 'Factories Act 1934', 'Employees Old-Age Benefits Act 1976'],
    },
    'banking-law': {
        title: 'Banking Law',
        icon: <FaBuilding />,
        description: 'Banking disputes, loan recovery, and financial regulations compliance.',
        details: [
            'Loan default and recovery',
            'Banking ombudsman complaints',
            'Credit card disputes',
            'Mortgage and collateral issues',
            'Banking fraud cases',
            'Financial regulatory compliance'
        ],
        laws: ['Banking Companies Ordinance 1962', 'State Bank of Pakistan Act 1956', 'Financial Institutions (Recovery of Finances) Ordinance 2001'],
    },
    'constitutional-law': {
        title: 'Constitutional Law',
        icon: <FaBalanceScale />,
        description: 'Constitutional petitions, writs, and fundamental rights protection.',
        details: [
            'Writ petitions (Habeas Corpus, Mandamus)',
            'Fundamental rights violations',
            'Constitutional challenges',
            'Public interest litigation',
            'Judicial review',
            'High Court and Supreme Court matters'
        ],
        laws: ['Constitution of Pakistan 1973', 'Contempt of Court Ordinance 2003'],
    },
    'overseas-services': {
        title: 'Overseas Services',
        icon: <FaGlobe />,
        description: 'Legal assistance for overseas Pakistanis including property, inheritance, and POA matters.',
        details: [
            'Power of Attorney (POA) services',
            'Property management and sale',
            'Inheritance claims',
            'NICOP and passport issues',
            'Overseas Pakistani card matters',
            'Repatriation of assets'
        ],
        laws: ['Overseas Pakistanis Foundation Ordinance 1979', 'Transfer of Property Act 1882'],
    },
};

const ServiceDetail = () => {
    const { serviceName } = useParams();
    const service = servicesData[serviceName];

    if (!service) {
        return (
            <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
                <Link to="/services" className="text-accent hover:underline">← Back to Services</Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/services" className="inline-flex items-center text-accent hover:text-white mb-8 transition">
                <FaArrowLeft className="mr-2" /> Back to Services
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-secondary p-8 md:p-12 rounded-lg shadow-xl border border-gray-700"
            >
                <div className="flex items-center mb-6">
                    <div className="text-5xl text-accent mr-6">{service.icon}</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">{service.title}</h1>
                </div>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">{service.description}</p>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-accent mb-4">Our Services Include:</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.details.map((detail, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-accent mr-3 mt-1">✓</span>
                                <span className="text-gray-300">{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-accent mb-4">Relevant Laws & Regulations:</h2>
                    <div className="flex flex-wrap gap-3">
                        {service.laws.map((law, index) => (
                            <span key={index} className="bg-primary px-4 py-2 rounded-full text-gray-300 border border-gray-600">
                                {law}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="bg-primary p-6 rounded-lg border border-accent/30 mt-8">
                    <h3 className="text-xl font-bold text-white mb-3">Need Legal Assistance?</h3>
                    <p className="text-gray-300 mb-4">Contact our expert team for a consultation on your {service.title.toLowerCase()} matter.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/contact"
                            className="bg-accent text-primary px-6 py-3 rounded-lg font-bold hover:bg-white transition text-center"
                        >
                            Contact Us
                        </Link>
                        <a
                            href="tel:03017683233"
                            className="border border-accent text-accent px-6 py-3 rounded-lg font-bold hover:bg-accent hover:text-primary transition flex items-center justify-center"
                        >
                            <FaPhone className="mr-2" /> Call Now
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ServiceDetail;
