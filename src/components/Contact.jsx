import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HiStar, HiChevronLeft, HiChevronRight, HiSparkles } from 'react-icons/hi';

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Priya R.",
            position: "Founder, TechBloom Solutions",
            rating: 5,
            text: "Working with Chartfield Services was a game-changer for our business. Their team not only understood our vision but exceeded our expectations with a modern, scalable website. Their communication and support throughout the project were outstanding.",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
            initial: "PR"
        },
        {
            id: 2,
            name: "Amit K.",
            position: "Product Manager, NexGen Enterprises",
            rating: 5,
            text: "From UI/UX design to software development and testing, Chartfield Servicesdelivered top-tier results. Their agile approach, timely delivery, and attention to detail made a big difference. Highly recommended for any business going digital.",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
            initial: "AK"
        },
        {
            id: 3,
            name: "Divya S.",
            position: "COO, Meditech Health Systems",
            rating: 5,
            text: "Chartfield Services helped us with our digital transformation—seamlessly! Their big data analytics and cybersecurity services added tremendous value to our operations. We're glad we chose them as our long-term technology partner.",
            image: "https://randomuser.me/api/portraits/women/3.jpg",
            initial: "DS"
        }
    ];

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section
            id="testimonials"
            ref={ref}
            className="pt-8 pb-24 bg-gradient-to-b from-gray-50 to-white dark:from-primary-900 dark:to-primary-950 transition-colors duration-500 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 dark:bg-primary-800/50 rounded-full mb-6">
                        <HiSparkles className="text-primary-600 w-5 h-5" />
                        <span className="text-sm font-semibold text-primary-600 dark:text-primary-300">
                            TESTIMONIALS
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 dark:text-white mb-4">
                        What our respectable <br />
                        <span className="text-gradient">clients says</span>
                    </h2>
                </motion.div>

                {/* Testimonials Carousel */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Main Card */}
                    <div className="relative bg-white dark:bg-primary-800/50 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-primary-700/50">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="p-8 sm:p-12"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-8 right-8 text-8xl text-primary-100 dark:text-primary-700/30 font-serif">
                                    "
                                </div>

                                {/* Rating Stars */}
                                <div className="flex items-center space-x-1 mb-6">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <HiStar key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-xl sm:text-2xl text-gray-700 dark:text-primary-200 leading-relaxed mb-8 relative z-10">
                                    "{testimonials[currentIndex].text}"
                                </p>

                                {/* Client Info */}
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
                                        {testimonials[currentIndex].image ? (
                                            <img 
                                                src={testimonials[currentIndex].image} 
                                                alt={testimonials[currentIndex].name}
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-xl font-bold text-white">
                                                {testimonials[currentIndex].initial}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-primary-900 dark:text-white">
                                            {testimonials[currentIndex].name}
                                        </h4>
                                        <p className="text-gray-600 dark:text-primary-300">
                                            {testimonials[currentIndex].position}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-primary-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                        >
                            <HiChevronLeft className="w-6 h-6 text-primary-600" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-primary-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                        >
                            <HiChevronRight className="w-6 h-6 text-primary-600" />
                        </button>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    currentIndex === index
                                        ? 'w-8 h-2 bg-primary-600'
                                        : 'w-2 h-2 bg-gray-400 hover:bg-primary-400'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="flex justify-center gap-4 mt-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.button
                                key={testimonial.id}
                                onClick={() => goToSlide(index)}
                                whileHover={{ scale: 1.1 }}
                                className={`relative transition-all duration-300 ${
                                    currentIndex === index 
                                        ? 'ring-4 ring-primary-500 scale-110' 
                                        : 'opacity-60 hover:opacity-100'
                                }`}
                            >
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-md overflow-hidden">
                                    {testimonial.image ? (
                                        <img 
                                            src={testimonial.image} 
                                            alt={testimonial.name}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-sm font-bold text-white">
                                            {testimonial.initial}
                                        </span>
                                    )}
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Stats/Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex flex-wrap items-center justify-center gap-8 p-6 bg-white dark:bg-primary-800/30 rounded-2xl shadow-lg">
                        <div className="flex items-center space-x-2">
                            <HiStar className="w-5 h-5 text-yellow-400 fill-current" />
                            <span className="text-gray-700 dark:text-primary-200">4.9/5 Average Rating</span>
                        </div>
                        <div className="w-px h-8 bg-gray-300 dark:bg-primary-700" />
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-primary-600">50+</span>
                            <span className="text-gray-700 dark:text-primary-200">Happy Clients</span>
                        </div>
                        <div className="w-px h-8 bg-gray-300 dark:bg-primary-700" />
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-primary-600">100+</span>
                            <span className="text-gray-700 dark:text-primary-200">Projects Delivered</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}