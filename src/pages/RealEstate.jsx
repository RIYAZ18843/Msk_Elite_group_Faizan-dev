import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    HiHome, 
    HiTrendingUp, 
    HiShieldCheck, 
    HiCurrencyDollar, 
    HiLocationMarker, 
    HiSearch, 
    HiCheckCircle, 
    HiArrowRight,
    HiDocumentSearch,
    HiBriefcase,
    HiLightBulb,
    HiEye
} from 'react-icons/hi';
import { 
    MdRealEstateAgent, 
    MdHistory, 
    MdEngineering,
    MdGavel,
    MdBalance
} from 'react-icons/md';
import EMICalculator from '../components/EMICalculator';

// --- SUB-COMPONENTS ---

const REHero = () => (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-primary-950">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/80 to-transparent z-10" />
            <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=60&w=1200" 
                alt="Modern Real Estate" 
                className="w-full h-full object-cover opacity-30 scale-105"
            />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-900/40 backdrop-blur-sm rounded-full border border-primary-700/30 mb-8">
                    <span className="text-xs font-bold text-primary-400 uppercase tracking-widest">Hyderabad's Premier Property Partner</span>
                </div>
                <h1 className="text-6xl sm:text-8xl font-bold mb-8 leading-tight tracking-tight text-white">
                    Unlocking Value <br />
                    <span className="text-gradient">in Every Square Foot.</span>
                </h1>
                <p className="text-2xl font-bold text-accent-400 mb-6 italic">
                    Your dream property in Hyderabad is just one step away.
                </p>
                <p className="text-xl text-primary-200 mb-12 max-w-2xl leading-relaxed">
                    MSK Elite Group provides comprehensive property solutions, leveraging local expertise and ethical transparency to serve the growing Hyderabad metropolitan market.
                </p>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white text-sm font-medium">
                        <HiShieldCheck className="text-primary-500" /> DTCP & HMDA Layouts
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white text-sm font-medium">
                        <HiTrendingUp className="text-primary-500" /> High ROI Potential
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

const REOverview = () => (
    <section className="py-24 bg-white dark:bg-primary-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest block mb-4">Strategic Vision</span>
                    <h2 className="text-4xl font-bold text-primary-900 dark:text-white mb-6">Customer-Centric Real Estate</h2>
                    <p className="text-lg text-gray-600 dark:text-primary-200 mb-8 leading-relaxed">
                        To become the most trusted and customer-centric real estate firm by delivering high-quality residential, commercial, and investment opportunities that prioritize ethical transparency and value creation.
                    </p>
                    <div className="space-y-4">
                        {[
                            { title: 'Market Integrity', text: 'Maintaining ethical standards in every transaction.' },
                            { title: 'Tech-Enabled Tours', text: 'Virtual walkthroughs for remote investor selection.' },
                            { title: 'Local Insights', text: 'Deep intelligence on Hyderabad growing corridors.' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4 p-4 bg-gray-50 dark:bg-primary-900/30 rounded-2xl border border-primary-100/10">
                                <HiCheckCircle className="text-primary-500 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-primary-900 dark:text-white text-sm">{item.title}</h4>
                                    <p className="text-xs text-gray-500 dark:text-primary-400">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -inset-4 bg-primary-500/10 rounded-[3rem] blur-2xl z-0" />
                    <div className="relative z-10 bg-primary-900 rounded-[3rem] p-12 text-white shadow-2xl overflow-hidden group">
                        <HiLightBulb className="absolute -right-16 -top-16 w-80 h-80 text-white opacity-5 group-hover:scale-110 transition-transform duration-700" />
                        <h3 className="text-2xl font-bold mb-8 italic underlined decoration-primary-500 decoration-2 underline-offset-8">Property Portfolio</h3>
                        <div className="grid sm:grid-cols-2 gap-8">
                            {[
                                { icon: <HiHome />, label: "Residential (Flats/Villas)" },
                                { icon: <HiBriefcase />, label: "Commercial Office/Retail" },
                                { icon: <MdEngineering />, label: "Industrial Warehouses" },
                                { icon: <HiHome />, label: "Farm Houses & Open Lands" },
                                { icon: <MdGavel />, label: "Bank Auction Specials" },
                                { icon: <HiCurrencyDollar />, label: "Easy EMI Solutions" }
                            ].map((serv, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <span className="text-primary-400">{serv.icon}</span>
                                    <span className="text-sm font-bold tracking-tight">{serv.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const RegionsGrid = () => {
    const regions = [
        { name: "West Hyderabad (Cyberabad)", cities: ["Gachibowli", "Kondapur", "Tellapur", "Kokapet"], icon: <HiEye /> },
        { name: "South Hyderabad", cities: ["Adibatla", "Shamshabad", "Tukkuguda", "Maheshwaram"], icon: <HiLocationMarker /> },
        { name: "North Hyderabad", cities: ["Kompally", "Gundlapochampally", "Medchal", "Bachupally"], icon: <HiHome /> },
        { name: "East Hyderabad", cities: ["Uppal", "Pocharam", "Ghatkesar", "Bibinagar"], icon: <HiTrendingUp /> }
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-primary-900/40 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest block mb-4">Portfolio Footprint</span>
                    <h2 className="text-4xl font-bold text-primary-900 dark:text-white">Explorable Growth Corridors</h2>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                    {regions.map((reg, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-primary-950 p-8 rounded-[2.5rem] border border-primary-100/10 shadow-lg relative overflow-hidden"
                        >
                            <div className="text-primary-600 dark:text-primary-400 mb-6">{reg.icon}</div>
                            <h4 className="text-lg font-bold text-primary-900 dark:text-white mb-6 uppercase tracking-wider">{reg.name}</h4>
                            <div className="flex flex-wrap gap-2">
                                {reg.cities.map((city, i) => (
                                    <span key={i} className="px-3 py-1 bg-primary-50 dark:bg-primary-900/40 rounded-full text-[10px] font-bold text-primary-700 dark:text-primary-300 border border-primary-100/20">
                                        {city}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AuctionSpecialization = () => (
    <section className="py-24 bg-gray-50 dark:bg-primary-900/40 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                    <div className="absolute -inset-4 bg-accent-500/10 rounded-[3rem] blur-2xl" />
                    <div className="relative bg-white dark:bg-primary-950 p-10 rounded-[3rem] border border-primary-100/10 shadow-xl">
                        <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-8 flex items-center gap-3">
                            <MdGavel className="text-primary-600" size={32} />
                            Bank Auction Expertise
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Listing Identification",
                                "Legal Due Diligence",
                                "Site Inspection",
                                "Bidding Strategy",
                                "Title Verification",
                                "Registration Support"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-2xl">
                                    <HiCheckCircle className="text-primary-600" />
                                    <span className="text-xs font-bold text-primary-900 dark:text-primary-100">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest block mb-4">Auction Specialization</span>
                    <h2 className="text-4xl font-bold text-primary-900 dark:text-white mb-6 leading-tight">Bank Mortgaged Properties</h2>
                    <p className="text-lg text-gray-600 dark:text-primary-200 mb-8 leading-relaxed">
                        Access exclusive opportunities to bid on bank auction properties across Hyderabad, often available at <span className="text-primary-600 dark:text-accent-400 font-bold">15%–40% below market value</span>.
                    </p>
                    <div className="p-6 bg-primary-900 rounded-3xl text-white">
                        <p className="text-sm font-medium opacity-90 leading-relaxed mb-4 italic">"We ensure our clients invest safely and confidently in secured bank assets."</p>
                        <div className="text-xs font-black uppercase tracking-widest text-primary-400">MSK Elite Guarantee</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const InvestmentCommitment = ({ onContactClick }) => (
    <section className="py-24 bg-white dark:bg-primary-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary-900 rounded-[4rem] p-16 text-white relative flex flex-col items-center text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
                <HiShieldCheck size={120} className="text-white/5 absolute -top-10 rotate-12" />
                <span className="relative z-10 text-xs font-bold text-primary-400 uppercase tracking-widest block mb-6">Financial Empowerment</span>
                <h2 className="relative z-10 text-4xl sm:text-5xl font-bold mb-12 italic leading-tight">Easy EMI & Loan Assistance</h2>
                
                <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 w-full text-left">
                    {[
                        { title: "Flexible EMI Plans", desc: "Structures aligned to your income profile.", icon: <HiCurrencyDollar /> },
                        { title: "Low Down Payment", desc: "Affordable entry into ownership.", icon: <HiTrendingUp /> },
                        { title: "Quick Sanctions", desc: "End-to-end loan coordination.", icon: <HiShieldCheck /> },
                        { title: "CIBIL Guidance", desc: "Improve loan approval chances.", icon: <HiDocumentSearch /> }
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                            <div className="text-primary-400 mb-4">{item.icon}</div>
                            <h4 className="font-bold text-primary-100 mb-2">{item.title}</h4>
                            <p className="text-xs text-primary-200 opacity-80">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="relative z-10 pt-16 border-t border-white/10 w-full flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onContactClick}
                        className="px-12 py-5 bg-white text-primary-900 rounded-2xl font-black text-xl shadow-2xl flex items-center justify-center space-x-2"
                    >
                        <span>Consult Finance Expert</span>
                        <HiArrowRight className="w-6 h-6" />
                    </motion.button>
                </div>
            </div>
        </div>
    </section>
);

// --- MAIN PAGE COMPONENT ---

export default function RealEstate({ onContactClick }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white dark:bg-primary-950 transition-colors duration-500">
            <REHero />
            <REOverview />
            <RegionsGrid />
            <EMICalculator onContactClick={onContactClick} />
            <AuctionSpecialization />
            <InvestmentCommitment onContactClick={onContactClick} />
        </div>
    );
}
