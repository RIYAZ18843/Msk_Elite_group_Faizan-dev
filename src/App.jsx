import React, { lazy, Suspense, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import ContactModal from './components/ContactModal';

// Page components
import Home from './pages/Home';
import RealEstate from './pages/RealEstate';
import Training from './pages/Training';
import DubaiBanking from './pages/DubaiBanking';
import RecoveryBanking from './pages/RecoveryBanking';



function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <HashRouter>
        <div className={`min-h-screen antialiased font-sans text-gray-900 dark:text-gray-100`}>
          <div className="bg-noise"></div>
          <Navbar onContactClick={() => setIsContactModalOpen(true)} />
          <main>
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Home onContactClick={() => setIsContactModalOpen(true)} />} />
                <Route path="/real-estate" element={<RealEstate onContactClick={() => setIsContactModalOpen(true)} />} />
                <Route path="/training" element={<Training />} />
                <Route path="/dubai-banking" element={<DubaiBanking />} />
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
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
