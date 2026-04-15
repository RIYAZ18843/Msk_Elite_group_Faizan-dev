import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    HiTrendingUp,
    HiBeaker,
    HiPencilAlt,
    HiClipboardList,
    HiDatabase,
    HiCode,
    HiCog,
    HiCloud,
    HiShieldCheck,
    HiArrowRight,
    HiSparkles,
} from 'react-icons/hi';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const services = [
        {
            id: '01',
            title: 'Full Stack Developer',
            icon: HiCode,
            gradient: 'from-red-500 to-orange-500',
            description: 'Our expert full-stack developers build end-to-end web applications using modern technologies like React, Node.js, Python, and MongoDB. We deliver scalable, responsive, and high-performance solutions tailored to your business needs.',
            features: ['React', 'Node.js', 'Python', 'MongoDB', 'API Development']
        },
        {
            id: '02',
            title: 'DevOps Engineer',
            icon: HiCog,
            gradient: 'from-teal-500 to-green-500',
            description: 'Streamline your development and operations with our DevOps engineering services. We implement CI/CD pipelines, cloud infrastructure, containerization, and automation to accelerate delivery and improve reliability.',
            features: ['CI/CD', 'Docker', 'Kubernetes', 'AWS/Azure', 'Infrastructure as Code']
        },
        {
            id: '03',
            title: 'Digital Marketing',
            icon: HiTrendingUp,
            gradient: 'from-blue-500 to-cyan-500',
            description: 'Our digital marketing team boosts your online presence with data-driven strategies that attract, engage, and convert. From SEO to paid campaigns, we craft personalized solutions.',
            features: ['SEO', 'Paid Campaigns', 'Social Media', 'Content Strategy']
        },
        {
            id: '04',
            title: 'UI/UX Design',
            icon: HiPencilAlt,
            gradient: 'from-orange-500 to-red-500',
            description: 'We craft intuitive and visually compelling user interfaces that drive interaction and improve user satisfaction. From wireframes to prototypes, our UI/UX experts ensure seamless digital experiences that reflect your brand identity and boost usability.',
            features: ['Wireframing', 'Prototyping', 'User Research', 'Usability']
        },
        {
            id: '05',
            title: 'Project Management',
            icon: HiClipboardList,
            gradient: 'from-green-500 to-emerald-500',
            description: 'Scubel Soft Services provides expert project management to ensure your tech projects are delivered on time, within scope, and on budget. Our certified project managers follow agile, scrum, and waterfall methodologies tailored to your needs.',
            features: ['Agile', 'Scrum', 'Waterfall', 'Risk Management']
        },
        {
            id: '06',
            title: 'Software Testing',
            icon: HiBeaker,
            gradient: 'from-purple-500 to-pink-500',
            description: 'Our rigorous testing services ensure your software performs flawlessly across all platforms. We specialize in manual and automated testing, identifying issues early, enhancing performance, and ensuring your product meets industry standards.',
            features: ['Manual Testing', 'Automated Testing', 'Performance', 'Security']
        },
        {
            id: '07',
            title: 'Cloud Computing',
            icon: HiCloud,
            gradient: 'from-sky-500 to-blue-600',
            description: 'Transform your infrastructure with our cloud computing services. We help you migrate, manage, and optimize cloud solutions across AWS, Azure, and Google Cloud for scalability, security, and cost efficiency.',
            features: ['Cloud Migration', 'AWS', 'Azure', 'GCP', 'Cloud Security']
        },
        {
            id: '08',
            title: 'Cybersecurity',
            icon: HiShieldCheck,
            gradient: 'from-red-600 to-rose-600',
            description: 'Protect your business from cyber threats with our comprehensive cybersecurity services. We offer vulnerability assessments, penetration testing, security audits, and 24/7 monitoring to keep your data safe.',
            features: ['Penetration Testing', 'Security Audits', 'Threat Monitoring', 'Compliance']
        }
    ];

    return (
        <section
            id="about"
            ref={ref}
            className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-primary-900 dark:to-primary-950 transition-colors duration-500"
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
                            OUR SERVICE
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 dark:text-white mb-4">
                        Experience our latest services
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-primary-200 max-w-3xl mx-auto">
                        Comprehensive solutions tailored to drive your business success
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white dark:bg-primary-800/30 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-primary-700/50"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                            
                            <div className="relative p-8 lg:p-10">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center space-x-4">
                                        {/* Icon */}
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                            <service.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary-900 dark:text-white">
                                            {service.title}
                                        </h3>
                                    </div>
                                    {/* ID Badge */}
                                    <div className="w-10 h-10 bg-gray-100 dark:bg-primary-700 rounded-full flex items-center justify-center shadow-md">
                                        <span className="text-sm font-bold text-gray-700 dark:text-white">{service.id}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-primary-200 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Features Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-primary-700/50 text-gray-700 dark:text-primary-200"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Learn More Button */}
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="group/btn inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                                >
                                    <span>Learn More</span>
                                    <HiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* More Services Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block bg-gradient-to-r from-primary-500 to-accent-500 p-[2px] rounded-2xl shadow-xl">
                        <div className="bg-white dark:bg-primary-900 rounded-2xl px-8 py-6">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div className="text-left">
                                    <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-2">
                                        More Services Available
                                    </h3>
                                    <p className="text-gray-600 dark:text-primary-300">
                                        We provide a wide range of services to meet your business needs
                                    </p>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 whitespace-nowrap"
                                >
                                    <span>learn more</span>
                                    <HiArrowRight className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}