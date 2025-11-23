import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-primary text-text shadow-lg fixed w-full z-50 border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-serif font-bold text-accent tracking-wider">
              MAB Judiciary
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/laws" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Laws</Link>
              <Link to="/cases" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Case Laws</Link>
              <Link to="/articles" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Articles</Link>
              <Link to="/videos" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Videos</Link>
              <Link to="/services" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/testimonials" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Testimonials</Link>
              <Link to="/about" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/contact" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
          <div className="hidden md:block">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-accent font-bold flex items-center">
                  <FaUserCircle className="mr-2" /> {user.name}
                </span>
                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md font-bold hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="bg-accent text-primary px-4 py-2 rounded-md font-bold hover:bg-yellow-600 transition">
                Login
              </Link>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-secondary"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:text-accent px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/laws" className="block hover:text-accent px-3 py-2 rounded-md text-base font-medium">Laws</Link>
            <Link to="/cases" className="block hover:text-accent px-3 py-2 rounded-md text-base font-medium">Case Laws</Link>
            <Link to="/videos" className="block hover:text-accent px-3 py-2 rounded-md text-base font-medium">Videos</Link>
            <Link to="/services" className="block hover:text-accent px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link to="/about" className="block hover:text-accent px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/contact" className="block hover:text-accent px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            {user ? (
              <>
                <div className="block text-accent px-3 py-2 font-bold">{user.name}</div>
                <button onClick={logout} className="block w-full text-left bg-red-500 text-white px-3 py-2 rounded-md text-base font-medium mt-2">Logout</button>
              </>
            ) : (
              <Link to="/login" className="block bg-accent text-primary px-3 py-2 rounded-md text-base font-medium mt-4">Login</Link>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
