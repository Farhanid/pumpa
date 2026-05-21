// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//     FaChild,
//     FaUserGraduate,
//     FaTrophy,
//     FaHeart,
//     FaStar,
//     FaChevronRight,
//     FaCheckCircle,
//     FaArrowRight
// } from 'react-icons/fa';

// const DevelopmentPathway = () => {
//     const [activeStage, setActiveStage] = useState(1);

//     const stages = [
//         {
//             id: 1,
//             title: "Discover",
//             age: "Ages 4–6",
//             subtitle: "FUNdamentals & Love for Sport",
//             color: "#10b981",
//             bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
//             points: [
//                 "Coordination & movement",
//                 "Fun games & activities",
//                 "Basic racket skills",
//                 "Confidence building"
//             ]
//         },
//         {
//             id: 2,
//             title: "Learn",
//             age: "Ages 7–9",
//             subtitle: "Building Strong Foundations",
//             color: "#3b82f6",
//             bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
//             points: [
//                 "Basic squash techniques",
//                 "Movement & footwork",
//                 "Rally skills",
//                 "Discipline & sportsmanship"
//             ]
//         },
//         {
//             id: 3,
//             title: "Develop",
//             age: "Ages 10–12",
//             subtitle: "Confidence & Match Awareness",
//             color: "#8b5cf6",
//             bgGradient: "from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30",
//             points: [
//                 "Technical consistency",
//                 "Fitness foundations",
//                 "Match understanding",
//                 "Introduction to competitions"
//             ]
//         },
//         {
//             id: 4,
//             title: "Compete",
//             age: "Ages 13–15",
//             subtitle: "Competitive Player Development",
//             color: "#f59e0b",
//             bgGradient: "from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30",
//             points: [
//                 "Tactical awareness",
//                 "Tournament preparation",
//                 "Mental resilience",
//                 "Strength & conditioning"
//             ]
//         },
//         {
//             id: 5,
//             title: "Perform",
//             age: "Ages 16+",
//             subtitle: "High Performance Training",
//             color: "#ec4899",
//             bgGradient: "from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30",
//             points: [
//                 "Advanced performance training",
//                 "Professional mindset",
//                 "Tournament planning",
//                 "University & future pathways"
//             ]
//         },
//         {
//             id: 6,
//             title: "Play for Life",
//             age: "Adults",
//             subtitle: "Fitness, Wellness & Enjoyment",
//             color: "#14b8a6",
//             bgGradient: "from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30",
//             points: [
//                 "Beginner to advanced sessions",
//                 "Fitness & health",
//                 "Social & competitive squash",
//                 "Lifelong love for the game"
//             ]
//         }
//     ];

//     const benefits = [
//         "Age-appropriate development",
//         "Positive & supportive coaching",
//         "Strong focus on mental well-being",
//         "International exposure opportunities",
//         "Development beyond the court"
//     ];

//     return (
//         <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 overflow-hidden">
//             <div className="container mx-auto px-4 max-w-7xl">
//                 {/* Section Header */}
//                 <div className="text-center mb-16">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="relative"
//                     >
//                         <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 shadow-lg px-5 py-2 rounded-full mb-6">
//                             <FaStar className="text-green-600 dark:text-green-400 text-sm" />
//                             <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Pathway to Excellence</span>
//                         </div>

//                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
//                             Our Development <br />
//                             <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Pathway</span>
//                         </h2>

//                         <motion.div
//                             className="flex items-center justify-center gap-3 mb-6"
//                             initial={{ opacity: 0, scaleX: 0 }}
//                             whileInView={{ opacity: 1, scaleX: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: 0.2 }}
//                         >
//                             <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-500"></div>
//                             <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
//                             <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-500"></div>
//                         </motion.div>

//                         <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-light">
//                             At Pumpa, we believe every player develops at their own pace. Our structured pathway is designed
//                             to help players grow step by step — from first-time beginners to competitive athletes.
//                         </p>
//                     </motion.div>
//                 </div>

//                 {/* Desktop Timeline View */}
//                 <div className="hidden lg:block relative mb-20">
//                     {/* Connecting Line */}
//                     <div className="absolute left-0 right-0 top-24 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 rounded-full"></div>

