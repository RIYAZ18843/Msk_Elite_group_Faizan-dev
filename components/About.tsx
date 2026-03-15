'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    HiCheckCircle,
    HiLightBulb,
    HiTrendingUp,
    HiUserGroup,
} from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const values = [
        {
            icon: HiLightBulb,
            title: 'Innovation',
            description: 'Cutting-edge training methodologies',
        },
        {
            icon: HiCheckCircle,
            title: 'Excellence',
            description: 'Commitment to quality education',
        },
        {
            icon: HiTrendingUp,
            title: 'Growth',
            description: 'Continuous improvement focus',
        },
        {
            icon: HiUserGroup,
            title: 'Partnership',
            description: 'Long-term client relationships',
        },
    ];

    return (
        <section
            id="about"
            ref={ref}
            className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-primary-900 dark:to-primary-950 transition-colors duration-500"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary-900 dark:text-primary-50 mb-6">
                            <span className="text-gradient">About MSK Elite Group</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-primary-200 mb-6 leading-relaxed">
                            With over 15 years of excellence in corporate training and
                            placement services, MSK Elite Group has been the trusted partner
                            for organizations seeking to elevate their workforce capabilities.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-primary-200 mb-8 leading-relaxed">
                            We specialize in delivering comprehensive training programs that
                            combine industry expertise with practical application, ensuring
                            your team gains the skills needed to excel in today&apos;s competitive
                            business landscape.
                        </p>

                        {/* Mission & Vision */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border-l-4 border-primary-600">
                                <h3 className="text-xl font-display font-bold text-primary-900 mb-2">
                                    Our Mission
                                </h3>
                                <p className="text-gray-700">
                                    To empower professionals and organizations through world-class
                                    training programs that drive measurable business results.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl p-6 border-l-4 border-accent-600">
                                <h3 className="text-xl font-display font-bold text-primary-900 mb-2">
                                    Our Vision
                                </h3>
                                <p className="text-gray-700">
                                    To be the leading corporate training provider, recognized for
                                    innovation, excellence, and transformative impact.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Values Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 mb-4 shadow-lg">
                                    <value.icon className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="text-lg font-display font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    {value.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-primary-200">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* CEO Profile */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 mb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center shadow-glow-gold flex-shrink-0 border-4 border-white/20">
                            <span className="text-4xl sm:text-5xl font-bold text-white">MF</span>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-display font-bold mb-2">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400">
                                    Mohammad Faizan Khan
                                </span>
                            </h3>
                            <p className="text-accent-400 font-semibold text-lg mb-4 tracking-wide uppercase">
                                CEO & Lead Trainer
                            </p>
                            <p className="text-white/80 leading-relaxed max-w-2xl mb-6">
                                A visionary leader dedicated to transforming careers and organizations through exceptional training. With deep expertise and passion for education, driving MSK Elite Group towards new heights of excellence.
                            </p>

                            <motion.a
                                href="https://www.linkedin.com/in/faizan-khan-757322288/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg font-semibold hover:bg-[#004182] transition-colors shadow-lg"
                            >
                                <FaLinkedinIn className="w-5 h-5" />
                                <span>Connect on LinkedIn</span>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                {/* Why Choose Us */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20"
                >
                    <h3 className="text-3xl font-display font-bold text-center text-primary-900 mb-12">
                        <span className="text-gradient">Why Choose Us?</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Expert Trainers',
                                description:
                                    'Industry veterans with real-world experience and proven track records.',
                            },
                            {
                                title: 'Customized Programs',
                                description:
                                    'Tailored training solutions designed to meet your specific organizational needs.',
                            },
                            {
                                title: 'Proven Results',
                                description:
                                    '98% success rate with measurable improvements in team performance.',
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 mb-4 shadow-lg">
                                    <span className="text-2xl font-bold text-white">
                                        {index + 1}
                                    </span>
                                </div>
                                <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
                                    {item.title}
                                </h4>
                                <p className="text-gray-600 dark:text-primary-200">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
