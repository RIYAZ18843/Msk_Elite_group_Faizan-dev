import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    HiCurrencyDollar, 
    HiCreditCard, 
    HiCash, 
    HiHome, 
    HiArrowRight,
    HiShieldCheck,
    HiChartBar,
    HiBriefcase,
    HiClock,
    HiCheckCircle,
    HiDocumentSearch,
    HiUserGroup,
    HiOutlineDocumentText,
    HiOutlineShieldCheck,
    HiOutlineLockClosed,
    HiOutlinePresentationChartLine
} from 'react-icons/hi';
import { 
    MdDirectionsCar, 
    MdBalance,
    MdSecurity,
    MdEngineering,
    MdGavel,
    MdOutlinePolicy
} from 'react-icons/md';

// --- SUB-COMPONENTS ---

const DubaiHero = () => (
    <section className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden bg-primary-950">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/70 to-transparent z-10" />
            <img 
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=60&w=1200" 
                alt="Dubai Skyline" 
                className="w-full h-full object-cover opacity-40 scale-110"
            />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-900/40 backdrop-blur-sm rounded-full border border-primary-700/30 mb-8">
                    <span className="text-xs font-bold text-primary-400 uppercase tracking-widest">Charter of Services</span>
                    <div className="w-1 h-1 bg-primary-700 rounded-full" />
                    <span className="text-[10px] text-primary-500 font-bold flex items-center gap-1 border border-primary-500/30 px-2 py-0.5 rounded ml-2 text-white">
                        <HiShieldCheck size={12} className="text-primary-400" /> UAE Central Bank Compliant
                    </span>
                </div>
                <h1 className="text-6xl sm:text-8xl font-bold mb-8 leading-tight tracking-tight">
                    <span className="text-white text-gradient">Global Banking.</span><br />
                    <span className="text-white">Local Excellence.</span>
                </h1>
                <p className="text-xl text-primary-200 mb-12 max-w-2xl leading-relaxed">
                    Direct Selling Agent for leading UAE banks. Dedicated to ethical sales, regulatory compliance, and high-quality customer acquisition in Dubai.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-10 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-primary-500/20 hover:shadow-primary-500/40 transition-all flex items-center justify-center space-x-2"
                    >
                        <span>Our Products</span>
                        <HiArrowRight className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-10 py-4 bg-white/5 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
                    >
                        Learn Compliance
                    </motion.button>
                </div>
            </motion.div>
        </div>
    </section>
);

