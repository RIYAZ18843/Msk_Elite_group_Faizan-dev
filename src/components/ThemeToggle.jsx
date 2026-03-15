import React from 'react';
import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-3 rounded-xl bg-gray-100 dark:bg-primary-900/30 text-gray-700 dark:text-primary-200 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-primary-700/50 flex items-center justify-center"
            aria-label="Toggle dark mode"
        >
            {theme === 'dark' ? (
                <HiSun className="w-5 h-5 text-accent-400" />
            ) : (
                <HiMoon className="w-5 h-5 text-primary-600" />
            )}
        </motion.button>
    );
}