//                     <div className="grid grid-cols-6 gap-4 relative">
//                         {stages.map((stage, idx) => (
//                             <motion.div
//                                 key={stage.id}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: idx * 0.1 }}
//                                 className="text-center cursor-pointer group"
//                                 onClick={() => setActiveStage(stage.id)}
//                             >
//                                 <div className="relative mb-4">
//                                     <div
//                                         className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl text-white shadow-lg transition-all duration-300 group-hover:scale-110 ${activeStage === stage.id ? 'ring-4 ring-offset-4 ring-green-500' : ''
//                                             }`}
//                                         style={{ backgroundColor: stage.color }}
//                                     >
//                                         {stage.id === 1 && <FaChild />}
//                                         {stage.id === 2 && <FaUserGraduate />}
//                                         {stage.id === 3 && <FaStar />}
//                                         {stage.id === 4 && <FaTrophy />}
//                                         {stage.id === 5 && <FaChevronRight />}
//                                         {stage.id === 6 && <FaHeart />}
//                                     </div>
//                                     <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 group-hover:w-full transition-all duration-300"></div>
//                                 </div>
//                                 <h3 className="font-bold text-gray-900 dark:text-white">{stage.title}</h3>
//                                 <p className="text-xs text-gray-500">{stage.age}</p>
//                             </motion.div>
//                         ))}
//                     </div>

//                     {/* Active Stage Details */}
//                     <motion.div
//                         key={activeStage}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className={`mt-12 p-8 rounded-2xl bg-gradient-to-r ${stages[activeStage - 1].bgGradient}`}
//                     >
//                         <div className="flex flex-wrap items-start justify-between gap-6">
//                             <div className="flex-1">
//                                 <div className="flex items-center gap-3 mb-2">
//                                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
//                                         {stages[activeStage - 1].title}
//                                     </h3>
//                                     <span
//                                         className="px-3 py-1 rounded-full text-sm font-semibold text-white"
//                                         style={{ backgroundColor: stages[activeStage - 1].color }}
//                                     >
//                                         {stages[activeStage - 1].age}
//                                     </span>
//                                 </div>
//                                 <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
//                                     {stages[activeStage - 1].subtitle}
//                                 </p>
//                                 <div className="grid sm:grid-cols-2 gap-3">
//                                     {stages[activeStage - 1].points.map((point, idx) => (
//                                         <div key={idx} className="flex items-center gap-2">
//                                             <FaCheckCircle style={{ color: stages[activeStage - 1].color }} />
//                                             <span className="text-gray-700 dark:text-gray-300">{point}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>

