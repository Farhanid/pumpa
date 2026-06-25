import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
    FaChild,
    FaUserGraduate,
    FaTrophy,
    FaHeart,
    FaStar,
    FaChevronRight,
    FaCheckCircle,
    FaArrowRight,
    FaMedal,
    FaChartLine,
    FaUsers,
    FaBrain,
    FaHeartbeat,
    FaCrown,
    FaGlobe,
    FaQuoteLeft,
    FaChevronLeft,
    FaChevronDown,
    FaPlay,
    FaShieldAlt
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DevelopmentPathway = () => {
    const navigate = useNavigate();
    const [activeStage, setActiveStage] = useState(1);
    const [hoveredStage, setHoveredStage] = useState(null);
    const [mobileActiveStage, setMobileActiveStage] = useState(1);
    const [isMobileView, setIsMobileView] = useState(false);
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const handleLearnMore = () => {
        navigate('/programs');
    };

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

    // Check viewport for responsive behavior
    useEffect(() => {
        const checkMobile = () => {
            setIsMobileView(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const stages = [
        {
            id: 1,
            title: "Discovery",
            age: "Ages 4–6",
            subtitle: "FUNdamentals & Love for Sport",
            color: "#10b981",
            gradient: "from-green-600 to-emerald-600",
            bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
            borderGradient: "group-hover:border-green-500",
            icon: FaChild,
            metrics: ["100+ Kids Enrolled", "95% Parent Satisfaction"],
            points: [
                "Coordination & movement mastery",
                "Fun games & activities",
                "Basic racket skills",
                "Confidence building"
            ],
            description: "Our Discovery stage introduces young athletes to the world of squash through play-based learning. We focus on developing fundamental movement skills, hand-eye coordination, and a genuine love for the sport."
        },
        {
            id: 2,
            title: "Foundation",
            age: "Ages 7–9",
            subtitle: "Building Strong Foundations",
            color: "#3b82f6",
            gradient: "from-blue-600 to-cyan-600",
            bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
            borderGradient: "group-hover:border-blue-500",
            icon: FaUserGraduate,
            metrics: ["85% Skill Improvement", "Weekly Tournaments"],
            points: [
                "Basic squash techniques",
                "Movement & footwork",
                "Rally skills",
                "Discipline & sportsmanship"
            ],
            description: "In the Foundation stage, we build upon the basics with structured training sessions. Players develop proper technique, footwork patterns, and begin understanding the tactical aspects of squash while maintaining the fun element."
        },
        {
            id: 3,
            title: "Excellence",
            age: "Ages 10–12",
            subtitle: "Confidence & Match Awareness",
            color: "#8b5cf6",
            gradient: "from-purple-600 to-violet-600",
            bgGradient: "from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20",
            borderGradient: "group-hover:border-purple-500",
            icon: FaMedal,
            metrics: ["30+ Competition Wins", "Advanced Training"],
            points: [
                "Technical consistency",
                "Fitness foundations",
                "Match understanding",
                "Introduction to competitions"
            ],
            description: "The Excellence stage marks the transition to competitive play. Players refine their techniques, build physical fitness, and develop match awareness through regular practice matches and local competitions."
        },
        {
            id: 4,
            title: "Championship",
            age: "Ages 13–15",
            subtitle: "Competitive Player Development",
            color: "#f59e0b",
            gradient: "from-amber-600 to-orange-600",
            bgGradient: "from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20",
            borderGradient: "group-hover:border-orange-500",
            icon: FaTrophy,
            metrics: ["Regional Champions", "National Qualifiers"],
            points: [
                "Tactical awareness",
                "Tournament preparation",
                "Mental resilience",
                "Strength & conditioning"
            ],
            description: "Championship stage focuses on high-level competitive development. Players learn advanced tactics, tournament strategies, mental preparation techniques, and physical conditioning required for elite competition."
        },
        {
            id: 5,
            title: "Elite",
            age: "Ages 16+",
            subtitle: "High Performance Training",
            color: "#ec4899",
            gradient: "from-pink-600 to-rose-600",
            bgGradient: "from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20",
            borderGradient: "group-hover:border-pink-500",
            icon: FaCrown,
            metrics: ["National Rankings", "International Exposure"],
            points: [
                "Advanced performance training",
                "Professional mindset",
                "Tournament planning",
                "University & future pathways"
            ],
            description: "The Elite stage prepares athletes for professional and collegiate squash. We provide comprehensive training including performance analysis, sports psychology, nutrition guidance, and career pathway planning."
        },
        {
            id: 6,
            title: "Lifestyle",
            age: "Adults",
            subtitle: "Fitness, Wellness & Enjoyment",
            color: "#14b8a6",
            gradient: "from-teal-600 to-cyan-600",
            bgGradient: "from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20",
            borderGradient: "group-hover:border-teal-500",
            icon: FaHeartbeat,
            metrics: ["200+ Active Members", "Social Events Monthly"],
            points: [
                "Beginner to advanced sessions",
                "Fitness & health",
                "Social & competitive squash",
                "Lifelong love for the game"
            ],
            description: "Our Lifestyle program caters to adults of all skill levels. Whether you're a complete beginner or a seasoned player, we offer programs focused on fitness, social engagement, and enjoying the game at your own pace."
        }
    ];

    const benefits = [
        { icon: FaChartLine, title: "Age-appropriate development", desc: "Tailored curriculum for each stage" },
        { icon: FaUsers, title: "Positive & supportive coaching", desc: "Experienced certified coaches" },
        { icon: FaBrain, title: "Strong focus on mental well-being", desc: "Building resilience & confidence" },
        { icon: FaGlobe, title: "International exposure opportunities", desc: "Global tournaments & training" },
        { icon: FaHeart, title: "Development beyond the court", desc: "Life skills & character building" },
        { icon: FaShieldAlt, title: "Safe & nurturing environment", desc: "Priority on player well-being" }
    ];

    const handleStageChange = (id) => {
        setActiveStage(id);
        setMobileActiveStage(id);
    };

    // Mobile carousel navigation
    const nextStage = () => {
        setMobileActiveStage(prev => prev === stages.length ? 1 : prev + 1);
    };

    const prevStage = () => {
        setMobileActiveStage(prev => prev === 1 ? stages.length : prev - 1);
    };

    // Auto-advance carousel on mobile
    useEffect(() => {
        let interval;
        if (isMobileView) {
            interval = setInterval(() => {
                nextStage();
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isMobileView]);

    return (
        <section
            ref={sectionRef}
            className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-white/50 dark:bg-gray-900 transition-colors duration-300"
        >
            {/* Premium Background with Geometric Shapes - Same as Heros component */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50/80 dark:from-green-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-emerald-50/40 dark:from-emerald-950/20 to-transparent rounded-tr-full" />
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-200/20 dark:bg-green-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-emerald-200/10 dark:bg-emerald-500/5 rounded-full blur-3xl" />

                {/* Decorative Grid Pattern - Dark Mode Support */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                {/* Section Header - Fully Responsive */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl px-4 sm:px-6 py-2 rounded-full mb-6 sm:mb-8 border border-gray-200/50 dark:border-gray-700/50"
                    >
                        <motion.div
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-gray-700 dark:text-gray-300 font-semibold text-xs sm:text-sm tracking-[0.15em] uppercase">
                            Pathway to Excellence
                        </span>
                        <motion.div
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
                        />
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Our Development
                        <motion.span
                            className="block bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent mt-1 sm:mt-2 font-display"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Pathway to Greatness
                        </motion.span>
                    </motion.h2>

                    {/* Decorative Divider */}
                    <motion.div
                        className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-green-500" />
                        <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                />
                            ))}
                        </div>
                        <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-green-500" />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-[1.8] font-light tracking-wide px-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        At Pumpa, we believe every player develops at their own pace. Our structured pathway is designed
                        to help players grow step by step — from first-time beginners to competitive athletes and beyond.
                    </motion.p>
                </motion.div>

                {/* Desktop Interactive Timeline */}
                <div className="hidden lg:block relative mb-24">
                    {/* Timeline Bar */}
                    <div className="absolute left-0 right-0 top-20 h-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent rounded-full">
                        <motion.div
                            className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${((activeStage - 1) / (stages.length - 1)) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>

                    <div className="grid grid-cols-6 gap-6 relative">
                        {stages.map((stage, idx) => {
                            const Icon = stage.icon;
                            const isActive = activeStage === stage.id;
                            const isHovered = hoveredStage === stage.id;

                            return (
                                <motion.div
                                    key={stage.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="text-center cursor-pointer group"
                                    onClick={() => setActiveStage(stage.id)}
                                    onMouseEnter={() => setHoveredStage(stage.id)}
                                    onMouseLeave={() => setHoveredStage(null)}
                                >
                                    <div className="relative mb-5">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                                            className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-3xl text-white shadow-xl transition-all duration-300 
                                                ${isActive ? 'ring-4 ring-offset-4 ring-green-500 shadow-2xl' : 'ring-1 ring-gray-200 dark:ring-gray-700'}
                                                bg-gradient-to-r ${stage.gradient}`}
                                        >
                                            <Icon />
                                        </motion.div>

                                        {isActive && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs"
                                            >
                                                <FaCheckCircle />
                                            </motion.div>
                                        )}
                                    </div>

                                    <h3 className={`font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300 tracking-wide ${isActive ? 'text-green-600 dark:text-green-400' : ''}`}>
                                        {stage.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 font-light tracking-wide">{stage.age}</p>

                                    {/* Tooltip */}
                                    {isHovered && !isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute left-1/2 -translate-x-1/2 -top-24 w-48 bg-gray-900 text-white text-xs rounded-lg p-2 z-20"
                                        >
                                            <div className="font-semibold mb-1 tracking-wide">{stage.subtitle}</div>
                                            <div className="text-gray-300 font-light tracking-wide">{stage.metrics[0]}</div>
                                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-gray-900 rotate-45" />
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Active Stage Details */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStage}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -30, scale: 0.95 }}
                            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                            className={`mt-16 p-8 rounded-3xl bg-gradient-to-br ${stages[activeStage - 1].bgGradient} border border-gray-200/50 dark:border-gray-700/50 shadow-2xl`}
                        >
                            <div className="flex flex-wrap items-start justify-between gap-8">
                                <div className="flex-1 min-w-[280px]">
                                    <div className="flex items-center gap-4 mb-4 flex-wrap">
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                                            {stages[activeStage - 1].title}
                                        </h3>
                                        <span
                                            className={`px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${stages[activeStage - 1].gradient} shadow-md tracking-wide`}
                                        >
                                            {stages[activeStage - 1].age}
                                        </span>
                                    </div>

                                    <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6 font-medium tracking-wide">
                                        {stages[activeStage - 1].subtitle}
                                    </p>

                                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-[1.8] font-light tracking-wide">
                                        {stages[activeStage - 1].description}
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                                        {stages[activeStage - 1].points.map((point, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="flex items-center gap-3 group"
                                            >
                                                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center flex-shrink-0">
                                                    <FaCheckCircle className="text-green-500 text-xs sm:text-sm" />
                                                </div>
                                                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium tracking-wide group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                                    {point}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                                        {stages[activeStage - 1].metrics.map((metric, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm">
                                                <FaStar className="text-yellow-500 text-xs sm:text-sm" />
                                                <span className="text-gray-600 dark:text-gray-400 font-medium tracking-wide">{metric}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleLearnMore}
                                    className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap text-sm sm:text-base tracking-wide"
                                >
                                    Learn More
                                    <FaArrowRight className="text-xs sm:text-sm" />
                                </motion.button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Mobile/Tablet Enhanced Carousel */}
                <div className="lg:hidden mb-16">
                    <div className="relative">
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevStage}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 -ml-3 sm:-ml-4"
                            aria-label="Previous stage"
                        >
                            <FaChevronLeft className="text-gray-700 dark:text-gray-300 text-sm sm:text-base" />
                        </button>

                        <button
                            onClick={nextStage}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 -mr-3 sm:-mr-4"
                            aria-label="Next stage"
                        >
                            <FaChevronRight className="text-gray-700 dark:text-gray-300 text-sm sm:text-base" />
                        </button>

                        {/* Stage Counter */}
                        <div className="text-center mb-4">
                            <span className="text-sm font-light text-gray-500 dark:text-gray-400 tracking-wide">
                                {mobileActiveStage} / {stages.length}
                            </span>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={mobileActiveStage}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className={`bg-gradient-to-br ${stages[mobileActiveStage - 1].bgGradient} rounded-2xl p-5 sm:p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg mx-4`}
                            >
                                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                                    <div
                                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-white text-lg sm:text-xl shadow-lg bg-gradient-to-r ${stages[mobileActiveStage - 1].gradient} flex-shrink-0`}
                                    >
                                        {React.createElement(stages[mobileActiveStage - 1].icon)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white truncate tracking-tight">
                                            {stages[mobileActiveStage - 1].title}
                                        </h3>
                                        <span
                                            className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${stages[mobileActiveStage - 1].gradient} tracking-wide`}
                                        >
                                            {stages[mobileActiveStage - 1].age}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-sm sm:text-base text-green-600 dark:text-green-400 font-medium mb-3 tracking-wide">
                                    {stages[mobileActiveStage - 1].subtitle}
                                </p>

                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 leading-[1.8] font-light tracking-wide">
                                    {stages[mobileActiveStage - 1].description}
                                </p>

                                <div className="space-y-2 mb-4">
                                    {stages[mobileActiveStage - 1].points.map((point, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                            <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                                            <span className="font-light tracking-wide">{point}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-200/50 dark:border-gray-700/50">
                                    {stages[mobileActiveStage - 1].metrics.map((metric, idx) => (
                                        <div key={idx} className="flex items-center gap-1.5 text-xs">
                                            <FaStar className="text-yellow-500 text-xs" />
                                            <span className="text-gray-600 dark:text-gray-400 font-medium tracking-wide">{metric}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Progress Dots */}
                        <div className="flex justify-center gap-2 mt-4">
                            {stages.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setMobileActiveStage(idx + 1)}
                                    className={`h-2 rounded-full transition-all duration-300 ${mobileActiveStage === idx + 1
                                        ? 'w-6 bg-gradient-to-r from-green-500 to-emerald-500'
                                        : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                        }`}
                                    aria-label={`Go to stage ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Benefits Section - Fully Responsive */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-16 sm:mb-20"
                >
                    <motion.div
                        className="text-center mb-8 sm:mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.h3
                            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3 sm:mb-4 tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Why Our Pathway Works
                        </motion.h3>

                        <motion.div
                            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: 64, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        />

                        <motion.p
                            className="text-gray-600 dark:text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light tracking-wide"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            A comprehensive approach that develops skilled players and confident individuals
                        </motion.p>
                    </motion.div>

                    {/* Benefits Grid - Responsive */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                whileHover={{ y: -4 }}
                                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 rounded-xl sm:rounded-2xl transition-all duration-300" />
                                <div className="relative">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                                        {React.createElement(benefit.icon, { className: "text-white text-base sm:text-xl" })}
                                    </div>
                                    <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 tracking-wide">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light tracking-wide">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Quote & CTA - Enhanced Responsive */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 text-center border border-gray-100 dark:border-gray-700">
                        <div className="text-4xl sm:text-5xl text-green-500/20 mb-2 sm:mb-3 font-serif">"</div>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif italic text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-[1.8] tracking-wide">
                            At Pumpa, we don't just develop players — we develop confident individuals for life.
                        </p>

                        <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-green-500" />
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full" />
                            <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-green-500" />
                        </div>

                        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight">
                            Start Here… Shine Everywhere.
                        </h3>

                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base tracking-wide"
                        >
                            Begin Your Journey
                            <FaArrowRight className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Accent Line - Same as Heros component */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 dark:via-green-500/30 to-transparent" />
        </section>
    );
};

export default DevelopmentPathway;

















