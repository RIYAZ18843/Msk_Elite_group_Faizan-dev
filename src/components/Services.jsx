import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    HiChatAlt2,
    HiUserGroup,
    HiCurrencyDollar,
    HiChip,
    HiCog,
} from 'react-icons/hi';

export default function Services({ onContactClick }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const services = [
        {
            icon: HiCurrencyDollar,
            title: 'Retail & MSME Recoveries',
            description:
                'End-to-end recovery solutions for retail portfolios and MSME loans, ensuring maximum return while maintaining compliance.',
            color: 'from-primary-500 to-primary-700',
            shadowColor: 'group-hover:shadow-primary-500/50',
        },
        {
            icon: HiUserGroup,
            title: 'Corporate Loan Recovery',
            description:
                'Expert management of corporate delinquency and NPA accounts through strategic intervention and legal support.',
            color: 'from-accent-500 to-accent-700',
            shadowColor: 'group-hover:shadow-accent-500/50',
        },
        {
            icon: HiChip,
            title: 'Advanced Asset Tracing',
            description:
                'Utilizing technology-driven tracing tools and field intelligence to identify and locate physical assets globally.',
            color: 'from-primary-600 to-primary-800',
            shadowColor: 'group-hover:shadow-primary-600/50',
        },
        {
            icon: HiChatAlt2,
            title: 'Legal Process Support',
            description:
                'Full support for SARFAESI Act procedures, bank policies, and statutory laws to expedite recovery lifecycles.',
            color: 'from-accent-600 to-accent-800',
            shadowColor: 'group-hover:shadow-accent-600/50',
        },
        {
            icon: HiCog,
            title: 'Stressed Asset Management',
            description:
                'Comprehensive management of delinquent assets, focusing on financial restructuring and results-oriented recoveries.',
            color: 'from-primary-700 to-primary-900',
            shadowColor: 'group-hover:shadow-primary-700/50',
        },
    ];

    return (
        <section
            id="services"
            ref={ref}
            className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-primary-950 dark:to-primary-900 transition-colors duration-500"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 dark:text-primary-50 mb-4">
                        <span className="text-gradient">
                            Our Banking Services
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-primary-200 max-w-2xl mx-auto">
                        Result-oriented recovery and asset management solutions designed to secure 
                        financial stability and maximize institutional results.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative glass-card rounded-3xl p-8 sm:p-10 transition-all duration-300 overflow-hidden w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.75rem)] max-w-md flex flex-col items-center text-center shadow-xl hover:shadow-primary-500/10"
                        >
                            {/* Gradient Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Icon Container */}
                            <div
                                className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} mb-8 shadow-lg ${service.shadowColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                            >
                                <service.icon className="w-10 h-10 text-white relative z-10" />
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity" />
                            </div>

                            {/* Content */}
                            <h3 className="relative z-10 text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-accent-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="relative z-10 text-gray-600 dark:text-primary-200 leading-relaxed mb-8 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                {service.description}
                            </p>

                            {/* Learn More Link */}
                            <button className="relative z-10 inline-flex items-center space-x-2 text-primary-600 dark:text-accent-400 font-bold group-hover:text-accent-500 dark:group-hover:text-white transition-colors tracking-wide uppercase text-sm mt-auto py-2 px-4 rounded-lg bg-primary-50 dark:bg-primary-900/50 group-hover:bg-accent-50 dark:group-hover:bg-accent-950/50 transition-all">
                                <span>Learn More</span>
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </button>

                            {/* Decorative Background Blob */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary-600/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 sm:p-12 shadow-2xl">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Ready to Secure Your Assets?
                        </h3>
                        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                            Join dozens of financial institutions that have optimized their
                            recovery cycles with our expert strategic solutions.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onContactClick}
                            className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            Connect with an Expert
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