//                 {/* Mobile/Tablet Cards View */}
//                 <div className="lg:hidden space-y-4 mb-20">
//                     {stages.map((stage, idx) => (
//                         <motion.div
//                             key={stage.id}
//                             initial={{ opacity: 0, x: -30 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: idx * 0.05 }}
//                             className={`bg-gradient-to-r ${stage.bgGradient} rounded-xl p-5`}
//                         >
//                             <div className="flex items-center gap-3 mb-3">
//                                 <div
//                                     className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg"
//                                     style={{ backgroundColor: stage.color }}
//                                 >
//                                     {stage.id === 1 && <FaChild />}
//                                     {stage.id === 2 && <FaUserGraduate />}
//                                     {stage.id === 3 && <FaStar />}
//                                     {stage.id === 4 && <FaTrophy />}
//                                     {stage.id === 5 && <FaChevronRight />}
//                                     {stage.id === 6 && <FaHeart />}
//                                 </div>
//                                 <div>
//                                     <h3 className="text-lg font-bold text-gray-900 dark:text-white">{stage.title}</h3>
//                                     <p className="text-xs text-gray-500">{stage.age}</p>
//                                 </div>
//                             </div>
//                             <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">
//                                 {stage.subtitle}
//                             </p>
//                             <div className="grid grid-cols-2 gap-2">
//                                 {stage.points.map((point, pointIdx) => (
//                                     <div key={pointIdx} className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
//                                         <FaCheckCircle className="text-green-500 text-[10px]" />
//                                         <span>{point}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Why Our Pathway Works */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="mb-16"
//                 >
//                     <div className="text-center mb-10">
//                         <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
//                             Why Our Pathway Works
//                         </h3>
//                         <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
//                     </div>
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                         {benefits.map((benefit, idx) => (
//                             <motion.div
//                                 key={idx}
//                                 initial={{ opacity: 0, scale: 0.95 }}
//                                 whileInView={{ opacity: 1, scale: 1 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: idx * 0.05 }}
//                                 className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
//                             >
//                                 <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
//                                     <FaCheckCircle className="text-green-600 text-sm" />
//                                 </div>
//                                 <span className="text-gray-700 dark:text-gray-300 font-medium">{benefit}</span>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </motion.div>

//                 {/* Quote & CTA */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="text-center"
//                 >
//                     <div className="relative">
//                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
//                         <div className="relative">
//                             <div className="inline-block bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
//                                 <div className="text-6xl text-green-500/30 mb-4">"</div>
//                                 <p className="text-xl md:text-2xl font-serif italic text-gray-700 dark:text-gray-300 mb-6">
//                                     At Pumpa, we don't just develop players — we develop confident individuals for life.
//                                 </p>
//                                 <div className="flex items-center justify-center gap-3 mb-6">
//                                     <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-500"></div>
//                                     <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
//                                     <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-500"></div>
//                                 </div>
//                                 <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//                                     Start Here… Shine Everywhere.
//                                 </h3>
//                                 <a
//                                     href="/contact"
//                                     className="inline-flex items-center justify-center gap-2 mt-6 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//                                 >
//                                     Begin Your Journey
//                                     <FaArrowRight />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default DevelopmentPathway;








import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
    FaCrown
} from 'react-icons/fa';

const DevelopmentPathway = () => {
    const [activeStage, setActiveStage] = useState(1);
    const [hoveredStage, setHoveredStage] = useState(null);
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
        }
    ];

    const benefits = [
        { icon: FaChartLine, title: "Age-appropriate development", desc: "Tailored curriculum for each stage" },
        { icon: FaUsers, title: "Positive & supportive coaching", desc: "Experienced certified coaches" },
        { icon: FaBrain, title: "Strong focus on mental well-being", desc: "Building resilience & confidence" },
        { icon: FaGlobe, title: "International exposure opportunities", desc: "Global tournaments & training" },
        { icon: FaHeart, title: "Development beyond the court", desc: "Life skills & character building" }
    ];

    const stats = [
        { value: "15+", label: "Years of Excellence", color: "green" },
        { value: "500+", label: "Active Players", color: "blue" },
        { value: "50+", label: "National Awards", color: "purple" },
        { value: "100%", label: "Commitment to Growth", color: "orange" }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-slate-900"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45"></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Section Header with Enhanced Design */}
               



                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    {/* Badge with entrance animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="inline-flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl px-6 py-2.5 rounded-full mb-8 border border-gray-200/50 dark:border-gray-700/50"
                    >
                        <motion.div
                            className="w-2 h-2 bg-green-500 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm tracking-wide">Pathway to Excellence</span>
                        <motion.div
                            className="w-2 h-2 bg-green-500 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
                        />
                    </motion.div>

                    {/* Main heading with staggered animation */}
                    <motion.h2
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Our Development
                        <motion.span
                            className="block bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent mt-2"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Pathway to Greatness
                        </motion.span>
                    </motion.h2>

                    {/* Decorative divider with animation */}
                    <motion.div
                        className="flex items-center justify-center gap-4 mb-8"
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-green-500"></div>
                        <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-1.5 h-1.5 bg-green-500 rounded-full"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                />
                            ))}
                        </div>
                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-green-500"></div>
                    </motion.div>

                    {/* Description with slide up animation */}
                    <motion.p
                        className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        At Pumpa, we believe every player develops at their own pace. Our structured pathway is designed
                        to help players grow step by step — from first-time beginners to competitive athletes and beyond.
                    </motion.p>
                </motion.div>













                {/* Statistics Banner */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
                        >
                            <div className={`text-4xl font-bold bg-gradient-to-r from-${stat.color}-600 to-${stat.color}-500 bg-clip-text text-transparent mb-2`}>
                                {stat.value}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 font-medium text-sm uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div> */}

                {/* Desktop Interactive Timeline */}
                <div className="hidden lg:block relative mb-24">
                    {/* Animated Timeline Bar */}
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

                                    <h3 className={`font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300 ${isActive ? 'text-green-600 dark:text-green-400' : ''}`}>
                                        {stage.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{stage.age}</p>

                                    {/* Tooltip on hover */}
                                    {isHovered && !isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute left-1/2 -translate-x-1/2 -top-24 w-48 bg-gray-900 text-white text-xs rounded-lg p-2 z-20"
                                        >
                                            <div className="font-semibold mb-1">{stage.subtitle}</div>
                                            <div className="text-gray-300">{stage.metrics[0]}</div>
                                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Active Stage Details with Enhanced Animation */}
                    <motion.div
                        key={activeStage}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                        className={`mt-16 p-8 rounded-3xl bg-gradient-to-br ${stages[activeStage - 1].bgGradient} border border-gray-200/50 dark:border-gray-700/50 shadow-2xl`}
                    >
                        <div className="flex flex-wrap items-start justify-between gap-8">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4 flex-wrap">
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                                        {stages[activeStage - 1].title}
                                    </h3>
                                    <span
                                        className={`px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${stages[activeStage - 1].gradient} shadow-md`}
                                    >
                                        {stages[activeStage - 1].age}
                                    </span>
                                </div>

                                <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 font-medium">
                                    {stages[activeStage - 1].subtitle}
                                </p>

                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    {stages[activeStage - 1].points.map((point, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="flex items-center gap-3 group"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center">
                                                <FaCheckCircle className="text-green-500 text-sm" />
                                            </div>
                                            <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                                {point}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                                    {stages[activeStage - 1].metrics.map((metric, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm">
                                            <FaStar className="text-yellow-500" />
                                            <span className="text-gray-600 dark:text-gray-400 font-medium">{metric}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                            >
                                Learn More
                                <FaArrowRight className="text-sm" />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>


               

                




                {/* Mobile/Tablet Enhanced Cards View */}
                <div className="lg:hidden space-y-5 mb-20">
                    {stages.map((stage, idx) => {
                        const Icon = stage.icon;
                        return (
                            <motion.div
                                key={stage.id}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ scale: 1.02 }}
                                className={`bg-gradient-to-r ${stage.bgGradient} rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg`}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl shadow-lg bg-gradient-to-r ${stage.gradient}`}
                                    >
                                        <Icon />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{stage.title}</h3>
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${stage.gradient}`}
                                            >
                                                {stage.age}
                                            </span>
                                        </div>
                                        <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-3">
                                            {stage.subtitle}
                                        </p>
                                        <div className="grid grid-cols-1 gap-2">
                                            {stage.points.map((point, pointIdx) => (
                                                <div key={pointIdx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                    <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                                                    <span>{point}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Why Our Pathway Works - Enhanced */}
               


                
              






                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-20 overflow-hidden"
                >
                    {/* Header Section with Staggered Animations */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.h3
                            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Why Our Pathway Works
                        </motion.h3>

                        <motion.div
                            className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: 80, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        />

                        <motion.p
                            className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            A comprehensive approach that develops skilled players and confident individuals
                        </motion.p>
                    </motion.div>

                    {/* Carousel Section with Enhanced Animations */}
                    <div className="relative">
                        {/* Gradient overlays with fade animation */}
                        <motion.div
                            className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        />
                        <motion.div
                            className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        />

                        <div className="overflow-hidden">
                            <motion.div
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    duration: 40,
                                    repeat: Infinity,
                                    ease: "linear",
                                    repeatType: "loop"
                                }}
                                whileHover={{
                                    animationPlayState: "paused",
                                    transition: { duration: 0.2 }
                                }}
                                className="flex gap-6 w-max"
                            >
                                {/* First set with staggered entrance */}
                                {benefits.map((benefit, idx) => (
                                    <motion.div
                                        key={`first-${idx}`}
                                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.4 + (idx * 0.1),
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        whileHover={{
                                            y: -8,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 w-80 flex-shrink-0 cursor-pointer"
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 rounded-2xl transition-all duration-300"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                        />
                                        <div className="relative">
                                            <motion.div
                                                className="w-14 h-14 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                                                whileHover={{
                                                    scale: 1.1,
                                                    rotate: 5,
                                                    transition: { duration: 0.2 }
                                                }}
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + (idx * 0.1), type: "spring" }}
                                            >
                                                {React.createElement(benefit.icon, { className: "text-white text-2xl" })}
                                            </motion.div>

                                            <motion.h4
                                                className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.6 + (idx * 0.1) }}
                                            >
                                                {benefit.title}
                                            </motion.h4>

                                            <motion.p
                                                className="text-gray-600 dark:text-gray-400 text-sm"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.7 + (idx * 0.1) }}
                                            >
                                                {benefit.desc}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Duplicate set with same animations */}
                                {benefits.map((benefit, idx) => (
                                    <motion.div
                                        key={`second-${idx}`}
                                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.4 + (idx * 0.1),
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        whileHover={{
                                            y: -8,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 w-80 flex-shrink-0 cursor-pointer"
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 rounded-2xl transition-all duration-300"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                        />
                                        <div className="relative">
                                            <motion.div
                                                className="w-14 h-14 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                                                whileHover={{
                                                    scale: 1.1,
                                                    rotate: 5,
                                                    transition: { duration: 0.2 }
                                                }}
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + (idx * 0.1), type: "spring" }}
                                            >
                                                {React.createElement(benefit.icon, { className: "text-white text-2xl" })}
                                            </motion.div>

                                            <motion.h4
                                                className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.6 + (idx * 0.1) }}
                                            >
                                                {benefit.title}
                                            </motion.h4>

                                            <motion.p
                                                className="text-gray-600 dark:text-gray-400 text-sm"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.7 + (idx * 0.1) }}
                                            >
                                                {benefit.desc}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                

                 


               

               



                





                {/* Quote & CTA - Enhanced */}
               
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-10 text-center border border-gray-100 dark:border-gray-700">
                        <div className="text-5xl text-green-500/20 mb-3 font-serif">"</div>

                        <p className="text-xl md:text-2xl font-serif italic text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            At Pumpa, we don't just develop players — we develop confident individuals for life.
                        </p>

                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-500"></div>
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-500"></div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                            Start Here… Shine Everywhere.
                        </h3>

                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            Begin Your Journey
                            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>



            </div>
        </section>
    );
};

// Add missing icon import
const FaGlobe = (props) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z" /></svg>;

export default DevelopmentPathway;