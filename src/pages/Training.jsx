import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    HiAcademicCap, 
    HiBriefcase, 
    HiUserGroup, 
    HiLightBulb, 
    HiTrendingUp,
    HiCheckCircle,
    HiArrowRight,
    HiClock,
    HiCode,
    HiPresentationChartBar,
    HiIdentification,
    HiClipboardCheck,
    HiChatAlt2,
    HiEmojiHappy
} from 'react-icons/hi';
import { 
    MdCastForEducation, 
    MdWorkOutline, 
    MdOutlineHowToReg,
    MdOutlinePolicy,
    MdOutlineManageAccounts
} from 'react-icons/md';

// --- SUB-COMPONENTS ---

const TrainingHero = () => (
    <section className="relative min-h-[80vh] flex items-center pt-24 overflow-hidden bg-primary-950">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-950/70 to-transparent z-10" />
            <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=60&w=1200" 
                alt="Training Center" 
                className="w-full h-full object-cover opacity-40 scale-105"
            />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl text-center mx-auto"
            >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-900/40 backdrop-blur-sm rounded-full border border-primary-700/30 mb-8">
                    <span className="text-xs font-bold text-primary-400 uppercase tracking-widest text-white">Meaningful Career Development</span>
                </div>
                <h1 className="text-6xl sm:text-8xl font-bold mb-8 leading-tight tracking-tight text-white italic">
                    Bridging the Gap Between <br />
                    <span className="text-gradient">Curriculum & Career.</span>
                </h1>
                <p className="text-xl text-primary-200 mb-12 max-w-2xl mx-auto leading-relaxed">
                    A center of excellence empowering students with industry-relevant skills, ethical values, and professional competence for the global corporate world.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-10 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-primary-500/20 flex items-center justify-center space-x-2"
                    >
                        <span>Explore Program</span>
                        <HiArrowRight className="w-5 h-5" />
                    </motion.button>
                </div>
            </motion.div>
        </div>
    </section>
);