const ServiceScope = () => {
    const retail = [
        { title: 'Personal Loans', icon: <HiCurrencyDollar /> },
        { title: 'Credit Cards', icon: <HiCreditCard /> },
        { title: 'Auto Loans', icon: <MdDirectionsCar /> },
        { title: 'Mortgage / Home Loans', icon: <HiHome /> },
        { title: 'Balance Transfer', icon: <MdBalance /> },
        { title: 'Liability Products', icon: <HiShieldCheck /> },
        { title: 'Insurance Products', icon: <MdSecurity /> }
    ];

    const sme = [
        { title: 'Business Loans', icon: <HiBriefcase /> },
        { title: 'Working Capital Facilities', icon: <HiChartBar /> },
        { title: 'Trade Finance Leads', icon: <HiOutlinePresentationChartLine /> },
        { title: 'Business Accounts Opening', icon: <HiUserGroup /> },
        { title: 'POS / Merchant Solutions', icon: <HiCreditCard /> }
    ];

    return (
        <section className="py-24 bg-white dark:bg-primary-950 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest block mb-4">Service Scope</span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 dark:text-white tracking-tight">Direct Selling Agent Solutions</h2>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Retail Banking */}
                    <div className="bg-gray-50 dark:bg-primary-900/30 p-10 rounded-[3rem] border border-primary-100/10">
                        <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-8 flex items-center gap-3">
                            <span className="p-2 bg-primary-600 rounded-lg text-white"><HiUserGroup size={24} /></span>
                            Retail Banking
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {retail.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 bg-white dark:bg-primary-900/40 rounded-2xl border border-primary-100/5 hover:border-primary-500/30 transition-all">
                                    <span className="text-primary-600 dark:text-primary-400">{item.icon}</span>
                                    <span className="text-sm font-semibold text-gray-700 dark:text-primary-100">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SME Banking */}
                    <div className="bg-primary-900/10 dark:bg-primary-900/20 p-10 rounded-[3rem] border border-primary-100/10">
                        <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-8 flex items-center gap-3">
                            <span className="p-2 bg-primary-600 rounded-lg text-white"><HiBriefcase size={24} /></span>
                            SME Banking
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {sme.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 bg-white dark:bg-primary-900/40 rounded-2xl border border-primary-100/5 hover:border-primary-500/30 transition-all">
                                    <span className="text-primary-600 dark:text-primary-400">{item.icon}</span>
                                    <span className="text-sm font-semibold text-gray-700 dark:text-primary-100">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const KeyResponsibilities = () => (
    <section className="py-24 bg-gray-50 dark:bg-primary-900/50 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest block mb-4">Core Excellence</span>
                <h2 className="text-4xl font-bold text-primary-900 dark:text-white mb-4">Our Key Responsibilities</h2>
                <p className="text-gray-600 dark:text-primary-200 max-w-2xl mx-auto">Ensuring absolute precision and integrity in every step of the customer acquisition lifecycle.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Lead Gen & Sales",
                        icon: <HiChartBar size={32} />,
                        points: [
                            "Identify prospects via approved channels",
                            "Conduct initial need assessment",
                            "Explain pricing & features clearly",
                            "High-quality customer acquisition focus"
                        ]
                    },
                    {
                        title: "Pre-Screening & KYC",
                        icon: <HiDocumentSearch size={32} />,
                        points: [
                            "Collect KYC as per Central Bank",
                            "Verify application completeness",
                            "Conduct preliminary eligibility checks",
                            "Ensure document validity & genuineness"
                        ]
                    },
                    {
                        title: "Compliance Mastery",
                        icon: <HiShieldCheck size={32} />,
                        points: [
                            "Apply AML guidelines strictly",
                            "Data Protection & Confidentiality",
                            "Zero mis-selling tolerance",
                            "Adhere to bank's internal credit policies"
                        ]
                    }
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="bg-white dark:bg-primary-950 p-10 rounded-[2.5rem] border border-primary-100/10 shadow-lg"
                    >
                        <div className="text-primary-600 dark:text-primary-400 mb-6">
                            {item.icon}
                        </div>
                        <h4 className="text-xl font-bold text-primary-900 dark:text-white mb-6 underline decoration-primary-500 underline-offset-8 decoration-2">{item.title}</h4>
                        <ul className="space-y-4">
                            {item.points.map((p, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-primary-200">
                                    <HiCheckCircle className="text-primary-500 shrink-0 mt-0.5" />
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const SLAFramework = () => {
    const slas = [
        { area: 'Lead Quality', standard: 'Minimum eligibility criteria adherence', icon: <HiChartBar size={20} /> },
        { area: 'Documentation Accuracy', standard: '100% completeness before submission', icon: <HiOutlineDocumentText size={20} /> },
        { area: 'TAT for Submission', standard: 'Within 24–48 hours of receipt', icon: <HiClock size={20} /> },
        { area: 'Compliance', standard: 'Zero tolerance for fraud/mis-selling', icon: <HiOutlineShieldCheck size={20} /> },
        { area: 'Customer Communication', standard: 'Transparent and documented', icon: <HiOutlinePresentationChartLine size={20} /> }
    ];

    return (
        <section className="py-24 bg-white dark:bg-primary-950 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest block mb-4">Service Standards</span>
                    <h2 className="text-4xl font-bold text-primary-900 dark:text-white tracking-tight">SLA Commitment Framework</h2>
                </div>
                <div className="bg-primary-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-primary-800">
                    <div className="grid grid-cols-2 bg-primary-800/50 p-8 border-b border-primary-700/50">
                        <div className="text-primary-400 font-bold uppercase tracking-widest text-xs">Service Area</div>
                        <div className="text-right text-primary-400 font-bold uppercase tracking-widest text-xs">Performance Standard</div>
                    </div>
                    <div>
                        {slas.map((sla, idx) => (
                            <div key={idx} className="grid grid-cols-2 p-8 border-b border-primary-800/50 last:border-0 hover:bg-primary-800/30 transition-colors">
                                <div className="flex items-center gap-4 text-white font-semibold">
                                    <span className="text-primary-400">{sla.icon}</span>
                                    {sla.area}
                                </div>
                                <div className="text-right text-primary-200 font-medium italic text-sm">{sla.standard}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const GovernanceSection = () => (
    <section className="py-24 bg-gray-50 dark:bg-primary-900/10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Risk & Control */}
                <div className="bg-white dark:bg-primary-950 p-12 rounded-[3.5rem] border border-primary-100/10 shadow-sm relative overflow-hidden group">
                    <MdSecurity className="absolute -right-8 -bottom-8 w-48 h-48 text-primary-500/5 group-hover:scale-110 transition-transform duration-700" />
                    <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-8">Risk & Control Framework</h3>
                    <ul className="space-y-6">
                        {[
                            "Maker-checker process for file verification",
                            "Background verification of all sales staff",
                            "Mandatory compliance & product training",
                            "Periodic refresher training sessions",
                            "Strict escalation matrix enforcement"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-4 text-gray-700 dark:text-primary-100 font-medium">
                                <HiOutlineShieldCheck className="text-primary-500 shrink-0" size={24} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Data Security */}
                <div className="bg-primary-900 p-12 rounded-[3.5rem] text-white shadow-xl relative overflow-hidden group">
                    <HiOutlineLockClosed className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 group-hover:scale-110 transition-transform duration-700" />
                    <h3 className="text-2xl font-bold mb-8">Data Security & Privacy</h3>
                    <ul className="space-y-6">
                        {[
                            "Secure storage of all customer documents",
                            "Restricted access to sensitive information",
                            "Zero data sharing with third parties",
                            "Full compliance with UAE Data Regulations",
                            "Confidential handling of bank protocols"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-4 text-primary-100 font-medium">
                                <HiCheckCircle className="text-primary-400 shrink-0" size={24} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

const ReportingSection = () => (
    <section className="py-24 bg-white dark:bg-primary-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary-900 to-primary-950 p-16 rounded-[4rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                    <HiOutlinePresentationChartLine size={80} className="text-white/5" />
                </div>
                <div className="max-w-2xl relative z-10">
                    <span className="text-xs font-bold text-primary-400 uppercase tracking-widest block mb-4">Governance & MIS</span>
                    <h3 className="text-4xl font-bold mb-10 leading-tight">Monthly Reporting & Transparency</h3>
                    <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-primary-400 font-bold mb-6 text-sm uppercase tracking-wider">Reports Include:</h4>
                            <ul className="space-y-3">
                                <li className="text-sm flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/5">Total Leads Sourced Monthly</li>
                                <li className="text-sm flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/5">Application Login & TAT Volumes</li>
                                <li className="text-sm flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/5">Portfolio Quality Tracking</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-primary-400 font-bold mb-6 text-sm uppercase tracking-wider">Performance Metrics:</h4>
                            <ul className="space-y-3">
                                <li className="text-sm flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/5">Detailed Approval Ratios</li>
                                <li className="text-sm flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/5">Disbursement & Activation Value</li>
                                <li className="text-sm flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/5">Reason-wise Rejection Analytics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const CodeOfConduct = () => (
    <section className="py-24 bg-gray-50 dark:bg-primary-950 transition-colors duration-500">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <MdGavel className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-8" />
            <h2 className="text-4xl font-bold text-primary-900 dark:text-white mb-8">Our Code of Conduct</h2>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
                {[
                    "Act with integrity and professionalism at all levels.",
                    "Avoid any form of misleading advertisements.",
                    "No unauthorized fees charged to customers.",
                    "Absolute confidentiality of client information.",
                    "Strict zero-tolerance for aggressive sales practices."
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-5 bg-white dark:bg-primary-900/20 rounded-2xl border border-primary-100/10">
                        <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold text-xs shrink-0">{idx + 1}</span>
                        <p className="text-sm font-medium text-gray-700 dark:text-primary-100">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const PartnerWithUs = () => (
    <section className="py-32 bg-white dark:bg-primary-950">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-5xl sm:text-7xl font-bold text-primary-900 dark:text-white mb-8 tracking-tight">Partner With Us in Dubai</h2>
            <p className="text-xl text-gray-600 dark:text-primary-200 mb-12 max-w-2xl mx-auto leading-relaxed">
                Commission payable only on disbursed/activated cases. Grow your business with transparent, quality-linked incentives.
            </p>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-primary-600 text-white rounded-2xl font-bold text-xl shadow-2xl flex items-center justify-center space-x-2 mx-auto"
            >
                <span>Become a Partner</span>
                <HiArrowRight className="w-6 h-6" />
            </motion.button>
        </div>
    </section>
);

// --- MAIN PAGE COMPONENT ---

export default function DubaiBanking() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white dark:bg-primary-950 transition-colors duration-500">
            <DubaiHero />
            <ServiceScope />
            <KeyResponsibilities />
            <SLAFramework />
            <GovernanceSection />
            <ReportingSection />
            <CodeOfConduct />
            <PartnerWithUs />
        </div>
    );
}
