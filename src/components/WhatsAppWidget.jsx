import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppWidget() {
    return (
        <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
            href="https://wa.me/919640202170?text=Hello%20Chartfield%20Services%2C%20I%20am%20interested%20in%20your%20professional%20recovery%20banking%20solutions.%20Could%20you%20please%20provide%20more%20information%20on%20how%20you%20can%20assist%20me%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center">
                {/* Pulse Animation */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute inset-0 bg-green-500 rounded-full"
                />

                {/* WhatsApp Icon */}
                <FaWhatsapp className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>
        </motion.a>
    );
}
