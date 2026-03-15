import React, { lazy, Suspense, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import ContactModal from './components/ContactModal';

// Page components
import Home from './pages/Home';
const RealEstate = lazy(() => import('./pages/RealEstate'));
const Training = lazy(() => import('./pages/Training'));
const DubaiBanking = lazy(() => import('./pages/DubaiBanking'));
const RecoveryBanking = lazy(() => import('./pages/RecoveryBanking'));

// Premium Loading Spinner
const LoadingScreen = () => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-primary-950 transition-colors duration-500">
    <div className="relative">
      <div className="w-20 h-20 border-4 border-primary-200 dark:border-primary-900 rounded-full animate-spin"></div>
      <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-primary-600 rounded-full animate-spin shadow-glow"></div>
      <div className="mt-8 text-center animate-pulse">
        <span className="text-xl font-bold text-primary-900 dark:text-white tracking-widest uppercase">Chartfield</span>
      </div>
    </div>
  </div>
);

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <HashRouter>
        <div className={`min-h-screen antialiased font-sans text-gray-900 dark:text-gray-100`}>
          <div className="bg-noise"></div>
          <Navbar onContactClick={() => setIsContactModalOpen(true)} />
          <main>
            <Suspense fallback={<LoadingScreen />}>
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
