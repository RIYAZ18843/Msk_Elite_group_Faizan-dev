import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
    HiArrowRight,
    HiSparkles,
    HiChevronLeft,
    HiChevronRight,
} from "react-icons/hi";

export default function Hero({ onContactClick }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const statsRef = useRef(null);
    const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

    // State for counting numbers
    const [counts, setCounts] = useState({
        count1: 0,
        count2: 0,
        count3: 0
    });

    const slides = [
        {
            imageUrl: "/hero_web_dev.png",
            tagline: "Chartfield Services makes content fast & easy",
            title: "Smart Web & Software Solutions for Modern Businesses",
            description: "At Chartfield Services, we blend creativity, code, and cutting-edge tech to build dynamic websites and custom software that power your success.",
            buttonText: "Get started",
        },
        {
            imageUrl: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            tagline: "Chartfield Services makes content fast & easy",
            title: "Premium Mobile Applications for iOS & Android",
            description: "Scale your business with high-performance mobile apps. We deliver seamless user experiences and robust architectures tailored for the mobile-first world.",
            buttonText: "Get started",
        },
        {
            imageUrl: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            tagline: "Chartfield Services makes content fast & easy",
            title: "Enterprise Software & Cloud Systems",
            description: "From intuitive websites to powerful business applications, we create scalable solutions tailored to your industry needs. Tech that transforms.",
            buttonText: "Get started",
        },
        {
            imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            tagline: "Chartfield Services makes content fast & easy",
            title: "AI-Powered Innovation for Smarter Decision Making",
            description: "Harness the power of artificial intelligence to transform your business with intelligent automation, predictive analytics, and smart systems.",
            buttonText: "Get started",
        },
    ];

    // Number counting animation
    useEffect(() => {
        if (isStatsInView) {
            const targetNumbers = [50, 80, 5];
            const duration = 2000;
            const stepTime = 20;

            targetNumbers.forEach((target, index) => {
                const steps = duration / stepTime;
                const increment = target / steps;
                let current = 0;

                const counter = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(counter);
                    }

                    setCounts(prev => ({
                        ...prev,
                        [`count${index + 1}`]: Math.floor(current)
                    }));
                }, stepTime);

                return () => clearInterval(counter);
            });
        }
    }, [isStatsInView]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const goToPrevious = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const currentSlide = slides[currentIndex];

    // Why Choose Us Data - Updated with the latest requested numbers
    const whyChooseUsStats = [
        {
            number: "50+",
            countKey: "count1",
            label: "Global Customers Served Worldwide",
            icon: "👥",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            number: "80+",
            countKey: "count2",
            label: "Successful Projects Completed",
            icon: "📊",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            number: "5+",
            countKey: "count3",
            label: "Years of Industry Experience",
            icon: "⭐",
            gradient: "from-orange-500 to-red-500",
        },
    ];

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
                        ease: "linear",
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
                        ease: "linear",
                    }}
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent-200/30 to-transparent rounded-full blur-3xl"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Left Side - Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            key={`tagline-${currentIndex}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center space-x-2 px-3 py-1.5 bg-white/80 dark:bg-primary-900/40 backdrop-blur-sm rounded-full shadow-lg mb-5 border border-white/20 dark:border-primary-700/30"
                        >
                            <HiSparkles className="text-accent-500 w-4 h-4 flex-shrink-0" />
                            <span className="text-xs font-semibold text-primary-900 dark:text-primary-100">
                                {currentSlide.tagline}
                            </span>
                        </motion.div>

                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={`title-${currentIndex}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
                            >
                                <span className="text-primary-900 dark:text-primary-50">
                                    {currentSlide.title}
                                </span>
                            </motion.h1>
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <motion.p
                                key={`desc-${currentIndex}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-base sm:text-lg text-gray-600 dark:text-primary-200 mb-6 leading-relaxed"
                            >
                                {currentSlide.description}
                            </motion.p>
                        </AnimatePresence>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center lg:justify-start gap-3"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection("#services")}
                                className="group px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold text-base shadow-xl hover:shadow-glow transition-all duration-300 flex items-center space-x-2"
                            >
                                <span>{currentSlide.buttonText}</span>
                                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onContactClick}
                                className="px-6 py-2.5 bg-white text-primary-600 rounded-lg font-semibold text-base shadow-xl hover:shadow-lg transition-all duration-300 border-2 border-primary-200"
                            >
                                Contact Us
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Right Side - AI Generated Images Carousel */}
                    <div className="flex-1 w-full max-w-md lg:max-w-lg mx-auto">
                        <div className="relative group">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`image-${currentIndex}`}
                                    initial={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="relative rounded-xl overflow-hidden shadow-2xl"
                                >
                                    <img
                                        src={currentSlide.imageUrl}
                                        alt={currentSlide.title}
                                        className="w-full h-auto object-cover rounded-xl"
                                        style={{
                                            minHeight: "280px",
                                            maxHeight: "400px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

                                    {/* AI Badge */}
                                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2 py-0.5">
                                        <span className="text-xs text-white">✨ AI</span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Arrows */}
                            <button
                                onClick={goToPrevious}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
                            >
                                <HiChevronLeft className="w-5 h-5 text-primary-600" />
                            </button>
                            <button
                                onClick={goToNext}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
                            >
                                <HiChevronRight className="w-5 h-5 text-primary-600" />
                            </button>

                            {/* Dots Navigation */}
                            <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-1.5">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`transition-all duration-300 rounded-full ${currentIndex === index
                                                ? "w-6 h-1.5 bg-primary-600"
                                                : "w-1.5 h-1.5 bg-gray-400 hover:bg-primary-400"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* WHY CHOOSE US Section - SMALL & COMPACT with Counting Animation */}
                <motion.div
                    ref={statsRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16"
                >
                    {/* Section Header - Smaller */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-primary-100 dark:bg-primary-800/50 rounded-full mb-3">
                            <HiSparkles className="text-primary-600 w-3 h-3" />
                            <span className="text-xs font-semibold text-primary-600 dark:text-primary-300">
                                WHY CHOOSE US
                            </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-primary-900 dark:text-white">
                            Reason to choose our <br />
                            <span className="text-gradient">platform</span>
                        </h3>
                    </div>

                    {/* Stats Cards - 3 columns compact with counting numbers */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {whyChooseUsStats.map((stat, index) => (
                            <motion.div
                                key={stat.number}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className="rounded-xl p-4 relative overflow-hidden group bg-white dark:bg-primary-900/50 shadow-md text-center cursor-pointer border border-gray-100 dark:border-primary-700/30"
                            >
                                <div className="relative z-10">
                                    {/* Icon with bounce animation */}
                                    <motion.div
                                        className="text-3xl mb-2"
                                        animate={isStatsInView ? {
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 10, -10, 0]
                                        } : {}}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.2,
                                            type: "spring"
                                        }}
                                    >
                                        {stat.icon}
                                    </motion.div>

                                    {/* Number with counting animation */}
                                    <motion.div
                                        className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}
                                        initial={{ scale: 0 }}
                                        animate={isStatsInView ? { scale: 1 } : {}}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.1,
                                            type: "spring"
                                        }}
                                    >
                                        {isStatsInView ? (
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {counts[stat.countKey]}+
                                            </motion.span>
                                        ) : (
                                            "0+"
                                        )}
                                    </motion.div>

                                    {/* Label with fade in */}
                                    <motion.div
                                        className="text-xs text-gray-600 dark:text-primary-300 font-medium leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        animate={isStatsInView ? { opacity: 1 } : {}}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                    >
                                        {stat.label}
                                    </motion.div>
                                </div>

                                {/* Hover gradient effect */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* AI Image Generation Prompts Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-8 text-xs text-gray-400"
                >
                    <p>
                        ✨ AI Generated Visuals | Each image uniquely crafted for Chartfield
                        Services's solutions
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-5 h-8 border-2 border-primary-500 rounded-full flex items-start justify-center p-1.5">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-1 bg-primary-500 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}