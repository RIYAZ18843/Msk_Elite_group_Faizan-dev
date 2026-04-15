import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import ContactModal from './components/ContactModal';
import ScrollToTop from './components/ScrollToTop';


// Page components
import Home from './pages/Home';
import RealEstate from './pages/RealEstate';
import Training from './pages/Training';
import InternationalBanking from './pages/InternationalBanking';
import RecoveryBanking from './pages/RecoveryBanking';



function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <RedirectToHome />
        <div className={`min-h-screen antialiased font-sans text-gray-900 dark:text-gray-100`}>
          <div className="bg-noise"></div>
          <Navbar onContactClick={() => setIsContactModalOpen(true)} />
          <main>
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Home onContactClick={() => setIsContactModalOpen(true)} />} />
                <Route path="/real-estate" element={<RealEstate onContactClick={() => setIsContactModalOpen(true)} />} />
                <Route path="/training" element={<Training />} />
                <Route path="/international-banking" element={<InternationalBanking />} />
                <Route path="/recovery-banking" element={<RecoveryBanking />} />
              </Routes>
            </Suspense>
          </main>
          <Footer onContactClick={() => setIsContactModalOpen(true)} />
          <WhatsAppWidget />
          <ContactModal 
            isOpen={isContactModalOpen} 
            onClose={() => setIsContactModalOpen(false)} 
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

function RedirectToHome() {
    const navigate = useNavigate();
    const location = useLocation();
    const isFirstLoad = React.useRef(true);

    React.useEffect(() => {
        if (isFirstLoad.current) {
            isFirstLoad.current = false;
            // Immediate check for reload redirection
            if (location.pathname !== '/' && !location.hash) {
                navigate('/', { replace: true });
            }
        }
    }, [navigate, location.pathname, location.hash]);

    return null;
}

export default App;
