'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    HiMail,
    HiPhone,
    HiLocationMarker,
    HiClock,
} from 'react-icons/hi';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const contactInfo = [
        {
            icon: HiPhone,
            title: 'Phone',
            details: '+91 8790754529',
            color: 'from-primary-500 to-primary-700',
        },
        {
            icon: HiMail,
            title: 'Email',
            details: 'info@mskelitegroup.com',
            color: 'from-accent-500 to-accent-700',
        },
        {
            icon: HiLocationMarker,
            title: 'Location',
            details: 'Pillar Number 35, Mehidipatnam, Hyderabad',
            color: 'from-primary-600 to-primary-800',
        },
        {
            icon: HiClock,
            title: 'Business Hours',
            details: 'Mon - Sat: 9:00 AM - 6:00 PM',
            color: 'from-accent-600 to-accent-800',
        },
    ];

    return (
        <section
            id="contact"
            ref={ref}
            className="py-24 bg-gradient-to-b from-white to-primary-50 dark:from-primary-950 dark:to-primary-900 transition-colors duration-500"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary-900 dark:text-primary-50 mb-4">
                        <span className="text-gradient">Get In Touch</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-primary-200 max-w-3xl mx-auto">
                        Ready to transform your team? Contact us today to discuss your
                        training needs and discover how we can help you achieve your goals.
                    </p>
                </motion.div>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={info.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="glass-card rounded-2xl p-6 transition-all duration-300 text-center group border-t border-white/50"
                        >
                            <div
                                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                                <info.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2">
                                {info.title}
                            </h3>
                            <p className="text-gray-600 dark:text-primary-200 group-hover:text-primary-600 dark:group-hover:text-accent-400 transition-colors">{info.details}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-primary-900 via-primary-700 to-accent-600 rounded-3xl p-8 sm:p-12 shadow-2xl text-center relative overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                            Start Your Training Journey Today
                        </h3>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Connect with our experts to create a customized training program
                            that aligns with your organizational objectives.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-primary-700 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-2 cursor-default"
                            >
                                <span>WhatsApp Us</span>
                            </motion.div>
                            <motion.a
                                href="mailto:info@mskelitegroup.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300"
                            >
                                Send Email
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
