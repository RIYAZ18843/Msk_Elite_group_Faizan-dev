'use client';

import { motion } from 'framer-motion';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    const services = [
        'Communication Training',
        'HR Training',
        'Finance Training',
        'SAP Basics',
        'ERP Utilization',
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

    const scrollToSection = (href: string) => {
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
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-xl font-bold text-white">MSK</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-display font-bold">
                                    MSK Elite Group
                                </h3>
                                <p className="text-sm text-primary-200">
                                    Training & Placement
                                </p>
                            </div>
                        </div>
                        <p className="text-primary-200 mb-6 leading-relaxed">
                            Empowering professionals through world-class corporate training
                            and placement services.
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
                        <h4 className="text-lg font-display font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-primary-200 hover:text-accent-400 transition-colors duration-200 flex items-center group"
                                    >
                                        <span className="w-0 h-0.5 bg-accent-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-display font-bold mb-6">
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
                        <h4 className="text-lg font-display font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <HiLocationMarker className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                                <span className="text-primary-200">
                                    Pillar Number 35, Mehidipatnam, Hyderabad
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <HiPhone className="w-5 h-5 text-accent-400 flex-shrink-0" />
                                <a
                                    href="tel:+918790754529"
                                    className="text-primary-200 hover:text-accent-400 transition-colors"
                                >
                                    +91 8790754529
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <HiMail className="w-5 h-5 text-accent-400 flex-shrink-0" />
                                <a
                                    href="mailto:info@mskelitegroup.com"
                                    className="text-primary-200 hover:text-accent-400 transition-colors"
                                >
                                    info@mskelitegroup.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-primary-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-primary-300 text-sm text-center md:text-left">
                            © {currentYear} MSK Elite Group. All rights reserved.
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
