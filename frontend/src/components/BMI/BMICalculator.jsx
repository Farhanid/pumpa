import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaWeight,
    FaRulerVertical,
    FaCalculator,
    FaHeartbeat,
    FaInfoCircle,
    FaCheckCircle,
    FaExclamationTriangle,
    FaAppleAlt,
    FaRunning,
    FaBed,
    FaTint,
    FaArrowRight,
    FaChartLine,
    FaUserMd,
    FaDumbbell,
    FaLeaf,
    FaMoon,
    FaFire,
    FaBrain,
    FaShieldAlt,
    FaRegSmile,
    FaRegClock,
    FaUtensils,
    FaCalendarAlt,
    FaBolt
} from 'react-icons/fa';

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [activityLevel, setActivityLevel] = useState('moderate');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState(null);
    const [bmr, setBmr] = useState(null);
    const [dailyCalories, setDailyCalories] = useState(null);
    const [idealWeight, setIdealWeight] = useState(null);
    const [isCalculated, setIsCalculated] = useState(false);

    const calculateBMI = () => {
        let weightKg = parseFloat(weight);
        let heightM = parseFloat(height);
        let heightCm = parseFloat(height);
        let userAge = parseInt(age);

        if (isNaN(weightKg) || isNaN(heightM) || weightKg <= 0 || heightM <= 0) {
            alert('Please enter valid weight and height values');
            return;
        }

        heightM = heightM / 100;
        heightCm = height;

        const bmiValue = weightKg / (heightM * heightM);
        setBmi(bmiValue.toFixed(1));

        // Calculate Ideal Weight
        let idealWeightValue;
        if (heightCm > 0) {
            idealWeightValue = 50 + 2.3 * ((heightCm - 152.4) / 2.54);
            setIdealWeight(idealWeightValue.toFixed(1));
        }

        // Calculate BMR and Daily Calories
        if (userAge && userAge > 0) {
            let bmrValue;
            bmrValue = 10 * weightKg + 6.25 * heightCm - 5 * userAge + 5;
            setBmr(Math.round(bmrValue));

            const activityMultipliers = {
                sedentary: 1.2,
                light: 1.375,
                moderate: 1.55,
                active: 1.725,
                veryActive: 1.9
            };
            const caloriesNeeded = bmrValue * activityMultipliers[activityLevel];
            setDailyCalories(Math.round(caloriesNeeded));
        }

        // Determine BMI Category
        let newCategory;
        if (bmiValue < 16) newCategory = 'severeUnderweight';
        else if (bmiValue < 18.5) newCategory = 'underweight';
        else if (bmiValue < 25) newCategory = 'normal';
        else if (bmiValue < 30) newCategory = 'overweight';
        else if (bmiValue < 35) newCategory = 'obese1';
        else if (bmiValue < 40) newCategory = 'obese2';
        else newCategory = 'obese3';

        setCategory(newCategory);
        setIsCalculated(true);
    };

    const getCategoryInfo = () => {
        const categories = {
            severeUnderweight: {
                title: "Severely Underweight",
                color: "#3b82f6",
                gradient: "from-blue-400 to-blue-500",
                bgGradient: "from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20",
                borderColor: "border-blue-400",
                textColor: "text-blue-600",
                icon: FaExclamationTriangle,
                range: "< 16",
                description: "Your BMI indicates that you are severely underweight.",
                recommendation: "Immediate medical consultation recommended for healthy weight gain."
            },
            underweight: {
                title: "Underweight",
                color: "#3b82f6",
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20",
                borderColor: "border-blue-500",
                textColor: "text-blue-600",
                icon: FaExclamationTriangle,
                range: "16 - 18.4",
                description: "Your BMI indicates that you may be underweight for your height.",
                recommendation: "Focus on nutrient-dense foods and healthy weight gain strategies."
            },
            normal: {
                title: "Normal Weight",
                color: "#10b981",
                gradient: "from-emerald-500 to-green-600",
                bgGradient: "from-emerald-50 to-green-100 dark:from-emerald-950/30 dark:to-green-900/20",
                borderColor: "border-emerald-500",
                textColor: "text-emerald-600",
                icon: FaRegSmile,
                range: "18.5 - 24.9",
                description: "Excellent! Your BMI falls within the healthy weight range.",
                recommendation: "Maintain your balanced lifestyle with continued healthy habits."
            },
            overweight: {
                title: "Overweight",
                color: "#f59e0b",
                gradient: "from-amber-500 to-orange-600",
                bgGradient: "from-amber-50 to-orange-100 dark:from-amber-950/30 dark:to-orange-900/20",
                borderColor: "border-amber-500",
                textColor: "text-amber-600",
                icon: FaFire,
                range: "25 - 29.9",
                description: "Your BMI suggests you may be carrying excess weight.",
                recommendation: "Small, consistent changes can lead to significant health improvements."
            },
            obese1: {
                title: "Obese Class I",
                color: "#ef4444",
                gradient: "from-red-500 to-red-600",
                bgGradient: "from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/20",
                borderColor: "border-red-500",
                textColor: "text-red-600",
                icon: FaExclamationTriangle,
                range: "30 - 34.9",
                description: "Your BMI indicates obesity, which may increase health risks.",
                recommendation: "Medical guidance is recommended for a safe, effective weight loss plan."
            },
            obese2: {
                title: "Obese Class II",
                color: "#dc2626",
                gradient: "from-red-600 to-red-700",
                bgGradient: "from-red-100 to-red-200 dark:from-red-950/40 dark:to-red-900/30",
                borderColor: "border-red-600",
                textColor: "text-red-700",
                icon: FaExclamationTriangle,
                range: "35 - 39.9",
                description: "Your BMI indicates significant obesity with increased health risks.",
                recommendation: "Medical consultation strongly recommended for a structured weight loss program."
            },
            obese3: {
                title: "Obese Class III",
                color: "#b91c1c",
                gradient: "from-red-700 to-red-800",
                bgGradient: "from-red-200 to-red-300 dark:from-red-950/50 dark:to-red-900/40",
                borderColor: "border-red-700",
                textColor: "text-red-800",
                icon: FaExclamationTriangle,
                range: "≥ 40",
                description: "Your BMI indicates severe obesity requiring medical attention.",
                recommendation: "Immediate medical consultation is critical for your health."
            }
        };
        return categories[category] || categories.normal;
    };

    const resetCalculator = () => {
        setWeight('');
        setHeight('');
        setAge('');
        setActivityLevel('moderate');
        setBmi(null);
        setCategory(null);
        setBmr(null);
        setDailyCalories(null);
        setIdealWeight(null);
        setIsCalculated(false);
    };

    const categoryInfo = category ? getCategoryInfo() : null;
    const CategoryIcon = categoryInfo?.icon || FaHeartbeat;

    const getBMIPosition = () => {
        if (!bmi) return 0;
        const bmiNum = parseFloat(bmi);
        if (bmiNum < 18.5) return (bmiNum / 18.5) * 20;
        if (bmiNum < 25) return 20 + ((bmiNum - 18.5) / 6.5) * 30;
        if (bmiNum < 30) return 50 + ((bmiNum - 25) / 5) * 25;
        if (bmiNum < 35) return 75 + ((bmiNum - 30) / 5) * 15;
        if (bmiNum < 40) return 90 + ((bmiNum - 35) / 5) * 5;
        return 95;
    };

    // BMI Scale Component (reused)
    const BMIScale = () => (
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between mb-2">
                <p className="text-sm font-medium text-gray-500">BMI Scale</p>
                {bmi && (
                    <p className="text-xs text-gray-400">Your BMI: <span className="font-bold text-green-600">{bmi}</span></p>
                )}
            </div>
            <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="absolute inset-0 flex">
                    <div className="w-1/5 h-full bg-gradient-to-r from-blue-400 to-blue-500"></div>
                    <div className="w-1/5 h-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                    <div className="w-1/5 h-full bg-gradient-to-r from-green-400 to-emerald-500"></div>
                    <div className="w-1/5 h-full bg-gradient-to-r from-orange-400 to-orange-500"></div>
                    <div className="w-1/5 h-full bg-gradient-to-r from-red-400 to-red-600"></div>
                </div>
                {bmi && (
                    <motion.div
                        initial={{ left: 0 }}
                        animate={{ left: `${getBMIPosition()}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-green-600 rounded-full shadow-md -ml-2"
                    />
                )}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Severe</span>
                <span>Under</span>
                <span>Normal</span>
                <span>Over</span>
                <span>Obese</span>
            </div>
        </div>
    );

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100  dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 shadow-lg px-5 py-2.5 rounded-full mb-6">
                            <FaHeartbeat className="text-white text-sm" />
                            <span className="text-white font-semibold text-sm tracking-wide">HEALTH ASSESSMENT TOOL</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                            BMI <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Calculator</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Understand your body composition and get personalized health insights
                        </p>
                    </motion.div>
                </div>

                {/* Desktop Layout: 2 Columns */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-8">
                    {/* Calculator Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-6 md:p-8">
                            <div className="mb-6 text-center">
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    <FaCalculator className="text-sm" />
                                    Metric Units (kg/cm)
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Row 1: Weight and Height */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="group">
                                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm uppercase tracking-wide">
                                            <FaWeight className="inline mr-2 text-green-600" />
                                            Weight (kg)
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                value={weight}
                                                onChange={(e) => setWeight(e.target.value)}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                placeholder="Enter weight in kg"
                                            />
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                                                kg
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm uppercase tracking-wide">
                                            <FaRulerVertical className="inline mr-2 text-green-600" />
                                            Height (cm)
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                value={height}
                                                onChange={(e) => setHeight(e.target.value)}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                placeholder="Enter height in cm"
                                            />
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                                                cm
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Row 2: Age and Activity Level */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="group">
                                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm uppercase tracking-wide">
                                            <FaCalendarAlt className="inline mr-2 text-green-600" />
                                            Age (Years)
                                        </label>
                                        <input
                                            type="number"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            placeholder="Enter your age"
                                        />
                                    </div>

                                    <div className="group">
                                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm uppercase tracking-wide">
                                            <FaBolt className="inline mr-2 text-green-600" />
                                            Activity Level
                                        </label>
                                        <select
                                            value={activityLevel}
                                            onChange={(e) => setActivityLevel(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all cursor-pointer"
                                        >
                                            <option value="sedentary">Sedentary (little or no exercise)</option>
                                            <option value="light">Light (exercise 1-3 days/week)</option>
                                            <option value="moderate">Moderate (exercise 3-5 days/week)</option>
                                            <option value="active">Active (exercise 6-7 days/week)</option>
                                            <option value="veryActive">Very Active (intense daily exercise)</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Row 3: Buttons */}
                                <div className="flex gap-3 pt-4">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={calculateBMI}
                                        className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg"
                                    >
                                        <FaCalculator className="text-lg" />
                                        Calculate BMI
                                    </motion.button>
                                    {isCalculated && (
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={resetCalculator}
                                            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                                        >
                                            Reset
                                        </motion.button>
                                    )}
                                </div>
                            </div>

                            {/* BMI Scale Visual - Desktop */}
                            <BMIScale />
                        </div>
                    </motion.div>

                    {/* Results Section - Desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <AnimatePresence mode="wait">
                            {!isCalculated ? (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl p-10 text-center h-full flex flex-col items-center justify-center min-h-[500px] backdrop-blur-sm"
                                >
                                    <div className="relative">
                                        <div className="w-28 h-28 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full flex items-center justify-center mb-6">
                                            <FaHeartbeat className="text-green-600 text-4xl" />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                            <FaCalculator className="text-white text-xs" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Ready to Calculate</h3>
                                    <p className="text-gray-500 dark:text-gray-400 max-w-xs">Enter your measurements to see your BMI results</p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className={`bg-gradient-to-br ${categoryInfo.bgGradient} rounded-3xl p-6 md:p-8 shadow-2xl border ${categoryInfo.borderColor}`}
                                >
                                    <div className="text-center">
                                        <div className="relative inline-block mb-4">
                                            <div className="text-6xl md:text-7xl font-black text-gray-900 dark:text-white">
                                                {bmi}
                                            </div>
                                            <div
                                                className="absolute -top-2 -right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                                                style={{ backgroundColor: categoryInfo.color }}
                                            >
                                                <CategoryIcon className="text-white text-lg" />
                                            </div>
                                        </div>
                                        <div
                                            className="inline-block px-6 py-2 rounded-full text-white font-bold text-sm mb-3 shadow-md"
                                            style={{ backgroundColor: categoryInfo.color }}
                                        >
                                            {categoryInfo.title}
                                        </div>
                                        <div className="text-sm text-gray-500 mb-4">Range: {categoryInfo.range}</div>
                                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                            {categoryInfo.description}
                                        </p>

                                        <div className="mb-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                                            <h4 className="font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
                                                <FaShieldAlt className={`${categoryInfo.textColor}`} />
                                                Recommendation
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                {categoryInfo.recommendation}
                                            </p>
                                        </div>

                                        {age && (
                                            <div className="grid grid-cols-3 gap-3 mb-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                                <div className="text-center">
                                                    <div className="text-xl font-bold text-gray-800 dark:text-white">{idealWeight}</div>
                                                    <div className="text-xs text-gray-500">Ideal Weight (kg)</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-xl font-bold text-gray-800 dark:text-white">{bmr}</div>
                                                    <div className="text-xs text-gray-500">BMR (calories)</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-xl font-bold text-gray-800 dark:text-white">{dailyCalories}</div>
                                                    <div className="text-xs text-gray-500">Daily Calories</div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="grid grid-cols-3 gap-3 pt-6 mt-4 border-t border-gray-200 dark:border-gray-700">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-gray-800 dark:text-white">{bmi}</div>
                                                <div className="text-xs text-gray-500">Current BMI</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-gray-800 dark:text-white">
                                                    {category === 'normal' ? '✓' : category === 'underweight' ? '↑' : '↓'}
                                                </div>
                                                <div className="text-xs text-gray-500">Goal Status</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-gray-800 dark:text-white">
                                                    {category === 'normal' ? '22' : category === 'underweight' ? '19' : '24'}
                                                </div>
                                                <div className="text-xs text-gray-500">Target BMI</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Mobile Layout: Stacked with BMI Scale Between */}
                <div className="lg:hidden">
                    {/* Calculator Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-6"
                    >
                        <div className="p-6">
                            <div className="mb-4 text-center">
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    <FaCalculator className="text-sm" />
                                    Metric Units (kg/cm)
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm uppercase tracking-wide">
                                            <FaWeight className="inline mr-2 text-green-600" />
                                            Weight (kg)
                                        </label>
                                        <input
                                            type="number"
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            placeholder="Enter weight"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm uppercase tracking-wide">
                                            <FaRulerVertical className="inline mr-2 text-green-600" />
                                            Height (cm)
                                        </label>
                                        <input
                                            type="number"
                                            value={height}
                                            onChange={(e) => setHeight(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            placeholder="Enter height"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm uppercase tracking-wide">
                                            <FaCalendarAlt className="inline mr-2 text-green-600" />
                                            Age (Years)
                                        </label>
                                        <input
                                            type="number"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            placeholder="Your age"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm uppercase tracking-wide">
                                            <FaBolt className="inline mr-2 text-green-600" />
                                            Activity
                                        </label>
                                        <select
                                            value={activityLevel}
                                            onChange={(e) => setActivityLevel(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all cursor-pointer"
                                        >
                                            <option value="sedentary">Sedentary</option>
                                            <option value="light">Light</option>
                                            <option value="moderate">Moderate</option>
                                            <option value="active">Active</option>
                                            <option value="veryActive">Very Active</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <button
                                        onClick={calculateBMI}
                                        className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg"
                                    >
                                        <FaCalculator className="text-lg" />
                                        Calculate BMI
                                    </button>
                                    {isCalculated && (
                                        <button
                                            onClick={resetCalculator}
                                            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                                        >
                                            Reset
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* BMI Scale - Mobile (Between Form and Results) */}
                    {isCalculated && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-5 mb-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                        >
                            <BMIScale />
                        </motion.div>
                    )}

                    {/* Results Section - Mobile */}
                    <AnimatePresence mode="wait">
                        {!isCalculated ? (
                            <motion.div
                                key="empty-mobile"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl p-8 text-center backdrop-blur-sm"
                            >
                                <div className="relative inline-block">
                                    <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full flex items-center justify-center mb-4">
                                        <FaHeartbeat className="text-green-600 text-3xl" />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Ready to Calculate</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Enter your measurements to see your BMI results</p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result-mobile"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className={`bg-gradient-to-br ${categoryInfo.bgGradient} rounded-3xl p-6 shadow-2xl border ${categoryInfo.borderColor}`}
                            >
                                <div className="text-center">
                                    <div className="relative inline-block mb-3">
                                        <div className="text-5xl font-black text-gray-900 dark:text-white">
                                            {bmi}
                                        </div>
                                        <div
                                            className="absolute -top-2 -right-7 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                                            style={{ backgroundColor: categoryInfo.color }}
                                        >
                                            <CategoryIcon className="text-white text-base" />
                                        </div>
                                    </div>
                                    <div
                                        className="inline-block px-4 py-1.5 rounded-full text-white font-bold text-xs mb-2 shadow-md"
                                        style={{ backgroundColor: categoryInfo.color }}
                                    >
                                        {categoryInfo.title}
                                    </div>
                                    <div className="text-xs text-gray-500 mb-3">Range: {categoryInfo.range}</div>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                                        {categoryInfo.description}
                                    </p>

                                    <div className="mb-4 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                                        <h4 className="font-bold text-gray-800 dark:text-white mb-1 flex items-center gap-2 text-sm">
                                            <FaShieldAlt className={`${categoryInfo.textColor}`} />
                                            Recommendation
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-xs">
                                            {categoryInfo.recommendation}
                                        </p>
                                    </div>

                                    {age && (
                                        <div className="grid grid-cols-3 gap-2 mb-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                                            <div className="text-center">
                                                <div className="text-base font-bold text-gray-800 dark:text-white">{idealWeight}</div>
                                                <div className="text-[10px] text-gray-500">Ideal Weight</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-base font-bold text-gray-800 dark:text-white">{bmr}</div>
                                                <div className="text-[10px] text-gray-500">BMR</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-base font-bold text-gray-800 dark:text-white">{dailyCalories}</div>
                                                <div className="text-[10px] text-gray-500">Daily Calories</div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-3 gap-2 pt-3 mt-3 border-t border-gray-200 dark:border-gray-700">
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-gray-800 dark:text-white">{bmi}</div>
                                            <div className="text-[10px] text-gray-500">Current BMI</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-gray-800 dark:text-white">
                                                {category === 'normal' ? '✓' : category === 'underweight' ? '↑' : '↓'}
                                            </div>
                                            <div className="text-[10px] text-gray-500">Goal Status</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-gray-800 dark:text-white">
                                                {category === 'normal' ? '22' : category === 'underweight' ? '19' : '24'}
                                            </div>
                                            <div className="text-[10px] text-gray-500">Target BMI</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Healthy Living Guidelines */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16"
                >
                    <h3 className="text-center text-2xl font-bold text-gray-800 dark:text-white mb-8">Healthy Living Guidelines</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: FaUtensils, title: "Balanced Nutrition", desc: "Whole foods, variety", color: "from-green-500 to-emerald-500" },
                            { icon: FaRunning, title: "Regular Activity", desc: "150 mins/week", color: "from-blue-500 to-cyan-500" },
                            { icon: FaMoon, title: "Quality Sleep", desc: "7-9 hours nightly", color: "from-purple-500 to-indigo-500" },
                            { icon: FaTint, title: "Stay Hydrated", desc: "2-3 liters daily", color: "from-cyan-500 to-blue-500" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                            >
                                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                                    <item.icon className="text-white text-xl" />
                                </div>
                                <p className="font-bold text-gray-800 dark:text-white text-sm">{item.title}</p>
                                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Disclaimer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                        <FaInfoCircle className="inline mr-1" /> This BMI calculator provides estimates only. Consult a healthcare professional for medical advice.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default BMICalculator;