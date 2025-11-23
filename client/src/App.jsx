import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Laws from './pages/Laws';
import CaseLaws from './pages/CaseLaws';
import Videos from './pages/Videos';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Testimonials from './pages/Testimonials';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-primary text-text font-sans flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/laws" element={<Laws />} />
              <Route path="/cases" element={<CaseLaws />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceName" element={<ServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:id" element={<ArticleDetail />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
