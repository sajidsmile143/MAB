import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-secondary text-muted py-10 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-accent mb-4">MAB Judiciary</h3>
                        <p className="text-sm">
                            Premium judiciary exam preparation and law resource platform for Pakistani students and overseas Pakistanis.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/laws" className="hover:text-accent">Laws & PDFs</a></li>
                            <li><a href="/cases" className="hover:text-accent">Case Laws</a></li>
                            <li><a href="/videos" className="hover:text-accent">Video Lectures</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center"><FaPhone className="mr-2 text-accent" /> 0301-7683233</li>
                            <li className="flex items-center"><FaEnvelope className="mr-2 text-accent" /> info@mabjudiciary.pk</li>
                            <li className="flex items-center"><FaWhatsapp className="mr-2 text-emerald" /> 0333-2511993</li>
                            <li className="flex items-center"><a href="https://www.facebook.com/share/1DFuw6uRyF/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500"><FaFacebook className="mr-2" /> Facebook Page</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
                    &copy; {new Date().getFullYear()} MAB Judiciary. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
