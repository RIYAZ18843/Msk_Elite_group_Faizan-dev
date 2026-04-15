import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    HiArrowRight,
    HiSparkles,
    HiUserGroup,
    HiChip,
    HiClock,
} from 'react-icons/hi';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const reasons = [
        {
            icon: HiUserGroup,
            number: '7+',
            title: 'More than 7 customers have experienced.',
            gradient: 'from-blue-500 to-cyan-500',
            description: 'development'
        },
        {
            icon: HiChip,
            number: '8+',
            title: 'More than 8,000 customer project',
            gradient: 'from-purple-500 to-pink-500',
            description: 'development'
        },
        {
            icon: HiClock,
            number: '5+',
            title: 'More than 5+ years of experience.',
            gradient: 'from-orange-500 to-red-500',
            description: 'development'
        }
    ];

    return (
        <section
            id="about"
            ref={ref}
            className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-primary-950 dark:to-primary-900 transition-colors duration-500 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 dark:bg-primary-800/50 rounded-full mb-6">
                        <HiSparkles className="text-primary-600 w-5 h-5" />
                        <span className="text-sm font-semibold text-primary-600 dark:text-primary-300">
                            ABOUT US
                        </span>
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Side - Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=600&h=500&fit=crop"
                                alt="Digital Innovation"
                                className="w-full h-auto object-cover rounded-3xl"
                                style={{ minHeight: '400px', maxHeight: '500px', objectFit: 'cover' }}
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
                        </div>
                        
                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="absolute -bottom-6 -right-6 bg-white dark:bg-primary-800 rounded-2xl shadow-2xl p-4 backdrop-blur-sm hidden lg:block"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">⭐</span>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900 dark:text-white">Trusted Partner</div>
                                    <div className="text-xs text-gray-600 dark:text-primary-300">Since 2018</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 dark:text-white mb-4">
                            Driving Digital Innovation <br />
                            with <span className="text-gradient">Passion & Precision</span>
                        </h2>

                        <p className="text-lg text-gray-600 dark:text-primary-200 leading-relaxed mb-6">
                            At Chartfield Services, we're more than just a software company - we're 
                            your trusted technology partner in an ever-evolving digital world. With a 
                            strong foundation in innovation, quality, and customer satisfaction, we deliver 
                            next-gen solutions that empower businesses to thrive.
                        </p>

                        <p className="text-lg text-gray-600 dark:text-primary-200 leading-relaxed mb-8">
                            From cutting-edge website development and enterprise-grade software 
                            solutions to UI/UX design, cybersecurity, data analytics, and digital marketing, 
                            we cover every aspect of the digital transformation journey.
                        </p>

                        {/* Know More Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                        >
                            <span>Know more</span>
                            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.div>
                </div>

                {/* Why Choose Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-24"
                >
                </motion.div>
            </div>
        </section>
    );
}