import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

export default function Footer({ onContactClick }) {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'Banking', href: '/banking' },
        { name: 'International Banking', href: '/international-banking' },
        { name: 'Training & Placement', href: '/training' },
        { name: 'Real Estate', href: '/real-estate' },
    ];

    const services = [
        'Digital Marketing',
        'Software Testing',
        'UI/UX Design',
        'Project Management',
        'Full Stack Developer',
    ];

    const socialLinks = [
        {
            name: 'Facebook',
            icon: FaFacebookF,
            href: 'https://www.facebook.com/people/charts-field-services/61578501100902/',
        },
        {
            name: 'Instagram',
            icon: FaInstagram,
            href: 'https://www.instagram.com/chartsfieldservices',
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedinIn,
            href: 'https://www.linkedin.com/in/chartsfield-services-ab25283b8/',
        },
    ];

    return (
        <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <img
                                src="/image.png"
                                alt="Chartfield Services"
                                className="w-12 h-12 object-contain"
                                onError={(e) => { e.target.style.display = 'none' }}
                            />
                            <div>
                                <h3 className="text-lg font-bold">Chartfield Services</h3>
                                <p className="text-xs text-primary-200">Banking</p>
                            </div>
                        </div>
                        <p className="text-primary-200 text-sm leading-relaxed mb-4">
                            Chartfield Services is a comprehensive banking and financial recovery services organization dedicated to managing stressed, delinquent, and non-performing assets for Banks and Financial Institutions.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-2">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-md font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-primary-200 hover:text-accent-400 text-sm transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h4 className="text-md font-bold mb-4">Our Services</h4>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li
                                    key={service}
                                    className="text-primary-200 hover:text-accent-400 text-sm transition-colors duration-200 cursor-pointer"
                                >
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-md font-bold mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-2">
                                <HiLocationMarker className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                                <span className="text-primary-200 text-sm leading-relaxed">
                                    13-6-437/2/A/4/A Flat 202, Second Floor, Guddimalkapur, Hyderabad - 28
                                </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <HiPhone className="w-4 h-4 text-accent-400 flex-shrink-0" />
                                <a
                                    href="tel:+919640202170"
                                    className="text-primary-200 hover:text-accent-400 text-sm transition-colors"
                                >
                                    +91 96402 02170
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <HiMail className="w-4 h-4 text-accent-400 flex-shrink-0" />
                                <a
                                    href="mailto:hr@chartfieldservices.com"
                                    className="text-primary-200 hover:text-accent-400 text-sm transition-colors"
                                >
                                    hr@chartfieldservices.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-primary-700 pt-6 mt-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
                        <p className="text-primary-300 text-xs text-center sm:text-left">
                            © {currentYear} Chartfield Services. All rights reserved.
                        </p>
                        <div className="flex space-x-4 text-xs">
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