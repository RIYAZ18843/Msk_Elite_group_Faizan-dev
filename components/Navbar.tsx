'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'glass-effect dark:bg-primary-950/80 shadow-sm py-2'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3 cursor-pointer"
                        onClick={() => scrollToSection('#home')}
                    >
                        <div className="relative w-12 h-12 bg-gradient-to-br from-primary-900 to-primary-600 rounded-lg flex items-center justify-center shadow-glow">
                            <span className="text-2xl font-bold text-white">MSK</span>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl font-display font-bold text-primary-900 dark:text-white">
                                MSK Elite Group
                            </h1>
                            <p className="text-xs text-gray-600 dark:text-primary-300">Training & Placement</p>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link, index) => (
                            <motion.button
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => scrollToSection(link.href)}
                                className="text-gray-700 dark:text-primary-200 hover:text-primary-600 dark:hover:text-gold font-medium transition-colors duration-200 relative group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 group-hover:w-full transition-all duration-300"></span>
                            </motion.button>
                        ))}
                        <ThemeToggle />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('#contact')}
                            className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-glow transition-all duration-300"
                        >
                            Get Started
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-700 dark:text-primary-200 hover:text-primary-600 transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <HiX className="w-7 h-7" />
                            ) : (
                                <HiMenu className="w-7 h-7" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{
                    height: isMobileMenuOpen ? 'auto' : 0,
                    opacity: isMobileMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-white/95 dark:bg-primary-950/95 backdrop-blur-md shadow-lg"
            >
                <div className="px-4 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className="block w-full text-left px-4 py-3 text-gray-700 dark:text-primary-200 hover:text-primary-600 dark:hover:text-gold hover:bg-primary-50 dark:hover:bg-primary-900/50 rounded-lg font-medium transition-all duration-200"
                        >
                            {link.name}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollToSection('#contact')}
                        className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold shadow-lg"
                    >
                        Get Started
                    </button>
                </div>
            </motion.div>
        </motion.nav>
    );
}
