import React from 'react';
import { motion } from 'framer-motion';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

export default function Footer({ onContactClick }) {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'Recovery Banking', href: '/recovery-banking' },
        { name: 'Dubai Banking', href: '/dubai-banking' },
        { name: 'Training & Placement', href: '/training' },
        { name: 'Real Estate', href: '/real-estate' },
    ];

    const services = [
        'Retail & MSME Recoveries',
        'Corporate Loan Recovery',
        'Stressed Asset Management',
        'Physical Asset Tracing',
        'Sovereign Debt Dubai',
    ];

    const socialLinks = [
        {
            name: 'Facebook',
            icon: FaFacebookF,
            href: 'https://www.facebook.com',
            color: 'hover:bg-blue-600',
        },
        {
            name: 'Instagram',
            icon: FaInstagram,
            href: 'https://www.instagram.com',
            color: 'hover:bg-pink-600',
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedinIn,
            href: 'https://www.linkedin.com',
            color: 'hover:bg-blue-700',
        },
        {
            name: 'Twitter',
            icon: FaTwitter,
            href: 'https://www.twitter.com',
            color: 'hover:bg-blue-400',
        },
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-4 mb-6">
                            <img
                                src="/logo.png"
                                alt="Chartfield Services"
                                className="w-32 h-32 object-contain mix-blend-multiply flex-shrink-0"
                                style={{ isolation: 'isolate' }}
                            />
                            <div>
                                <h3 className="text-xl font-bold">
                                    Chartfield Services
                                </h3>
                                <p className="text-sm text-primary-200">
                                    Banking & Recovery
                                </p>
                            </div>
                        </div>
                        <p className="text-primary-200 mb-6 leading-relaxed">
                            Chartfield Services is a comprehensive banking and financial recovery services organization
                            dedicated to managing stressed, delinquent, and non-performing assets for Banks and Financial Institutions.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-3">
                            {socialLinks.map((social) => {
                                if (social.name === 'LinkedIn') {
                                    return (
                                        <motion.a
                                            key={social.name}
                                            href="https://www.linkedin.com/in/faizan-khan-757322288/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center ${social.color} transition-all duration-300 shadow-lg`}
                                            aria-label={social.name}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </motion.a>
                                    );
                                }
                                return (
                                    <motion.div
                                        key={social.name}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center ${social.color} transition-all duration-300 shadow-lg cursor-default border border-white/10`}
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-5 h-5 opacity-80" />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-primary-200 hover:text-accent-400 transition-colors duration-200 flex items-center group"
                                    >
                                        <span className="w-0 h-0.5 bg-accent-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">
                            Our Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li
                                    key={service}
                                    className="text-primary-200 hover:text-accent-400 transition-colors duration-200 cursor-pointer"
                                >
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <HiLocationMarker className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                                <span className="text-primary-200 leading-relaxed">
                                    13-6-437/2/A/4/A Flat 202, Second Floor, Guddimalkapur, Hyderabad - 28
                                </span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <HiPhone className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                                <a
                                    href="tel:+918331979865"
                                    className="text-primary-200 hover:text-accent-400 transition-colors"
                                >
                                    +91 833 1979 865
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <HiMail className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                                <a
                                    href="mailto:admin@chartfieldservices.com"
                                    className="text-primary-200 hover:text-accent-400 transition-colors"
                                >
                                    admin@chartfieldservices.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-primary-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-primary-300 text-sm text-center md:text-left">
                            © {currentYear} Chartfield Services. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a
                                href="#"
                                className="text-primary-300 hover:text-accent-400 transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-primary-300 hover:text-accent-400 transition-colors"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
