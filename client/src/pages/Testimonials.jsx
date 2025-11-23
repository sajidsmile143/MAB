import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        name: "Advocate Ali Khan",
        role: "Civil Judge",
        image: "/testimonial1.png",
        quote: "MAB Judiciary's resources were instrumental in my success. The comprehensive case laws and video lectures provided the clarity I needed to ace my exams."
    },
    {
        name: "Sara Ahmed",
        role: "ADPP",
        image: "/testimonial2.png",
        quote: "The video lectures clarified complex legal concepts perfectly. I highly recommend this platform to all aspiring female lawyers and judges."
    },
    {
        name: "Usman Zafar",
        role: "High Court Advocate",
        image: "/testimonial3.png",
        quote: "A must-have platform for every law student in Pakistan. The depth of knowledge and the practical approach to teaching law is unmatched."
    }
];

const Testimonials = () => {
    return (
        <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-accent mb-4">Success Stories</h1>
                <p className="text-muted text-lg">Hear from our successful students and professionals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-secondary p-8 rounded-lg shadow-lg border border-gray-700 relative"
                    >
                        <FaQuoteLeft className="text-accent text-4xl absolute top-4 left-4 opacity-20" />
                        <div className="flex justify-center mb-6">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-24 h-24 rounded-full object-cover border-2 border-accent"
                            />
                        </div>
                        <p className="text-gray-300 italic mb-6 text-center">"{t.quote}"</p>
                        <div className="text-center">
                            <h3 className="text-white font-bold text-xl">{t.name}</h3>
                            <p className="text-accent text-sm">{t.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
