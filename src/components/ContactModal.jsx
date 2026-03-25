import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiCheckCircle, HiArrowRight } from 'react-icons/hi';

export default function ContactModal({ isOpen, onClose }) {
    const [status, setStatus] = useState('idle'); // idle, submitting, success
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Recovery Banking',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        
        try {
            const response = await fetch('https://formspree.io/f/mzdkpleo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                // Auto close after success
                setTimeout(() => {
                    onClose();
                    // Reset after modal closes
                    setTimeout(() => {
                        setStatus('idle');
                        setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            service: 'Recovery Banking',
                            message: ''
                        });
                    }, 500);
                }, 3000);
            } else {
                const data = await response.json();
                console.error('Formspree Error:', data);
                setStatus('idle');
                alert('Oops! There was a problem submitting your form. Please try again.');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setStatus('idle');
            alert('Oops! There was a problem submitting your form. Please try again.');
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-primary-950/40 backdrop-blur-sm shadow-2xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-xl bg-white dark:bg-primary-900 rounded-3xl shadow-2xl overflow-hidden"
                    >
                        {/* Header Image/Pattern */}
                        <div className="h-24 bg-gradient-to-r from-primary-600 to-accent-600 relative">
                            <div className="absolute inset-0 bg-noise opacity-20"></div>
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors z-20"
                            >
                                <HiX className="w-6 h-6" />
                            </button>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-2xl font-bold text-white tracking-tight">Get Started</h2>
                            </div>
                        </div>

                        <div className="p-8">
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <HiCheckCircle className="w-12 h-12 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                                    <p className="text-gray-600 dark:text-primary-200">
                                        Your request has been received. Our strategic recovery team will contact you shortly.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 dark:text-primary-200">Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-primary-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all dark:text-white"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 dark:text-primary-200">Phone Number</label>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 000 000 0000"
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-primary-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all dark:text-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 dark:text-primary-200">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-primary-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all dark:text-white"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 dark:text-primary-200">Service Required</label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-primary-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all dark:text-white appearance-none cursor-pointer"
                                        >
                                            <option>Recovery Banking</option>
                                            <option>Dubai Banking</option>
                                            <option>Stressed Asset Management</option>
                                            <option>Real Estate Services</option>
                                            <option>Training & Placement</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 dark:text-primary-200">Additional Details</label>
                                        <textarea
                                            rows="4"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="How can we help you?"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-primary-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all dark:text-white resize-none"
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        disabled={status === 'submitting'}
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold text-lg shadow-xl shadow-primary-500/20 hover:shadow-primary-500/40 transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {status === 'submitting' ? (
                                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        ) : (
                                            <>
                                                <span>Connect with an Expert</span>
                                                <HiArrowRight className="w-5 h-5" />
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
