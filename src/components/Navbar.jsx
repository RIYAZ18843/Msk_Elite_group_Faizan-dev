import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ onContactClick }) {
    const { theme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Real Estate', href: '/real-estate' },
        { name: 'Recovery Banking', href: '/recovery-banking' },
        { name: 'Dubai Banking', href: '/dubai-banking' },
        { name: 'Training & Placement', href: '/training' },
    ];

    const handleNavClick = (href) => {
        setIsMobileMenuOpen(false);
        if (href.startsWith('/#') && location.pathname === '/') {
            const id = href.split('#')[1];
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'py-3 bg-white/80 dark:bg-primary-950/80 backdrop-blur-lg shadow-lg border-b border-primary-100/20'
                    : 'py-5 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link 
                        to="/" 
                        onClick={() => handleNavClick('/#home')}
                        className="flex items-center space-x-2 group"
                    >
                        <img 
                            src="/logo.png" 
                            alt="Chartfield Services" 
                            className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300 mix-blend-multiply" 
                            style={{ isolation: 'isolate' }}
                        />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-primary-900 dark:text-primary-50 tracking-tight">
                                Chartfield Services
                            </span>
                            <span className="text-[10px] text-primary-600 dark:text-primary-400 font-semibold uppercase tracking-[0.2em] -mt-1">
                                Banking & Recovery
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${location.pathname === link.href || (location.pathname === '/' && link.href.startsWith('/#'))
                                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50/50 dark:bg-primary-900/30'
                                        : 'text-gray-600 dark:text-primary-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50/50 dark:hover:bg-primary-900/30'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pl-4 ml-4 border-l border-primary-100/30 flex items-center space-x-4">
                            <ThemeToggle />
                            <button
                                onClick={onContactClick}
                                className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold text-sm shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300 active:scale-95"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-primary-900 dark:text-primary-50 hover:bg-primary-50 dark:hover:bg-primary-900/50 rounded-lg transition-colors"
                        >
                            {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-primary-950 border-b border-primary-100/20 shadow-xl overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    className="block px-4 py-3 text-base font-semibold text-gray-600 dark:text-primary-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-xl transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={onContactClick}
                                className="block w-full mt-4 px-6 py-4 bg-primary-600 text-white rounded-xl font-semibold text-center shadow-lg shadow-primary-500/20"
                            >
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
