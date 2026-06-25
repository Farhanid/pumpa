// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//     FaTrophy,
//     FaHeart,
//     FaUsers,
//     FaMedal,
//     FaQuoteLeft,
//     FaQuoteRight,
//     FaStar,
//     FaAward,
//     FaRunning,
//     FaBrain,
//     FaHandHoldingHeart
// } from 'react-icons/fa';
// import BackToTop from '../../components/Reusable/BackToTop';
// import cofounder from '../../assets/yogesh.jpeg';
// import founder from '../../assets/founder.png';
// import mylogo from '../../assets/mylogos.png';

// const About = () => {
//     const fadeInUp = {
//         initial: { opacity: 0, y: 60 },
//         whileInView: { opacity: 1, y: 0 },
//         viewport: { once: true, margin: "-100px" },
//         transition: { duration: 0.6 }
//     };

//     const stats = [
//         { icon: FaTrophy, value: "20+", label: "Years of Excellence", color: "from-amber-500 to-orange-500" },
//         { icon: FaUsers, value: "500+", label: "Happy Players", color: "from-emerald-500 to-green-500" },
//         { icon: FaMedal, value: "68", label: "World Ranking", color: "from-blue-500 to-cyan-500" },
//         { icon: FaAward, value: "2", label: "National Awards", color: "from-purple-500 to-pink-500" }
//     ];

//     const values = [
//         { icon: FaHeart, title: "Passion", description: "Love for squash drives everything we do" },
//         { icon: FaBrain, title: "Growth Mindset", description: "Every setback is an opportunity to learn" },
//         { icon: FaUsers, title: "Community", description: "Supportive environment for all players" },
//         { icon: FaHandHoldingHeart, title: "Well-being", description: "Mental health is our priority" }
//     ];

//     return (
      



//         <>
//             {/* Hero Section - Matching the main content colors */}
//             <section className="relative min-h-[40vh] md:min-h-[50vh] pt-18 flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
//                 {/* Glow Effect */}
//                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                     <div className="absolute w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-3xl animate-pulse dark:bg-emerald-500/5"></div>
//                     <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-75 dark:bg-cyan-500/5"></div>
//                 </div>

//                 {/* Hero Content Overlay */}
//                 <div className="relative z-10 container mx-auto px-4 text-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg dark:bg-gray-800/80 dark:border-gray-700/50"
//                     >
//                         <FaHeart className="text-emerald-500 dark:text-emerald-400 text-sm" />
//                         <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-[0.1em] uppercase">
//                             Our Story
//                         </span>
//                     </motion.div>

//                     <motion.h1
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-4 mt-4"
//                     >
//                         About{' '}
//                         <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent font-display">
//                             Pumpa
//                         </span>
//                     </motion.h1>

//                     <motion.p
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="mx-auto mt-4 sm:mt-5 max-w-2xl px-2 text-sm sm:text-base lg:text-lg italic font-light tracking-wide leading-[1.8] text-gray-600 dark:text-gray-400"
//                     >
//                         “Start Here... Shine Everywhere”
//                     </motion.p>

//                     <motion.div
//                         className="flex items-center justify-center gap-3 sm:gap-4 mt-6"
//                         initial={{ opacity: 0, scaleX: 0 }}
//                         animate={{ scaleX: 1 }}
//                         transition={{ duration: 0.5, delay: 0.4 }}
//                     >
//                         <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-emerald-400/50 dark:to-emerald-400/30" />
//                         <div className="flex gap-1">
//                             {[...Array(3)].map((_, i) => (
//                                 <motion.div
//                                     key={i}
//                                     className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 dark:bg-emerald-400 rounded-full"
//                                     initial={{ scale: 0 }}
//                                     animate={{ scale: 1 }}
//                                     transition={{ delay: 0.5 + (i * 0.1) }}
//                                 />
//                             ))}
//                         </div>
//                         <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-emerald-400/50 dark:to-emerald-400/30" />
//                     </motion.div>
//                 </div>
//             </section>


//             <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
//                 {/* Animated Background Elements */}
//                 <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                     <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
//                     <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl" />
//                 </div>

//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 max-w-7xl relative z-10">
//                     {/* Mission Statement */}
//                     <motion.div
//                         {...fadeInUp}
//                         className="relative mb-12 sm:mb-16 lg:mb-20 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 p-4 sm:p-8 lg:p-12 text-center shadow-2xl"
//                     >
//                         <div className="absolute inset-0 bg-black/10"></div>
//                         <div className="relative z-10">
//                             <FaQuoteLeft className="text-2xl sm:text-3xl lg:text-4xl text-white/30 mx-auto mb-2 sm:mb-3 lg:mb-4" />
//                             <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-snug sm:leading-[1.4] tracking-wide max-w-4xl mx-auto px-1 sm:px-2">
//                                 To help children and adults enjoy squash, build confidence,
//                                 and develop a lifelong love for sport.
//                             </p>
//                             <FaQuoteRight className="text-2xl sm:text-3xl lg:text-4xl text-white/30 mx-auto mt-2 sm:mt-3 lg:mt-4" />
//                         </div>
//                     </motion.div>

//                     {/* Main Content */}
//                     <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
//                         <motion.div
//                             initial={{ opacity: 0, x: -30 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             className="space-y-3 sm:space-y-4 lg:space-y-6"
//                         >
//                             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight sm:leading-[1.1] tracking-tight">
//                                 More Than Just a Game
//                             </h2>
//                             <div className="w-12 sm:w-16 lg:w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>

//                             <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed sm:leading-[1.8] font-light tracking-wide">
//                                 At Pumpa, we believe squash is more than just a game. It teaches discipline,
//                                 resilience, focus, teamwork, and confidence. We also place strong importance
//                                 on mental well-being, creating a positive and supportive environment where
//                                 every player feels safe, motivated, and valued.
//                             </p>

