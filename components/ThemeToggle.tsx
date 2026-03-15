'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="p-3 w-12 h-12" />; // avoid hydration mismatch
    }

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
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
