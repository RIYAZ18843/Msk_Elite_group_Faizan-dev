'use client';

import { motion } from 'framer-motion';
import { HiArrowRight, HiSparkles } from 'react-icons/hi';

export default function Hero() {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-primary-950 dark:via-primary-900 dark:to-primary-950 transition-colors duration-500"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-200/30 to-transparent rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent-200/30 to-transparent rounded-full blur-3xl"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-primary-900/40 backdrop-blur-sm rounded-full shadow-lg mb-8 border border-white/20 dark:border-primary-700/30"
                >
                    <HiSparkles className="text-accent-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-semibold text-primary-900 dark:text-primary-100">
                        Transform Your Workforce
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight"
                >
                    <span className="text-primary-900 dark:text-primary-50">Elevate Your Team with</span>
                    <br />
                    <span className="text-gradient text-glow">Elite Training Solutions</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl sm:text-2xl text-gray-600 dark:text-primary-200 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    Empowering professionals through comprehensive corporate training in
                    Communication, HR, Finance, SAP, and ERP. Your success is our mission.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('#services')}
                        className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-glow transition-all duration-300 flex items-center space-x-2"
                    >
                        <span>Explore Our Services</span>
                        <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('#contact')}
                        className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold text-lg shadow-xl hover:shadow-lg transition-all duration-300 border-2 border-primary-200"
                    >
                        Contact Us
                    </motion.button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto"
                >
                    {[
                        { number: '500+', label: 'Companies Trained' },
                        { number: '10K+', label: 'Professionals' },
                        { number: '15+', label: 'Years Experience' },
                        { number: '98%', label: 'Success Rate' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="glass-card rounded-2xl p-6 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100/50 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                            <div className="relative z-10">
                                <div className="text-3xl sm:text-4xl font-display font-bold text-primary-600 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-primary-300 font-semibold tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-primary-500 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