//                             <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed sm:leading-[1.8] font-light tracking-wide">
//                                 We believe every player is unique. Every individual learns differently, grows
//                                 at their own pace, and deserves guidance that brings out their best without
//                                 pressure or comparison.
//                             </p>

//                             <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed sm:leading-[1.8] font-light tracking-wide">
//                                 Our coaching approach focuses on building strong foundations, positive values,
//                                 and a growth mindset. From beginners to competitive athletes, we help players
//                                 improve their skills, fitness, confidence, and character both on and off the court.
//                             </p>

//                             <div className="bg-green-50 dark:bg-green-950/20 rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-6 border-l-4 border-green-500">
//                                 <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200 font-semibold leading-relaxed sm:leading-[1.6] tracking-wide">
//                                     At Pumpa, success is not only measured by trophies, but also by growth,
//                                     effort, sportsmanship, and the love for the game.
//                                 </p>
//                             </div>
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, x: 30 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-4"
//                         >
//                             {stats.map((stat, idx) => {
//                                 const Icon = stat.icon;
//                                 return (
//                                     <motion.div
//                                         key={idx}
//                                         whileHover={{ y: -3 }}
//                                         className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center shadow-lg border border-gray-200/50 dark:border-gray-700/50"
//                                     >
//                                         <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${stat.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg`}>
//                                             <Icon className="text-white text-base sm:text-lg lg:text-2xl" />
//                                         </div>
//                                         <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
//                                             {stat.value}
//                                         </div>
//                                         <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-medium tracking-wide mt-0.5 sm:mt-1">
//                                             {stat.label}
//                                         </div>
//                                     </motion.div>
//                                 );
//                             })}
//                         </motion.div>
//                     </div>

//                     {/* Our Values */}
//                     <div className="mb-12 sm:mb-16 lg:mb-20">
//                         <div className="text-center mb-6 sm:mb-8 lg:mb-12">
//                             <motion.h2
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 sm:mb-3 lg:mb-4 leading-tight sm:leading-[1.1] tracking-tight"
//                             >
//                                 Our Core Values
//                             </motion.h2>

//                             <motion.div
//                                 className="flex items-center justify-center gap-3 sm:gap-4 mb-4 mt-4 sm:mb-6"
//                                 initial={{ opacity: 0, scaleX: 0 }}
//                                 whileInView={{ opacity: 1, scaleX: 1 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.5, delay: 0.4 }}
//                             >
//                                 <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-green-500" />
//                                 <div className="flex gap-1">
//                                     {[...Array(3)].map((_, i) => (
//                                         <motion.div
//                                             key={i}
//                                             className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full"
//                                             initial={{ scale: 0 }}
//                                             whileInView={{ scale: 1 }}
//                                             viewport={{ once: true }}
//                                             transition={{ delay: 0.5 + (i * 0.1) }}
//                                         />
//                                     ))}
//                                 </div>
//                                 <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-green-500" />
//                             </motion.div>
//                         </div>

//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
//                             {values.map((value, idx) => {
//                                 const Icon = value.icon;
//                                 return (
//                                     <motion.div
//                                         key={idx}
//                                         {...fadeInUp}
//                                         whileHover={{ y: -3 }}
//                                         className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 text-center shadow-lg border border-gray-200/50 dark:border-gray-700/50 group"
//                                     >
//                                         <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
//                                             <Icon className="text-white text-lg sm:text-xl lg:text-2xl" />
//                                         </div>
//                                         <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 tracking-wide">
//                                             {value.title}
//                                         </h3>
//                                         <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light tracking-wide leading-relaxed">
//                                             {value.description}
//                                         </p>
//                                     </motion.div>
//                                 );
//                             })}
//                         </div>
//                     </div>

//                     {/* Founder Section */}
//                     <div className="mb-12 sm:mb-16 lg:mb-20">
//                         <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
//                             <motion.div
//                                 initial={{ opacity: 0, x: -30 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 viewport={{ once: true }}
//                                 className="order-2 lg:order-1"
//                             >
//                                 <div className="inline-flex items-center gap-2 rounded-full border border-green-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4">
//                                     <FaStar className="text-green-600 text-[10px] sm:text-xs" />
//                                     <span className="text-[10px] lg:text-xs font-semibold tracking-[0.1em] uppercase text-gray-700 dark:text-gray-300">
//                                         Founder
//                                     </span>
//                                 </div>

//                                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 sm:mb-3 lg:mb-4 leading-tight sm:leading-[1.1] tracking-tight">
//                                     Coach Pushppa Devi
//                                 </h2>

//                                 <div className="w-12 sm:w-16 lg:w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-3 sm:mb-4 lg:mb-6"></div>

//                                 <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-gray-600 dark:text-gray-300">
//                                     <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
//                                         Former Malaysian professional squash player, former World Top 68,
//                                         and a WSF Level 3 Certified Coach.
//                                     </p>
//                                     <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
//                                         With over two decades in squash, Coach Pushppa has dedicated her journey
//                                         to developing not only better players, but stronger and more confident individuals.
//                                     </p>
//                                     <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
//                                         Her coaching philosophy focuses on discipline, resilience, mental strength,
//                                         and creating a positive environment where every player can grow at their own pace.
//                                     </p>
//                                 </div>

//                                 <div className="mt-4 sm:mt-5 lg:mt-6 flex flex-wrap gap-1.5 sm:gap-2 lg:gap-3">
//                                     <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg sm:rounded-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 border border-amber-200/50 dark:border-amber-800/30">
//                                         <FaAward className="text-amber-600 inline mr-1 text-xs sm:text-sm" />
//                                         <span className="text-[12px] lg:text-sm text-gray-700 dark:text-gray-300 font-medium tracking-wide">
//                                             Malaysian Influential Educator Award 2023
//                                         </span>
//                                     </div>
//                                     <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg sm:rounded-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 border border-amber-200/50 dark:border-amber-800/30">
//                                         <FaAward className="text-amber-600 inline mr-1 text-xs sm:text-sm" />
//                                         <span className="text-[12px] lg:text-sm text-gray-700 dark:text-gray-300 font-medium tracking-wide">
//                                             Top 50 Malaysian Influential Educators 2024
//                                         </span>
//                                     </div>
//                                 </div>