const VisionMission = () => (
    <section className="py-24 bg-white dark:bg-primary-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="p-12 bg-gray-50 dark:bg-primary-900/30 rounded-[3rem] border border-primary-100/10 relative overflow-hidden group"
                >
                    <HiAcademicCap className="absolute -right-8 -bottom-8 w-48 h-48 text-primary-500/5 group-hover:scale-110 transition-transform duration-700" />
                    <span className="p-3 bg-primary-600 rounded-2xl text-white inline-block mb-8"><HiLightBulb size={32} /></span>
                    <h3 className="text-3xl font-bold text-primary-900 dark:text-white mb-6 tracking-tight">Center of Excellence Vision</h3>
                    <p className="text-lg text-gray-600 dark:text-primary-200 leading-relaxed font-medium">
                        To emerge as a center of excellence in career development by empowering students with industry-relevant skills, ethical values, and professional competence.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="p-12 bg-primary-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group"
                >
                    <HiTrendingUp className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 group-hover:scale-110 transition-transform duration-700" />
                    <h3 className="text-3xl font-bold mb-8 tracking-tight">Strategic Mission</h3>
                    <ul className="space-y-4">
                        {[
                            "Bridge gap between academic and industry expectations.",
                            "Equip students with technical expertise and soft skills.",
                            "Build sustainable partnerships with reputed organizations.",
                            "Provide comprehensive career guidance and assistance.",
                            "Encourage innovation, entrepreneurship, and lifelong learning."
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-primary-100 font-medium">
                                <HiCheckCircle className="text-primary-400 shrink-0 mt-0.5" size={24} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    </section>
);

const TrainingStages = () => {
    const stages = [
        {
            stage: "Stage 1",
            title: "Foundation Development",
            objective: "Build strong communication and confidence.",
            icon: <HiChatAlt2 />,
            modules: ["Spoken English & Business Comm.", "Personality Development", "MS Office & Email Etiquette", "Public Speaking & Presentation", "Time & Stress Management", "Critical Thinking Basics"],
            outcome: "Clarity of communication and awareness."
        },
        {
            stage: "Stage 2",
            title: "Skill Enhancement",
            objective: "Strengthen technical knowledge.",
            icon: <HiCode />,
            modules: ["Advanced Aptitude (Quant, Verbal)", "Domain Technical Workshops", "Resume & LinkedIn Optimization", "Industry Expert Guest Lectures", "Mini Projects & Case Studies", "Coding/Analytical Practicals"],
            outcome: "Technically competent & interview-ready."
        },
        {
            stage: "Stage 3",
            title: "Pre-Placement readiness",
            objective: "Prepare for recruitment processes.",
            icon: <HiIdentification />,
            modules: ["Mock Aptitude & HR Interviews", "Corporate Etiquette Sessions", "Grooming & Professional Comm.", "Assessment Center Simulations", "Internship & Live Projects"],
            outcome: "Real-time recruitment experience."
        },
        {
            stage: "Stage 4",
            title: "Career Acceleration",
            objective: "Support long-term career growth.",
            icon: <HiTrendingUp />,
            modules: ["Entrepreneurship Development", "Startup Incubation Support", "Competitive Exam Guidance", "Higher Education Counseling", "Alumni Mentorship Programs", "Industry Certification Support"],
            outcome: "Strategic leadership & growth."
        }
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-primary-900/40 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest block mb-4">Training Framework</span>
                    <h2 className="text-4xl font-bold text-primary-900 dark:text-white">Structured Training Model</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stages.map((s, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -8 }}
                            className="bg-white dark:bg-primary-950 p-8 rounded-[2.5rem] border border-primary-100/10 shadow-xl flex flex-col h-full"
                        >
                            <span className="text-xs font-black text-primary-500 uppercase tracking-[0.2em] mb-4">{s.stage}</span>
                            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
                                {s.icon}
                            </div>
                            <h4 className="text-xl font-bold text-primary-900 dark:text-white mb-3 underline decoration-primary-500/30 underline-offset-4">{s.title}</h4>
                            <p className="text-xs text-gray-500 dark:text-primary-400 mb-6 font-semibold uppercase">{s.objective}</p>
                            <ul className="space-y-3 mb-8 flex-grow">
                                {s.modules.map((m, i) => (
                                    <li key={i} className="text-xs text-gray-600 dark:text-primary-200 flex items-start gap-2">
                                        <div className="w-1 h-1 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                                        <span>{m}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="p-4 bg-primary-50 dark:bg-primary-900/40 rounded-xl mt-auto">
                                <p className="text-[10px] font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest">Outcome:</p>
                                <p className="text-xs text-primary-900 dark:text-white font-bold">{s.outcome}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PlacementProcess = () => {
    const steps = [
        "Registration & Verification",
        "Resume Submission & Screening",
        "Pre-Placement Skill Assessment",
        "Company Presentation / Talks",
        "Aptitude & Technical Evaluation",
        "HR & Behavioral Interview",
        "Final Selection & Offer Letter",
        "Joining Support & Follow-up"
    ];

    return (
        <section className="py-24 bg-white dark:bg-primary-950 transition-colors duration-500 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-primary-900 rounded-[4rem] p-16 text-white relative">
                    <HiUserGroup size={120} className="absolute -right-10 -top-10 text-white/5 rotate-12" />
                    <div className="max-w-3xl mb-12">
                        <span className="text-xs font-bold text-primary-400 uppercase tracking-widest block mb-4">Standard Operating Procedure</span>
                        <h2 className="text-4xl font-bold mb-6 italic tracking-tight">Structured Placement Process</h2>
                        <p className="text-primary-100">A systematic 8-step journey from eligibility verification to final joining support.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-5 bg-white/5 rounded-3xl border border-white/10 group hover:bg-white/10 transition-colors">
                                <span className="text-2xl font-black text-primary-500 opacity-40 group-hover:opacity-100 transition-opacity">{(idx + 1).toString().padStart(2, '0')}</span>
                                <span className="text-sm font-bold leading-tight">{step}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const DomainsResponsibilities = () => (
    <section className="py-24 bg-gray-50 dark:bg-primary-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Domains */}
                <div className="lg:col-span-1 p-10 bg-white dark:bg-primary-900/30 rounded-[3rem] border border-primary-100/10">
                    <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-8 flex items-center gap-3">
                        <span className="p-2 bg-primary-600 rounded-xl text-white"><HiBriefcase /></span>
                        Training Domains
                    </h3>
                    <div className="space-y-3">
                        {["Operations Management", "Procurement & Logistics", "Human Resources", "Finance & Accounts", "Advanced MS Office", "Corporate Communication", "Support Services"].map((d, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-primary-950/40 rounded-2xl text-sm font-bold text-gray-700 dark:text-primary-100 border border-primary-50/10">
                                <HiCheckCircle className="text-primary-500" /> {d}
                            </div>
                        ))}
                    </div>
                </div>

                {/* T&P Officer */}
                <div className="lg:col-span-1 p-10 bg-primary-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                    <MdOutlineManageAccounts className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 group-hover:scale-110 transition-transform duration-700" />
                    <h3 className="text-2xl font-bold mb-8">Officer Responsibility</h3>
                    <ul className="space-y-4">
                        {["Strategic Corporate Liaison", "Organizing Recruitment Drives", "Monitoring Training Effectiveness", "Placement Portal Management", "Post-Placement Feedback Loops"].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-sm font-medium">
                                <HiCheckCircle className="text-primary-400 mt-1 shrink-0" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Candidates */}
                <div className="lg:col-span-1 p-10 bg-white dark:bg-primary-900/30 rounded-[3rem] border border-primary-100/10">
                    <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-8 flex items-center gap-3">
                        <span className="p-2 bg-primary-600 rounded-xl text-white"><HiUserGroup /></span>
                        Candidate Duties
                    </h3>
                    <div className="space-y-4">
                        {[
                            "Mandatory training participation",
                            "Strict professional conduct",
                            "Maintaining academic eligibility",
                            "Adherence to placement policy",
                            "Transparent offer disclosure"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-sm font-medium text-gray-700 dark:text-primary-100">
                                <HiCheckCircle className="text-primary-500 mt-1 shrink-0" /> {item}
                            </li>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Differentiators = () => (
    <section className="py-24 bg-white dark:bg-primary-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-primary-900 dark:text-white mb-10 tracking-tight italic underlined decoration-primary-500">Why Our Training Differentiates?</h2>
                    <div className="grid gap-6">
                        {[
                            { title: "Continuous Assessment", text: "Skill evaluation model at every training milestone." },
                            { title: "Dedicated Portal", text: "Seamless interface for job applications & tracking." },
                            { title: "Industry Certified", text: "Curriculum verified by global corporate standards." },
                            { title: "360° Management", text: "Holistic student development & personality grooming." }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-5 group">
                                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-xl text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all">
                                    <HiEmojiHappy size={24} />
                                </div>
                                <div className="border-b border-primary-100/10 pb-4 w-full">
                                    <h4 className="font-bold text-primary-900 dark:text-white text-lg">{item.title}</h4>
                                    <p className="text-sm text-gray-600 dark:text-primary-200">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-primary-50 dark:bg-primary-900/20 p-12 rounded-[4rem] text-center">
                    <MdOutlinePolicy className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-8" />
                    <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-6 uppercase tracking-wider">Placement Policy Highlights</h3>
                    <div className="space-y-4 text-left inline-block">
                        <p className="flex items-center gap-3 text-sm font-bold text-gray-700 dark:text-primary-100"><HiCheckCircle className="text-primary-500" /> Equal Opportunity for all candidates</p>
                        <p className="flex items-center gap-3 text-sm font-bold text-gray-700 dark:text-primary-100"><HiCheckCircle className="text-primary-500" /> Transparent selection process</p>
                        <p className="flex items-center gap-3 text-sm font-bold text-gray-700 dark:text-primary-100"><HiCheckCircle className="text-primary-500" /> Mandatory ethical professional conduct</p>
                        <p className="flex items-center gap-3 text-sm font-bold text-gray-700 dark:text-primary-100"><HiCheckCircle className="text-primary-500" /> Responsible acceptance of offers</p>
                    </div>
                    <div className="mt-12 p-6 bg-primary-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-sm shadow-xl">
                        Charges are Applied
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const TrainingCTA = () => (
    <section className="py-24 bg-primary-950 overflow-hidden relative">
        <div className="absolute inset-0 bg-primary-900/20 opacity-30" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 tracking-tighter">Ready for Your Next Career Leap?</h2>
            <p className="text-xl text-primary-200 mb-12 italic">Join our industry-aligned program and build a sustainable career paths.</p>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-14 py-6 bg-white text-primary-900 rounded-2xl font-black text-xl shadow-2xl hover:bg-primary-50 transition-all flex items-center justify-center space-x-2 mx-auto"
            >
                <span>Register Interest</span>
                <HiArrowRight className="w-6 h-6" />
            </motion.button>
        </div>
    </section>
);

// --- MAIN PAGE COMPONENT ---

export default function Training() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white dark:bg-primary-950 transition-colors duration-500">
            <TrainingHero />
            <VisionMission />
            <TrainingStages />
            <PlacementProcess />
            <DomainsResponsibilities />
            <Differentiators />
            <TrainingCTA />
            
            {/* Educational Sector Notice */}
            <section className="py-12 bg-white dark:bg-primary-950 text-center border-t border-primary-100/10">
                <p className="text-2xl font-bold text-primary-900 dark:text-white opacity-50 italic">
                    Educational Sector: Coming Soon………………..
                </p>
            </section>
        </div>
    );
}
