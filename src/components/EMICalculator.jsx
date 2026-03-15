import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiCurrencyDollar, HiClock, HiTrendingUp, HiCalculator } from 'react-icons/hi';

export default function EMICalculator({ onContactClick }) {
    const [principal, setPrincipal] = useState(5000000); // Default 50L
    const [rate, setRate] = useState(8.5); // Default 8.5%
    const [tenure, setTenure] = useState(20); // Default 20 years

    const [emi, setEmi] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);

    useEffect(() => {
        const p = principal;
        const r = rate / 12 / 100; // monthly rate
        const n = tenure * 12; // total months

        const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPayable = emiValue * n;
        const interest = totalPayable - p;

        setEmi(Math.round(emiValue));
        setTotalPayment(Math.round(totalPayable));
        setTotalInterest(Math.round(interest));
    }, [principal, rate, tenure]);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const interestPercentage = ((totalInterest / totalPayment) * 100).toFixed(1);

    return (
        <div className="w-full max-w-6xl mx-auto p-1 lg:p-4">
            <div className="glass-card rounded-[3rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Inputs */}
                    <div className="space-y-10">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-primary-600 rounded-2xl text-white shadow-lg">
                                    <HiCalculator size={24} />
                                </div>
                                <h3 className="text-3xl font-bold text-primary-900 dark:text-white">Premium EMI Calculator</h3>
                            </div>
                            <p className="text-gray-600 dark:text-primary-200">
                                Plan your real estate investment with accuracy. Adjust the sliders to see your monthly commitments.
                            </p>
                        </div>

                        {/* Principal Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-primary-900 dark:text-primary-300 uppercase tracking-wider flex items-center gap-2">
                                    <HiCurrencyDollar className="text-primary-600" /> Loan Amount
                                </label>
                                <span className="text-xl font-black text-primary-600 dark:text-accent-400">
                                    {formatCurrency(principal)}
                                </span>
                            </div>
                            <input
                                type="range"
                                min="100000"
                                max="100000000"
                                step="100000"
                                value={principal}
                                onChange={(e) => setPrincipal(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 dark:bg-primary-900 rounded-lg appearance-none cursor-pointer accent-primary-600"
                            />
                            <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                <span>1 L</span>
                                <span>10 Cr</span>
                            </div>
                        </div>

                        {/* Rate Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-primary-900 dark:text-primary-300 uppercase tracking-wider flex items-center gap-2">
                                    <HiTrendingUp className="text-primary-600" /> Interest Rate
                                </label>
                                <span className="text-xl font-black text-primary-600 dark:text-accent-400">
                                    {rate}%
                                </span>
                            </div>
                            <input
                                type="range"
                                min="5"
                                max="20"
                                step="0.1"
                                value={rate}
                                onChange={(e) => setRate(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 dark:bg-primary-900 rounded-lg appearance-none cursor-pointer accent-primary-600"
                            />
                            <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                <span>5%</span>
                                <span>20%</span>
                            </div>
                        </div>

                        {/* Tenure Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-primary-900 dark:text-primary-300 uppercase tracking-wider flex items-center gap-2">
                                    <HiClock className="text-primary-600" /> Loan Tenure
                                </label>
                                <span className="text-xl font-black text-primary-600 dark:text-accent-400">
                                    {tenure} Years
                                </span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="30"
                                step="1"
                                value={tenure}
                                onChange={(e) => setTenure(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 dark:bg-primary-900 rounded-lg appearance-none cursor-pointer accent-primary-600"
                            />
                            <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                <span>1 Yr</span>
                                <span>30 Yrs</span>
                            </div>
                        </div>
                    </div>

                    {/* Results Overlay */}
                    <div className="bg-primary-900 dark:bg-primary-950/80 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
                        
                        <div className="text-center mb-10">
                            <p className="text-primary-400 font-bold uppercase tracking-[0.2em] text-xs mb-2">Monthly Installment</p>
                            <h4 className="text-5xl lg:text-6xl font-black text-glow tracking-tighter">
                                {formatCurrency(emi)}
                            </h4>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                                <p className="text-sm font-medium text-primary-200 opacity-80 uppercase tracking-widest">Total Interest</p>
                                <p className="font-bold text-lg">{formatCurrency(totalInterest)}</p>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                                <p className="text-sm font-medium text-primary-200 opacity-80 uppercase tracking-widest">Total Payable</p>
                                <p className="font-bold text-lg">{formatCurrency(totalPayment)}</p>
                            </div>
                        </div>

                        {/* Visual Breakdown */}
                        <div className="mt-10">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-3">
                                <span className="text-primary-400">Principal</span>
                                <span className="text-accent-400">Interest ({interestPercentage}%)</span>
                            </div>
                            <div className="w-full h-4 bg-white/10 rounded-full flex overflow-hidden border border-white/10 p-0.5">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${100 - interestPercentage}%` }}
                                    className="h-full bg-white rounded-full shadow-glow" 
                                />
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${interestPercentage}%` }}
                                    className="h-full bg-accent-500 rounded-full shadow-glow-gold ml-0.5" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