//                                 <div className="mt-4 sm:mt-6 lg:mt-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border-l-4 border-green-500">
//                                     <FaQuoteLeft className="text-green-600/30 text-lg sm:text-xl lg:text-2xl mb-1.5 sm:mb-2" />
//                                     <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200 font-semibold italic leading-relaxed sm:leading-[1.6] tracking-wide">
//                                         I don't just build better players. I build stronger people.
//                                     </p>
//                                     <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1.5 sm:mt-2 font-light tracking-wide">
//                                         -- Coach Pushppa Devi
//                                     </p>
//                                 </div>
//                             </motion.div>

//                             {/* Founder Image */}
//                             <motion.div
//                                 initial={{ opacity: 0, x: 30 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 viewport={{ once: true }}
//                                 className="order-1 lg:order-2 flex justify-center"
//                             >
//                                 <div className="w-48 h-64 sm:w-64 sm:h-80 lg:w-80 lg:h-[420px] xl:w-96 xl:h-[480px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
//                                     <img
//                                         src={founder}
//                                         alt="Coach Pushppa Devi"
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                             </motion.div>
//                         </div>
//                     </div>

//                     {/* Co-Founder Section */}
//                     <div className="mb-12 sm:mb-16 lg:mb-20">
//                         <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
//                             <motion.div
//                                 initial={{ opacity: 0, x: -30 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 viewport={{ once: true }}
//                                 className="order-2 lg:order-1 flex justify-center"
//                             >
//                                 <div className="w-48 h-64 sm:w-64 sm:h-80 lg:w-80 lg:h-[420px] xl:w-96 xl:h-[480px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
//                                     <img
//                                         src={cofounder}
//                                         alt="Coach Yogeswaran"
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                             </motion.div>

//                             <motion.div
//                                 initial={{ opacity: 0, x: 30 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 viewport={{ once: true }}
//                                 className="order-1 lg:order-2"
//                             >
//                                 <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4">
//                                     <FaStar className="text-blue-600 text-[10px] sm:text-xs" />
//                                     <span className="text-[10px] lg:text-xs font-semibold tracking-[0.1em] uppercase text-gray-700 dark:text-gray-300">
//                                         Co-Founder and Head Coach
//                                     </span>
//                                 </div>

//                                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 sm:mb-3 lg:mb-4 leading-tight sm:leading-[1.1] tracking-tight">
//                                     Yogeswaran
//                                 </h2>

//                                 <div className="w-12 sm:w-16 lg:w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-3 sm:mb-4 lg:mb-6"></div>

//                                 <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-gray-600 dark:text-gray-300">
//                                     <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
//                                         Co-Founder and Head Coach of Pumpa Squash Academy with over 22 years
//                                         of coaching experience in squash.
//                                     </p>
//                                     <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
//                                         As a former high-level player who competed in Malaysia Games (SUKMA),
//                                         he brings valuable competitive experience and knowledge to his coaching journey.
//                                     </p>
//                                     <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
//                                         WSF Certified Coach, he specialises in grassroots development programs
//                                         and has developed numerous junior top 8 ranked players as well as social
//                                         and recreational players.
//                                     </p>
//                                     <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
//                                         He was also appointed as the State Coach for Junior High Performance by
//                                         Majlis Sukan Negeri Selangor in the year 2013.
//                                     </p>
//                                     <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
//                                         He is passionate about nurturing young athletes through professional coaching,
//                                         discipline, and mentorship while creating a positive environment for players
//                                         to grow both on and off the court.
//                                     </p>
//                                 </div>
//                             </motion.div>
//                         </div>
//                     </div>

//                     {/* CTA Section */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 p-4 sm:p-8 lg:p-12 text-center shadow-2xl"
//                     >
//                         <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>

//                         <div className="relative z-10">
//                             <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 lg:mb-4 leading-tight sm:leading-[1.1] tracking-tight">
//                                 Ready to Start Your Journey?
//                             </h3>
//                             <p className="text-sm sm:text-base lg:text-xl text-green-100 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto font-light tracking-wide leading-relaxed sm:leading-[1.8]">
//                                 Join Pumpa Squash Academy today and discover the champion within you
//                             </p>
//                             <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center">
//                                 <a
//                                     href="/contact"
//                                     className="group inline-flex items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-white text-green-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base tracking-wide"
//                                 >
//                                     Get Started Today
//                                     <FaRunning className="group-hover:translate-x-1 transition-transform text-sm sm:text-base" />
//                                 </a>
//                                 <a
//                                     href="/programs"
//                                     className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base tracking-wide"
//                                 >
//                                     View Our Programs
//                                 </a>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>

//                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 dark:via-green-500/30 to-transparent" />
//             </section>

           
//         </>
//     );
// };

// export default About;








import React from 'react';
import { motion } from 'framer-motion';
import {
    FaTrophy,
    FaHeart,
    FaUsers,
    FaMedal,
    FaQuoteLeft,
    FaQuoteRight,
    FaStar,
    FaAward,
    FaRunning,
    FaBrain,
    FaHandHoldingHeart
} from 'react-icons/fa';
import BackToTop from '../../components/Reusable/BackToTop';
import cofounder from '../../assets/yogesh.jpeg';
import founder from '../../assets/founder.png';
import mylogo from '../../assets/mylogos.png';

