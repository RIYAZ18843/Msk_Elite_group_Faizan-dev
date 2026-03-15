import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    HiShieldCheck, 
    HiChartBar, 
    HiScale, 
    HiSearch, 
    HiPresentationChartLine,
    HiArrowsExpand,
    HiLockClosed,
    HiCog,
    HiIdentification,
    HiLocationMarker,
    HiDocumentReport,
    HiClock,
    HiCheckCircle,
    HiArrowRight
} from 'react-icons/hi';
import { 
    MdGavel, 
    MdSecurity, 
    MdBusiness, 
    MdAutorenew,
    MdBalance
} from 'react-icons/md';

// --- SUB-COMPONENTS ---

const RecoveryHero = () => (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-primary-950">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/80 to-transparent z-10" />
            <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80" 
                alt="Recovery Services" 
                className="w-full h-full object-cover opacity-30 brightness-50"
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
                    <span className="text-xs font-bold text-primary-400 uppercase tracking-widest">Empowering Financial Resilience</span>
                </div>
                <h1 className="text-6xl sm:text-8xl font-bold mb-8 leading-tight tracking-tight text-white">
                    End-to-End <br />
                    <span className="text-gradient">Recovery Lifecycle.</span>
                </h1>
                <p className="text-xl text-primary-200 mb-12 max-w-2xl leading-relaxed">
                    Supporting Banks, NBFCs, and ARCs in managing stressed, delinquent, and non-performing assets through field intelligence and technology-driven tracing.
                </p>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white text-sm font-medium">
                        <MdBalance className="text-primary-500" /> SARFAESI Act 2002 Compliant
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white text-sm font-medium">
                        <HiShieldCheck className="text-primary-500" /> RBI Guideline Adherence
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

const OverviewSection = () => (
    <section className="py-24 bg-white dark:bg-primary-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest block mb-4">Core Overview</span>
                    <h2 className="text-4xl font-bold text-primary-900 dark:text-white mb-6">Navigating Stressed Assets with Precision</h2>
                    <p className="text-lg text-gray-600 dark:text-primary-200 mb-8 leading-relaxed">
                        Chartfield Services is a comprehensive banking and financial recovery services organization. We combine operational excellence with legal process support and field intelligence to maximize recoveries while reducing the burden on civil courts.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            { title: 'Goal 01', text: 'Recover bad loans efficiently for Banks.' },
                            { title: 'Goal 02', text: 'Minimize NPAs to strengthen the sector.' },
                            { title: 'Goal 03', text: 'Promote transparency and discipline.' },
                            { title: 'Goal 04', text: 'Reduce burden on Debt Recovery Tribunals.' }
                        ].map((goal, idx) => (
                            <div key={idx} className="p-6 bg-gray-50 dark:bg-primary-900/30 rounded-2xl border border-primary-100/10">
                                <h4 className="text-primary-600 dark:text-primary-400 font-bold mb-2 uppercase text-xs tracking-widest">{goal.title}</h4>
                                <p className="text-gray-800 dark:text-white font-medium text-sm">{goal.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -inset-4 bg-primary-500/10 rounded-[3rem] blur-2xl z-0" />
                    <div className="relative z-10 bg-primary-900 rounded-[3rem] p-12 text-white shadow-2xl overflow-hidden group">
                        <MdGavel className="absolute -right-16 -bottom-16 w-80 h-80 text-white opacity-5 group-hover:scale-110 transition-transform duration-700" />
                        <h3 className="text-2xl font-bold mb-8">Service Specifications</h3>
                        <ul className="space-y-6">
                            {[
                                "Assisting Banks as an Extended Recovery Arm",
                                "Advocate assistance for seizing operations",
                                "Legal provisions execution for asset seizure",
                                "Empanelled Judge assistance during process",
                                "Improved recovery efficiency & lower overhead"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start space-x-4">
                                    <HiCheckCircle className="text-primary-400 mt-1 shrink-0" size={20} />
                                    <span className="text-primary-100 font-medium leading-tight">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const MilestonesSection = () => {
    const stages = [
        {
            title: "X-Bucket to NPA Management",
            subtitle: "Pre-NPA Services",
            benefit: "Reduction in NPA inflow and improvement in portfolio health",
            modules: [
                "Identification of stressed accounts via analysis",
                "Early engagement via calls, visits, and notices",
                "Understanding borrower cash flow & capability",
                "Soft collection strategies & follow-ups"
            ],
            icon: <HiClock size={32} />
        },
        {
            title: "NPA Recovery Services",
            subtitle: "Sub-standard to Loss Assets",
            benefit: "Strategic settlement and multi-pronged recovery",
            modules: [
                "Tele-recovery and multi-lingual calling support",
                "Intensive field recovery and location visits",
                "Borrower negotiation & structured settlement talks",
                "One-Time Settlement (OTS) coordination & Liaison",
                "Support for restructuring and repayment plans",
                "Follow-up till final closure and NOC issuance"
            ],
            icon: <HiChartBar size={32} />
        },
        {
            title: "Write-Off Management",
            subtitle: "Value from Legacy Portfolios",
            benefit: "Incremental recovery from long-pending cases",
            modules: [
                "Revival of aged/inactive write-off accounts",
                "Skip tracing for absconding or untraceable borrowers",
                "Fresh engagement and recovery negotiations",
                "Settlement structuring with appropriate approvals",
                "Documentation support for final recovery closure"
            ],
            icon: <MdAutorenew size={32} />
        }
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-primary-900/40 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest block mb-4">Milestones</span>
                    <h2 className="text-4xl font-bold text-primary-900 dark:text-white mb-4">Strategic Intervention Cycles</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {stages.map((stage, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-primary-950 p-10 rounded-[2.5rem] shadow-xl border border-primary-100/10"
                        >
                            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center text-primary-600 dark:text-primary-400 mb-8">
                                {stage.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-2">{stage.title}</h3>
                            <p className="text-primary-600 dark:text-primary-400 font-bold text-sm mb-6 uppercase tracking-wider">{stage.subtitle}</p>
                            <ul className="space-y-4 mb-8">
                                {stage.modules.map((mod, i) => (
                                    <li key={i} className="flex items-start space-x-3 text-sm text-gray-600 dark:text-primary-200">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0" />
                                        <span>{mod}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-6 border-t border-primary-100/10 italic text-xs text-primary-600/70 dark:text-primary-400/70">
                                <span className="font-bold">Key Benefit:</span> {stage.benefit}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ScrapAndAuction = () => (
    <section className="py-24 bg-gray-50 dark:bg-primary-900/40 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Scrap Deals */}
                <div className="bg-white dark:bg-primary-950 p-12 rounded-[3.5rem] border border-primary-100/10 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8">
                        <HiCog className="text-primary-500/10 w-32 h-32 group-hover:rotate-90 transition-transform duration-1000" />
                    </div>
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest block mb-4">Value Maximization</span>
                    <h3 className="text-3xl font-bold text-primary-900 dark:text-white mb-8">Scrap & Low-Value Assets</h3>
                    <ul className="space-y-4 mb-8">
                        {[
                            "Identification and classification of scrap assets",
                            "Market valuation and reserve price support",
                            "Potential buyer identification and negotiation",
                            "Transaction execution and compliance documentation"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-4 text-gray-700 dark:text-primary-100">
                                <HiCheckCircle className="text-primary-500 shrink-0" size={20} />
                                <span className="text-sm font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="p-4 bg-primary-50 dark:bg-primary-900/40 rounded-2xl italic text-xs text-primary-700 dark:text-primary-400">
                        Helping lenders monetize obsolete secured assets for maximum value realization.
                    </div>
                </div>

                {/* Auction Support */}
                <div className="bg-primary-900 p-12 rounded-[3.5rem] text-white shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8">
                        <HiPresentationChartLine className="text-white/5 w-32 h-32 group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <span className="text-xs font-bold text-primary-400 uppercase tracking-widest block mb-4">Market Operations</span>
                    <h3 className="text-3xl font-bold text-white mb-8">Auction & Bidding Support</h3>
                    <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-primary-400 font-bold mb-4 text-xs uppercase tracking-wider">For Lenders:</h4>
                            <ul className="space-y-3">
                                {["Asset profiling & preparation", "Coordination with e-auction platforms", "Marketing & bidder outreach"].map((li, i) => (
                                    <li key={i} className="text-xs flex items-center gap-2 group/item">
                                        <div className="w-1 h-1 rounded-full bg-primary-500" /> {li}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-primary-400 font-bold mb-4 text-xs uppercase tracking-wider">For Bidders:</h4>
                            <ul className="space-y-3">
                                {["Due diligence assistance", "Live bidding guidance", "Post-bid documentation"].map((li, i) => (
                                    <li key={i} className="text-xs flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-accent-500" /> {li}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const AssetManagementGrid = () => {
    const services = [
        { title: "SARFAESI Execution", desc: "Seizing and selling borrower assets using legal provisions to reduce NPAs efficiently.", icon: <MdGavel /> },
        { title: "Asset Reconstruction", desc: "Restructuring bad loans to make them profitable and reduce financial burden.", icon: <HiArrowsExpand /> },
        { title: "Securitisation", desc: "Convert bad loans into tradable securities to improve liquidity and risks.", icon: <HiScale /> },
        { title: "Asset Management", desc: "Maintaining and protecting seized assets to retain market value for sale.", icon: <HiLockClosed /> },
        { title: "Documentation Support", desc: "Precise record-keeping of seizures and recoveries for legal and audit hygiene.", icon: <HiDocumentReport /> },
        { title: "Financial Restructuring", desc: "Modifying loan terms to prevent business collapse and balance recovery needs.", icon: <MdAutorenew /> },
        { title: "Legal Action Coordination", desc: "Liaison with DRTs and preparing cases as per SARFAESI procedures.", icon: <HiScale /> },
        { title: "NPA Buyout", desc: "ARCs purchase NPAs from banks at discount to clean up balance sheets.", icon: <MdBusiness /> }
    ];

    return (
        <section className="py-24 bg-white dark:bg-primary-950 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest block mb-4">Value Realization</span>
                    <h2 className="text-4xl font-bold text-primary-900 dark:text-white">Comprehensive Asset Services</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((item, idx) => (
                        <div key={idx} className="p-8 bg-gray-50 dark:bg-primary-900/20 rounded-3xl border border-primary-100/5 hover:bg-white dark:hover:bg-primary-900/40 transition-all group">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white dark:bg-primary-800 text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                                {item.icon}
                            </div>
                            <h4 className="font-bold text-primary-900 dark:text-white mb-3">{item.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-primary-300 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AdvancedTracing = () => (
    <section className="py-24 bg-primary-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-800/20 skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <span className="text-xs font-bold text-primary-400 uppercase tracking-widest block mb-4">Intelligence Group</span>
                    <h2 className="text-4xl font-bold text-white mb-8 tracking-tight leading-tight">Advanced Tracing & <br />Defaulter Identification</h2>
                    <p className="text-lg text-primary-100 mb-10 leading-relaxed">
                        Equipped with intelligence-driven methodologies to locate absconding defaulters and hidden assets, significantly enhancing success in fraud-linked cases.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { icon: <HiSearch />, text: "Skip tracing for absconding borrowers" },
                            { icon: <HiIdentification />, text: "Digital footprint analysis" },
                            { icon: <HiLocationMarker />, text: "Address & location verification" },
                            { icon: <HiChartBar />, text: "Asset intelligence gathering" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl border border-white/10 text-white font-medium">
                                <span className="text-primary-400">{item.icon}</span>
                                <span className="text-sm">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-white/5 backdrop-blur-xl p-12 rounded-[3.5rem] border border-white/10"
                >
                    <div className="text-center mb-10">
                        <MdSecurity className="text-primary-400 w-16 h-16 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Risk Assessment & Control</h3>
                        <p className="text-primary-200">Proactive measures to handle potential losses and minimize financial exposure.</p>
                    </div>
                    <div className="space-y-4">
                        {[
                            "Preventive loss handling strategies",
                            "Strict background verification of staff",
                            "Portfolio risk exposure analysis",
                            "Stable and secure recovery processes"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-4 p-4 bg-primary-950/40 rounded-2xl border border-white/5">
                                <HiCheckCircle className="text-primary-500 shrink-0" />
                                <span className="text-sm text-primary-100 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

const RecoveryCTA = () => (
    <section className="py-24 bg-white dark:bg-primary-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl sm:text-6xl font-bold text-primary-900 dark:text-white mb-8">Ready to Strengthen <br />Your Portfolio?</h2>
            <p className="text-xl text-gray-600 dark:text-primary-200 mb-12">
                Connect with our recovery specialists to reduce NPAs efficiently and transparently.
            </p>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-primary-600 text-white rounded-2xl font-bold text-xl shadow-2xl shadow-primary-500/20 hover:shadow-primary-500/40 transition-all flex items-center justify-center space-x-2 mx-auto"
            >
                <span>Connect With Us</span>
                <HiArrowRight className="w-6 h-6" />
            </motion.button>
        </div>
    </section>
);

// --- MAIN PAGE COMPONENT ---

export default function RecoveryBanking() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white dark:bg-primary-950 transition-colors duration-500">
            <RecoveryHero />
            <OverviewSection />
            <MilestonesSection />
            <ScrapAndAuction />
            <AssetManagementGrid />
            <AdvancedTracing />
            <RecoveryCTA />
        </div>
    );
}
