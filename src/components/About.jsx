import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    HiCheckCircle,
    HiLightBulb,
    HiTrendingUp,
    HiUserGroup,
    HiPhone,
} from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const values = [
        {
            icon: HiLightBulb,
            title: 'Compliance',
            description: 'Strict adherence to RBI & statutory guidelines',
        },
        {
            icon: HiCheckCircle,
            title: 'Transparency',
            description: 'Result-oriented approach with full reporting',
        },
        {
            icon: HiTrendingUp,
            title: 'Result Driven',
            description: 'Maximizing recoveries through strategic cycles',
        },
        {
            icon: HiUserGroup,
            title: 'Trust',
            description: 'Partnering with premium Banks & ARCs',
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
                        <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 dark:text-primary-50 mb-6">
                            <span className="text-gradient">About Chartfield Services</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-primary-200 mb-6 leading-relaxed">
                            Chartfield Services is a comprehensive banking and financial recovery services organization 
                            dedicated to supporting Banks, NBFCs, HFCs, and Asset Reconstruction Companies (ARCs) 
                            in managing stressed, delinquent, and non-performing assets.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-primary-200 mb-8 leading-relaxed">
                            We deliver end-to-end recovery lifecycle management, combining operational excellence, 
                            legal process support, field intelligence, and technology-driven tracing tools to ensure 
                            recoveries are maximized while fully adhering to statutory laws.
                        </p>

                        {/* Mission & Vision */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border-l-4 border-primary-600">
                                <h3 className="text-xl font-bold text-primary-900 mb-2">
                                    Our Mission
                                </h3>
                                <p className="text-gray-700">
                                    To enable banks and financial institutions to recover bad loans efficiently, 
                                    reduce the burden on civil courts, and maintain financial stability through ethical recovery.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl p-6 border-l-4 border-accent-600">
                                <h3 className="text-xl font-bold text-primary-900 mb-2">
                                    Our Vision
                                </h3>
                                <p className="text-gray-700">
                                    To be the most trusted and customer-centric recovery firm, recognized for innovation, 
                                    transparency, and transformative impact in the banking sector.
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
                                <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    {value.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-primary-200">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Leadership Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 mb-20"
                >
                    <h3 className="text-3xl font-bold text-center text-primary-900 mb-12">
                        <span className="text-gradient">Our Leadership</span>
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Suraj Badge",
                                title: "Co-founder",
                                initials: "SB",
                                phone: "+91 916 0000 608",
                                gradient: "from-accent-400 to-accent-600"
                            },
                            {
                                name: "Ambica Jadav",
                                title: "Co-Founder",
                                initials: "AJ",
                                phone: "",
                                gradient: "from-primary-600 to-primary-800"
                            },
                            {
                                name: "Syed Mohiuddin Shareef",
                                title: "Director and Operations Head",
                                initials: "SS",
                                phone: "+91 833 1979 865",
                                gradient: "from-blue-500 to-blue-700"
                            }
                        ].map((leader, idx) => (
                            <motion.div
                                key={leader.name}
                                whileHover={{ y: -10 }}
                                className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-3xl p-8 shadow-2xl overflow-hidden relative group text-center"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                                <div className="relative z-10">
                                    <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${leader.gradient} rounded-full flex items-center justify-center shadow-glow border-4 border-white/10 mb-6`}>
                                        <span className="text-3xl font-bold text-white tracking-tighter">{leader.initials}</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
                                        {leader.name}
                                    </h4>
                                    <p className="text-primary-300 font-semibold text-sm uppercase tracking-widest mb-4">
                                        {leader.title}
                                    </p>
                                    {leader.phone && (
                                        <a href={`tel:${leader.phone.replace(/\s/g, '')}`} className="text-white/70 text-sm hover:text-white transition-colors flex items-center justify-center gap-2">
                                            <HiPhone className="w-4 h-4" />
                                            {leader.phone}
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Why Choose Us */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20"
                >
                    <h3 className="text-3xl font-bold text-center text-primary-900 mb-12">
                        <span className="text-gradient">Why Choose Us?</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Banking Experts',
                                description:
                                    'Industry veterans with deep expertise in asset recovery and financial compliance.',
                            },
                            {
                                title: 'Strategic Solutions',
                                description:
                                    'Tailored recovery frameworks designed to minimize losses and maximize efficiency.',
                            },
                            {
                                title: 'Proven Results',
                                description:
                                    'High success rate in managing complex debt portfolios with ethical transparency.',
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
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
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