const About = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6 }
    };

    const stats = [
        { icon: FaTrophy, value: "20+", label: "Years of Excellence", color: "from-amber-500 to-orange-500" },
        { icon: FaUsers, value: "500+", label: "Happy Players", color: "from-emerald-500 to-green-500" },
        { icon: FaMedal, value: "68", label: "World Ranking", color: "from-blue-500 to-cyan-500" },
        { icon: FaAward, value: "2", label: "National Awards", color: "from-purple-500 to-pink-500" }
    ];

    const values = [
        { icon: FaHeart, title: "Passion", description: "Love for squash drives everything we do" },
        { icon: FaBrain, title: "Growth Mindset", description: "Every setback is an opportunity to learn" },
        { icon: FaUsers, title: "Community", description: "Supportive environment for all players" },
        { icon: FaHandHoldingHeart, title: "Well-being", description: "Mental health is our priority" }
    ];

    return (
        <>
            <BackToTop threshold={300} position="bottom-8 right-8" />

            {/* Hero Section - Matching Programs Page Structure */}
            <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute left-0 top-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-emerald-500/10 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-72 w-72 sm:h-[30rem] sm:w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" />
                </div>

                <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl px-4 sm:px-5 py-2 shadow-lg dark:shadow-none"
                        >
                            <FaHeart className="text-emerald-500 text-sm" />
                            <span className="text-[11px] sm:text-sm font-semibold tracking-[0.15em] uppercase text-gray-700 dark:text-gray-300">
                                Our Story
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-5 sm:mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white"
                        >
                            About{' '}
                            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent font-display">
                                Pumpa
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mx-auto mt-4 sm:mt-5 max-w-2xl px-2 text-sm sm:text-base lg:text-lg italic font-light tracking-wide leading-[1.8] text-gray-600 dark:text-gray-400"
                        >
                            “Start Here... Shine Everywhere”
                        </motion.p>

                        {/* Decorative Dots */}
                        <motion.div
                            className="flex items-center justify-center gap-3 sm:gap-4 mt-6"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-emerald-400/50 dark:to-emerald-400/30" />
                            <div className="flex gap-1">
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 dark:bg-emerald-400 rounded-full"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.5 + (i * 0.1) }}
                                    />
                                ))}
                            </div>
                            <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-emerald-400/50 dark:to-emerald-400/30" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content Section - Matching Programs Page Structure */}
            <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute left-0 top-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-green-500/10 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-72 w-72 sm:h-[30rem] sm:w-[30rem] rounded-full bg-emerald-500/10 blur-3xl" />
                </div>

                <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Mission Statement */}
                    <motion.div
                        {...fadeInUp}
                        className="relative mb-12 sm:mb-16 lg:mb-20 overflow-hidden rounded-[28px] sm:rounded-[32px] bg-gradient-to-r from-green-600 to-emerald-600 p-6 sm:p-8 lg:p-12 text-center shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10">
                            <FaQuoteLeft className="text-2xl sm:text-3xl lg:text-4xl text-white/30 mx-auto mb-2 sm:mb-3 lg:mb-4" />
                            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-snug sm:leading-[1.4] tracking-wide max-w-4xl mx-auto px-1 sm:px-2">
                                To help children and adults enjoy squash, build confidence,
                                and develop a lifelong love for sport.
                            </p>
                            <FaQuoteRight className="text-2xl sm:text-3xl lg:text-4xl text-white/30 mx-auto mt-2 sm:mt-3 lg:mt-4" />
                        </div>
                    </motion.div>

                    {/* Main Content - More Than Just a Game */}
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-3 sm:space-y-4 lg:space-y-6"
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight sm:leading-[1.1] tracking-tight">
                                More Than Just a Game
                            </h2>
                            <div className="w-12 sm:w-16 lg:w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>

                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed sm:leading-[1.8] font-light tracking-wide">
                                At Pumpa, we believe squash is more than just a game. It teaches discipline,
                                resilience, focus, teamwork, and confidence. We also place strong importance
                                on mental well-being, creating a positive and supportive environment where
                                every player feels safe, motivated, and valued.
                            </p>

                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed sm:leading-[1.8] font-light tracking-wide">
                                We believe every player is unique. Every individual learns differently, grows
                                at their own pace, and deserves guidance that brings out their best without
                                pressure or comparison.
                            </p>

                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed sm:leading-[1.8] font-light tracking-wide">
                                Our coaching approach focuses on building strong foundations, positive values,
                                and a growth mindset. From beginners to competitive athletes, we help players
                                improve their skills, fitness, confidence, and character both on and off the court.
                            </p>

                            <div className="bg-green-50 dark:bg-green-950/20 rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-6 border-l-4 border-green-500">
                                <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200 font-semibold leading-relaxed sm:leading-[1.6] tracking-wide">
                                    At Pumpa, success is not only measured by trophies, but also by growth,
                                    effort, sportsmanship, and the love for the game.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-4"
                        >
                            {stats.map((stat, idx) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -3 }}
                                        className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                                    >
                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${stat.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg`}>
                                            <Icon className="text-white text-base sm:text-lg lg:text-2xl" />
                                        </div>
                                        <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                                            {stat.value}
                                        </div>
                                        <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-medium tracking-wide mt-0.5 sm:mt-1">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Our Values */}
                    <div className="mb-12 sm:mb-16 lg:mb-20">
                        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 sm:mb-3 lg:mb-4 leading-tight sm:leading-[1.1] tracking-tight"
                            >
                                Our Core Values
                            </motion.h2>

                            <motion.div
                                className="flex items-center justify-center gap-3 sm:gap-4 mb-4 mt-4 sm:mb-6"
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
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                            {values.map((value, idx) => {
                                const Icon = value.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        {...fadeInUp}
                                        whileHover={{ y: -3 }}
                                        className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 text-center shadow-lg border border-gray-200/50 dark:border-gray-700/50 group"
                                    >
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="text-white text-lg sm:text-xl lg:text-2xl" />
                                        </div>
                                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 tracking-wide">
                                            {value.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light tracking-wide leading-relaxed">
                                            {value.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Founder Section */}
                    <div className="mb-12 sm:mb-16 lg:mb-20">
                        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-2 lg:order-1"
                            >
                                <div className="inline-flex items-center gap-2 rounded-full border border-green-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4">
                                    <FaStar className="text-green-600 text-[10px] sm:text-xs" />
                                    <span className="text-[10px] lg:text-xs font-semibold tracking-[0.1em] uppercase text-gray-700 dark:text-gray-300">
                                        Founder
                                    </span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 sm:mb-3 lg:mb-4 leading-tight sm:leading-[1.1] tracking-tight">
                                    Coach Pushppa Devi
                                </h2>

                                <div className="w-12 sm:w-16 lg:w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-3 sm:mb-4 lg:mb-6"></div>

                                <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-gray-600 dark:text-gray-300">
                                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
                                        Former Malaysian professional squash player, former World Top 68,
                                        and a WSF Level 3 Certified Coach.
                                    </p>
                                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
                                        With over two decades in squash, Coach Pushppa has dedicated her journey
                                        to developing not only better players, but stronger and more confident individuals.
                                    </p>
                                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
                                        Her coaching philosophy focuses on discipline, resilience, mental strength,
                                        and creating a positive environment where every player can grow at their own pace.
                                    </p>
                                </div>

                                <div className="mt-4 sm:mt-5 lg:mt-6 flex flex-wrap gap-1.5 sm:gap-2 lg:gap-3">
                                    <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg sm:rounded-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 border border-amber-200/50 dark:border-amber-800/30">
                                        <FaAward className="text-amber-600 inline mr-1 text-xs sm:text-sm" />
                                        <span className="text-[12px] lg:text-sm text-gray-700 dark:text-gray-300 font-medium tracking-wide">
                                            Malaysian Influential Educator Award 2023
                                        </span>
                                    </div>
                                    <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg sm:rounded-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 border border-amber-200/50 dark:border-amber-800/30">
                                        <FaAward className="text-amber-600 inline mr-1 text-xs sm:text-sm" />
                                        <span className="text-[12px] lg:text-sm text-gray-700 dark:text-gray-300 font-medium tracking-wide">
                                            Top 50 Malaysian Influential Educators 2024
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-4 sm:mt-6 lg:mt-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border-l-4 border-green-500">
                                    <FaQuoteLeft className="text-green-600/30 text-lg sm:text-xl lg:text-2xl mb-1.5 sm:mb-2" />
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200 font-semibold italic leading-relaxed sm:leading-[1.6] tracking-wide">
                                        I don't just build better players. I build stronger people.
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1.5 sm:mt-2 font-light tracking-wide">
                                        -- Coach Pushppa Devi
                                    </p>
                                </div>
                            </motion.div>

                            {/* Founder Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-1 lg:order-2 flex justify-center"
                            >
                                <div className="w-48 h-64 sm:w-64 sm:h-80 lg:w-80 lg:h-[420px] xl:w-96 xl:h-[480px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src={founder}
                                        alt="Coach Pushppa Devi"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Co-Founder Section */}
                    <div className="mb-12 sm:mb-16 lg:mb-20">
                        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-2 lg:order-1 flex justify-center"
                            >
                                <div className="w-48 h-64 sm:w-64 sm:h-80 lg:w-80 lg:h-[420px] xl:w-96 xl:h-[480px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src={cofounder}
                                        alt="Coach Yogeswaran"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-1 lg:order-2"
                            >
                                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4">
                                    <FaStar className="text-blue-600 text-[10px] sm:text-xs" />
                                    <span className="text-[10px] lg:text-xs font-semibold tracking-[0.1em] uppercase text-gray-700 dark:text-gray-300">
                                        Co-Founder and Head Coach
                                    </span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 sm:mb-3 lg:mb-4 leading-tight sm:leading-[1.1] tracking-tight">
                                    Yogeswaran
                                </h2>

                                <div className="w-12 sm:w-16 lg:w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-3 sm:mb-4 lg:mb-6"></div>

                                <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-gray-600 dark:text-gray-300">
                                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
                                        Co-Founder and Head Coach of Pumpa Squash Academy with over 22 years
                                        of coaching experience in squash.
                                    </p>
                                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
                                        As a former high-level player who competed in Malaysia Games (SUKMA),
                                        he brings valuable competitive experience and knowledge to his coaching journey.
                                    </p>
                                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
                                        WSF Certified Coach, he specialises in grassroots development programs
                                        and has developed numerous junior top 8 ranked players as well as social
                                        and recreational players.
                                    </p>
                                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
                                        He was also appointed as the State Coach for Junior High Performance by
                                        Majlis Sukan Negeri Selangor in the year 2013.
                                    </p>
                                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
                                        He is passionate about nurturing young athletes through professional coaching,
                                        discipline, and mentorship while creating a positive environment for players
                                        to grow both on and off the court.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* CTA Section - Matching Programs Page */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-gray-200 dark:border-white/10 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-3xl p-6 sm:p-10 lg:p-16 text-center shadow-2xl"
                    >
                        <div className="relative z-10">
                            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
                                Ready to Start Your Journey?
                            </h3>
                            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg leading-[1.8] font-light tracking-wide text-gray-600 dark:text-gray-300">
                                Join Pumpa Squash Academy today and discover the champion within you
                            </p>

                            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="/contact"
                                    className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gray-900 dark:bg-white px-8 py-4 text-sm sm:text-base font-semibold text-white dark:text-black tracking-wide transition-all duration-300 hover:scale-105"
                                >
                                    Get Started Today
                                    <FaRunning className="transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                                <a
                                    href="/programs"
                                    className="w-full sm:w-auto rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-8 py-4 text-sm sm:text-base font-semibold text-gray-800 dark:text-white tracking-wide transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10"
                                >
                                    View Our Programs
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default About;



















  // <>
        //     {/* Hero Section - No Image, Just Gradient Background */}
        
        //     <section className="relative min-h-[40vh] md:min-h-[50vh] pt-18 flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
        //         {/* Glow Effect */}
        //         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        //             <div className="absolute w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-3xl animate-pulse dark:bg-emerald-500/5"></div>
        //             <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-75 dark:bg-cyan-500/5"></div>
        //         </div>

        //         {/* Hero Content Overlay */}
        //         <div className="relative z-10 container mx-auto px-4 text-center">
        //             <motion.div
        //                 initial={{ opacity: 0, y: 30 }}
        //                 animate={{ opacity: 1, y: 0 }}
        //                 transition={{ duration: 0.6 }}
        //                 className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg dark:bg-gray-800/80 dark:border-gray-700/50"
        //             >
        //                 <FaHeart className="text-emerald-500 dark:text-emerald-400 text-sm" />
        //                 <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-[0.1em] uppercase">
        //                     Our Story
        //                 </span>
        //             </motion.div>

        //             <motion.h1
        //                 initial={{ opacity: 0, y: 20 }}
        //                 animate={{ opacity: 1, y: 0 }}
        //                 transition={{ duration: 0.6, delay: 0.1 }}
        //                 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-4 mt-4"
        //             >
        //                 About{' '}
        //                 <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent font-display">
        //                     Pumpa
        //                 </span>
        //             </motion.h1>

        //             <motion.p
        //                                        initial={{ opacity: 0, y: 10 }}
        //                                        whileInView={{ opacity: 1, y: 0 }}
        //                                        viewport={{ once: true }}
        //                                        className="mx-auto mt-4 sm:mt-5 max-w-2xl px-2 text-sm sm:text-base lg:text-lg italic font-light tracking-wide leading-[1.8] text-gray-600 dark:text-gray-400"
        //                                    >
        //                                        “Start Here... Shine Everywhere”
        //                                    </motion.p>

        //             <motion.div
        //                 className="flex items-center justify-center gap-3 sm:gap-4 mt-6"
        //                 initial={{ opacity: 0, scaleX: 0 }}
        //                 animate={{ scaleX: 1 }}
        //                 transition={{ duration: 0.5, delay: 0.4 }}
        //             >
        //                 <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-emerald-400/50 dark:to-emerald-400/30" />
        //                 <div className="flex gap-1">
        //                     {[...Array(3)].map((_, i) => (
        //                         <motion.div
        //                             key={i}
        //                             className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 dark:bg-emerald-400 rounded-full"
        //                             initial={{ scale: 0 }}
        //                             animate={{ scale: 1 }}
        //                             transition={{ delay: 0.5 + (i * 0.1) }}
        //                         />
        //                     ))}
        //                 </div>
        //                 <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-emerald-400/50 dark:to-emerald-400/30" />
        //             </motion.div>
        //         </div>
        //     </section>


              
           





        //     {/* Main Content Section */}
        //     <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
        //         {/* Animated Background Elements */}
        //         <div className="absolute inset-0 overflow-hidden pointer-events-none">
        //             <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        //             <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        //             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl" />
        //         </div>

        //         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 max-w-7xl relative z-10">
        //             {/* Mission Statement */}
        //             <motion.div
        //                 {...fadeInUp}
        //                 className="relative mb-12 sm:mb-16 lg:mb-20 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 p-4 sm:p-8 lg:p-12 text-center shadow-2xl"
        //             >
        //                 <div className="absolute inset-0 bg-black/10"></div>
        //                 <div className="relative z-10">
        //                     <FaQuoteLeft className="text-2xl sm:text-3xl lg:text-4xl text-white/30 mx-auto mb-2 sm:mb-3 lg:mb-4" />
        //                     <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-snug sm:leading-[1.4] tracking-wide max-w-4xl mx-auto px-1 sm:px-2">
        //                         To help children and adults enjoy squash, build confidence,
        //                         and develop a lifelong love for sport.
        //                     </p>
        //                     <FaQuoteRight className="text-2xl sm:text-3xl lg:text-4xl text-white/30 mx-auto mt-2 sm:mt-3 lg:mt-4" />
        //                 </div>
        //             </motion.div>

        //             {/* Main Content */}
        //             <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
        //                 <motion.div
        //                     initial={{ opacity: 0, x: -30 }}
        //                     whileInView={{ opacity: 1, x: 0 }}
        //                     viewport={{ once: true }}
        //                     className="space-y-3 sm:space-y-4 lg:space-y-6"
        //                 >
        //                     <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight sm:leading-[1.1] tracking-tight">
        //                         More Than Just a Game
        //                     </h2>
        //                     <div className="w-12 sm:w-16 lg:w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>

        //                     <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed sm:leading-[1.8] font-light tracking-wide">
        //                         At Pumpa, we believe squash is more than just a game. It teaches discipline,
        //                         resilience, focus, teamwork, and confidence. We also place strong importance
        //                         on mental well-being, creating a positive and supportive environment where
        //                         every player feels safe, motivated, and valued.
        //                     </p>

        //                     <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed sm:leading-[1.8] font-light tracking-wide">
        //                         We believe every player is unique. Every individual learns differently, grows
        //                         at their own pace, and deserves guidance that brings out their best without
        //                         pressure or comparison.
        //                     </p>

        //                     <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed sm:leading-[1.8] font-light tracking-wide">
        //                         Our coaching approach focuses on building strong foundations, positive values,
        //                         and a growth mindset. From beginners to competitive athletes, we help players
        //                         improve their skills, fitness, confidence, and character both on and off the court.
        //                     </p>

        //                     <div className="bg-green-50 dark:bg-green-950/20 rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-6 border-l-4 border-green-500">
        //                         <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200 font-semibold leading-relaxed sm:leading-[1.6] tracking-wide">
        //                             At Pumpa, success is not only measured by trophies, but also by growth,
        //                             effort, sportsmanship, and the love for the game.
        //                         </p>
        //                     </div>
        //                 </motion.div>

        //                 <motion.div
        //                     initial={{ opacity: 0, x: 30 }}
        //                     whileInView={{ opacity: 1, x: 0 }}
        //                     viewport={{ once: true }}
        //                     className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-4"
        //                 >
        //                     {stats.map((stat, idx) => {
        //                         const Icon = stat.icon;
        //                         return (
        //                             <motion.div
        //                                 key={idx}
        //                                 whileHover={{ y: -3 }}
        //                                 className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center shadow-lg border border-gray-200/50 dark:border-gray-700/50"
        //                             >
        //                                 <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${stat.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg`}>
        //                                     <Icon className="text-white text-base sm:text-lg lg:text-2xl" />
        //                                 </div>
        //                                 <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
        //                                     {stat.value}
        //                                 </div>
        //                                 <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-medium tracking-wide mt-0.5 sm:mt-1">
        //                                     {stat.label}
        //                                 </div>
        //                             </motion.div>
        //                         );
        //                     })}
        //                 </motion.div>
        //             </div>

        //             {/* Our Values */}
        //             <div className="mb-12 sm:mb-16 lg:mb-20">
        //                 <div className="text-center mb-6 sm:mb-8 lg:mb-12">
        //                     <motion.h2
        //                         initial={{ opacity: 0, y: 20 }}
        //                         whileInView={{ opacity: 1, y: 0 }}
        //                         viewport={{ once: true }}
        //                         className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 sm:mb-3 lg:mb-4 leading-tight sm:leading-[1.1] tracking-tight"
        //                     >
        //                         Our Core Values
        //                     </motion.h2>

        //                     <motion.div
        //                         className="flex items-center justify-center gap-3 sm:gap-4 mb-4 mt-4 sm:mb-6"
        //                         initial={{ opacity: 0, scaleX: 0 }}
        //                         whileInView={{ opacity: 1, scaleX: 1 }}
        //                         viewport={{ once: true }}
        //                         transition={{ duration: 0.5, delay: 0.4 }}
        //                     >
        //                         <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-green-500" />
        //                         <div className="flex gap-1">
        //                             {[...Array(3)].map((_, i) => (
        //                                 <motion.div
        //                                     key={i}
        //                                     className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full"
        //                                     initial={{ scale: 0 }}
        //                                     whileInView={{ scale: 1 }}
        //                                     viewport={{ once: true }}
        //                                     transition={{ delay: 0.5 + (i * 0.1) }}
        //                                 />
        //                             ))}
        //                         </div>
        //                         <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-green-500" />
        //                     </motion.div>
        //                 </div>

        //                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        //                     {values.map((value, idx) => {
        //                         const Icon = value.icon;
        //                         return (
        //                             <motion.div
        //                                 key={idx}
        //                                 {...fadeInUp}
        //                                 whileHover={{ y: -3 }}
        //                                 className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 text-center shadow-lg border border-gray-200/50 dark:border-gray-700/50 group"
        //                             >
        //                                 <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
        //                                     <Icon className="text-white text-lg sm:text-xl lg:text-2xl" />
        //                                 </div>
        //                                 <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 tracking-wide">
        //                                     {value.title}
        //                                 </h3>
        //                                 <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light tracking-wide leading-relaxed">
        //                                     {value.description}
        //                                 </p>
        //                             </motion.div>
        //                         );
        //                     })}
        //                 </div>
        //             </div>

        //             {/* Founder Section */}
        //             <div className="mb-12 sm:mb-16 lg:mb-20">
        //                 <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        //                     <motion.div
        //                         initial={{ opacity: 0, x: -30 }}
        //                         whileInView={{ opacity: 1, x: 0 }}
        //                         viewport={{ once: true }}
        //                         className="order-2 lg:order-1"
        //                     >
        //                         <div className="inline-flex items-center gap-2 rounded-full border border-green-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4">
        //                             <FaStar className="text-green-600 text-[10px] sm:text-xs" />
        //                             <span className="text-[10px] lg:text-xs font-semibold tracking-[0.1em] uppercase text-gray-700 dark:text-gray-300">
        //                                 Founder
        //                             </span>
        //                         </div>

        //                         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 sm:mb-3 lg:mb-4 leading-tight sm:leading-[1.1] tracking-tight">
        //                             Coach Pushppa Devi
        //                         </h2>

        //                         <div className="w-12 sm:w-16 lg:w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-3 sm:mb-4 lg:mb-6"></div>

        //                         <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-gray-600 dark:text-gray-300">
        //                             <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
        //                                 Former Malaysian professional squash player, former World Top 68,
        //                                 and a WSF Level 3 Certified Coach.
        //                             </p>
        //                             <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
        //                                 With over two decades in squash, Coach Pushppa has dedicated her journey
        //                                 to developing not only better players, but stronger and more confident individuals.
        //                             </p>
        //                             <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
        //                                 Her coaching philosophy focuses on discipline, resilience, mental strength,
        //                                 and creating a positive environment where every player can grow at their own pace.
        //                             </p>
        //                         </div>

        //                         <div className="mt-4 sm:mt-5 lg:mt-6 flex flex-wrap gap-1.5 sm:gap-2 lg:gap-3">
        //                             <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg sm:rounded-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 border border-amber-200/50 dark:border-amber-800/30">
        //                                 <FaAward className="text-amber-600 inline mr-1 text-xs sm:text-sm" />
        //                                 <span className="text-[12px] lg:text-sm text-gray-700 dark:text-gray-300 font-medium tracking-wide">
        //                                     Malaysian Influential Educator Award 2023
        //                                 </span>
        //                             </div>
        //                             <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg sm:rounded-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 border border-amber-200/50 dark:border-amber-800/30">
        //                                 <FaAward className="text-amber-600 inline mr-1 text-xs sm:text-sm" />
        //                                 <span className="text-[12px] lg:text-sm text-gray-700 dark:text-gray-300 font-medium tracking-wide">
        //                                     Top 50 Malaysian Influential Educators 2024
        //                                 </span>
        //                             </div>
        //                         </div>

        //                         <div className="mt-4 sm:mt-6 lg:mt-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border-l-4 border-green-500">
        //                             <FaQuoteLeft className="text-green-600/30 text-lg sm:text-xl lg:text-2xl mb-1.5 sm:mb-2" />
        //                             <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200 font-semibold italic leading-relaxed sm:leading-[1.6] tracking-wide">
        //                                 I don't just build better players. I build stronger people.
        //                             </p>
        //                             <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1.5 sm:mt-2 font-light tracking-wide">
        //                                 -- Coach Pushppa Devi
        //                             </p>
        //                         </div>
        //                     </motion.div>

        //                     {/* Founder Image */}
        //                     <motion.div
        //                         initial={{ opacity: 0, x: 30 }}
        //                         whileInView={{ opacity: 1, x: 0 }}
        //                         viewport={{ once: true }}
        //                         className="order-1 lg:order-2 flex justify-center"
        //                     >
        //                         <div className="w-48 h-64 sm:w-64 sm:h-80 lg:w-80 lg:h-[420px] xl:w-96 xl:h-[480px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
        //                             <img
        //                                 src={founder}
        //                                 alt="Coach Pushppa Devi"
        //                                 className="w-full h-full object-cover"
        //                             />
        //                         </div>
        //                     </motion.div>
        //                 </div>
        //             </div>

        //             {/* Co-Founder Section */}
        //             <div className="mb-12 sm:mb-16 lg:mb-20">
        //                 <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        //                     <motion.div
        //                         initial={{ opacity: 0, x: -30 }}
        //                         whileInView={{ opacity: 1, x: 0 }}
        //                         viewport={{ once: true }}
        //                         className="order-2 lg:order-1 flex justify-center"
        //                     >
        //                         <div className="w-48 h-64 sm:w-64 sm:h-80 lg:w-80 lg:h-[420px] xl:w-96 xl:h-[480px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
        //                             <img
        //                                 src={cofounder}
        //                                 alt="Coach Yogeswaran"
        //                                 className="w-full h-full object-cover"
        //                             />
        //                         </div>
        //                     </motion.div>

        //                     <motion.div
        //                         initial={{ opacity: 0, x: 30 }}
        //                         whileInView={{ opacity: 1, x: 0 }}
        //                         viewport={{ once: true }}
        //                         className="order-1 lg:order-2"
        //                     >
        //                         <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4">
        //                             <FaStar className="text-blue-600 text-[10px] sm:text-xs" />
        //                             <span className="text-[10px] lg:text-xs font-semibold tracking-[0.1em] uppercase text-gray-700 dark:text-gray-300">
        //                                 Co-Founder and Head Coach
        //                             </span>
        //                         </div>

        //                         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 sm:mb-3 lg:mb-4 leading-tight sm:leading-[1.1] tracking-tight">
        //                             Yogeswaran
        //                         </h2>

        //                         <div className="w-12 sm:w-16 lg:w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-3 sm:mb-4 lg:mb-6"></div>

        //                         <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-gray-600 dark:text-gray-300">
        //                             <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
        //                                 Co-Founder and Head Coach of Pumpa Squash Academy with over 22 years
        //                                 of coaching experience in squash.
        //                             </p>
        //                             <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
        //                                 As a former high-level player who competed in Malaysia Games (SUKMA),
        //                                 he brings valuable competitive experience and knowledge to his coaching journey.
        //                             </p>
        //                             <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
        //                                 WSF Certified Coach, he specialises in grassroots development programs
        //                                 and has developed numerous junior top 8 ranked players as well as social
        //                                 and recreational players.
        //                             </p>
        //                             <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
        //                                 He was also appointed as the State Coach for Junior High Performance by
        //                                 Majlis Sukan Negeri Selangor in the year 2013.
        //                             </p>
        //                             <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] font-light tracking-wide">
        //                                 He is passionate about nurturing young athletes through professional coaching,
        //                                 discipline, and mentorship while creating a positive environment for players
        //                                 to grow both on and off the court.
        //                             </p>
        //                         </div>
        //                     </motion.div>
        //                 </div>
        //             </div>

        //             {/* CTA Section */}
        //             <motion.div
        //                 initial={{ opacity: 0, y: 30 }}
        //                 whileInView={{ opacity: 1, y: 0 }}
        //                 viewport={{ once: true }}
        //                 className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 p-4 sm:p-8 lg:p-12 text-center shadow-2xl"
        //             >
        //                 <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>

        //                 <div className="relative z-10">
        //                     <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 lg:mb-4 leading-tight sm:leading-[1.1] tracking-tight">
        //                         Ready to Start Your Journey?
        //                     </h3>
        //                     <p className="text-sm sm:text-base lg:text-xl text-green-100 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto font-light tracking-wide leading-relaxed sm:leading-[1.8]">
        //                         Join Pumpa Squash Academy today and discover the champion within you
        //                     </p>
        //                     <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center">
        //                         <a
        //                             href="/contact"
        //                             className="group inline-flex items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-white text-green-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base tracking-wide"
        //                         >
        //                             Get Started Today
        //                             <FaRunning className="group-hover:translate-x-1 transition-transform text-sm sm:text-base" />
        //                         </a>
        //                         <a
        //                             href="/programs"
        //                             className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base tracking-wide"
        //                         >
        //                             View Our Programs
        //                         </a>
        //                     </div>
        //                 </div>
        //             </motion.div>
        //         </div>

        //         <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 dark:via-green-500/30 to-transparent" />
        //     </section>

        //     <BackToTop threshold={300} position="bottom-8 right-8" />
        // </>

