// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//     FaChild,
//     FaUserGraduate,
//     FaTrophy,
//     FaUsers,
//     FaChalkboardTeacher,
//     FaClinicMedical,
//     FaCampground,
//     FaGlobe,
//     FaArrowRight,
//     FaCheckCircle
// } from 'react-icons/fa';

// const Programs = () => {
//     const [activeTab, setActiveTab] = useState(0);

//     const programs = [
//         {
//             id: 1,
//             title: "Kids Beginner Program",
//             icon: <FaChild />,
//             description: "A fun and engaging introduction to squash for young beginners. Players learn basic movement, coordination, racket skills, and confidence through enjoyable activities and structured coaching.",
//             color: "#10b981"
//         },
//         {
//             id: 2,
//             title: "Junior Development",
//             icon: <FaUserGraduate />,
//             description: "Designed for growing players who want to improve their technique, fitness, game understanding, and overall performance in a positive and supportive environment.",
//             color: "#3b82f6"
//         },
//         {
//             id: 3,
//             title: "Competitive Training",
//             icon: <FaTrophy />,
//             description: "High-performance training for tournament players focusing on advanced skills, match play, fitness, mental strength, discipline, and competition preparation.",
//             color: "#8b5cf6"
//         },
//         {
//             id: 4,
//             title: "Adult Squash",
//             icon: <FaUsers />,
//             description: "Whether you are a complete beginner or returning to the sport, our adult sessions focus on fitness, skill development, stress relief, and enjoyment of the game.",
//             color: "#f59e0b"
//         },
//         {
//             id: 5,
//             title: "Private Coaching",
//             icon: <FaChalkboardTeacher />,
//             description: "Personalised one-to-one coaching tailored to each player's goals, level, and learning style to maximise improvement and confidence on court.",
//             color: "#ec4899"
//         },
//         {
//             id: 6,
//             title: "Squash Clinics",
//             icon: <FaClinicMedical />,
//             description: "Specialised clinics focused on specific areas of development such as technique, movement, match strategy, fitness, mental preparation, and player development. Conducted through intensive and engaging training sessions for different age groups and levels.",
//             color: "#ef4444"
//         },
//         {
//             id: 7,
//             title: "Holiday Camps",
//             icon: <FaCampground />,
//             description: "Exciting holiday programs combining squash training, fitness, games, teamwork, and fun activities in an energetic and positive environment for all levels.",
//             color: "#14b8a6"
//         },
//         {
//             id: 8,
//             title: "International Training Camps",
//             icon: <FaGlobe />,
//             description: "Exclusive opportunities for players to experience international-level training, exposure, and cultural exchange through overseas camps, training programs, and competitive experiences designed to broaden development both on and off the court.",
//             color: "#06b6d4"
//         }
//     ];

//     // First 4 programs for tabs
//     const quickPrograms = programs.slice(0, 4);
//     // Remaining 4 programs
//     const otherPrograms = programs.slice(4);

//     return (
//         <section className="py-24 bg-white dark:bg-gray-900">
//             <div className="container mx-auto px-4 max-w-6xl">
//                 {/* Section Header */}
//                 <div className="text-center mb-16">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                     >
//                         <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/30 px-5 py-2 rounded-full mb-6">
//                             <span className="text-green-600 dark:text-green-400 text-sm">🏆</span>
//                             <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Programs</span>
//                         </div>

//                         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//                             Start Here...
//                         </h2>
//                         <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
//                             Shine Everywhere
//                         </h3>

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
//                     </motion.div>
//                 </div>

//                 {/* Tab Navigation */}
//                 <div className="flex flex-wrap justify-center gap-3 mb-12">
//                     {quickPrograms.map((program, idx) => (
//                         <motion.button
//                             key={program.id}
//                             onClick={() => setActiveTab(idx)}
//                             whileHover={{ y: -2 }}
//                             whileTap={{ scale: 0.98 }}
//                             className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === idx
//                                     ? 'text-white shadow-lg'
//                                     : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
//                                 }`}
//                             style={{
//                                 backgroundColor: activeTab === idx ? program.color : undefined
//                             }}
//                         >
//                             <span className="text-lg">{program.icon}</span>
//                             {program.title.split(' ')[0]}
//                         </motion.button>
//                     ))}
//                 </div>

//                 {/* Featured Program Display */}
//                 <AnimatePresence mode="wait">
//                     <motion.div
//                         key={activeTab}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         transition={{ duration: 0.3 }}
//                         className="mb-20"
//                     >
//                         <div
//                             className="rounded-3xl overflow-hidden shadow-xl"
//                             style={{ backgroundColor: quickPrograms[activeTab].color + '10' }}
//                         >
//                             <div className="grid md:grid-cols-2 gap-0">
//                                 {/* Left Side */}
//                                 <div className="p-8 md:p-10">
//                                     <div
//                                         className="inline-flex p-4 rounded-2xl text-white mb-6 shadow-lg"
//                                         style={{ backgroundColor: quickPrograms[activeTab].color }}
//                                     >
//                                         <span className="text-3xl">{quickPrograms[activeTab].icon}</span>
//                                     </div>

//                                     <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//                                         {quickPrograms[activeTab].title}
//                                     </h3>

//                                     <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
//                                         {quickPrograms[activeTab].description}
//                                     </p>
//                                 </div>

//                                 {/* Right Side */}
//                                 <div className="p-8 md:p-10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm flex flex-col justify-between">
//                                     <div>
//                                         <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
//                                             Why Choose This Program?
//                                         </h4>
//                                         <ul className="space-y-3">
//                                             <li className="flex items-center gap-3">
//                                                 <FaCheckCircle style={{ color: quickPrograms[activeTab].color }} />
//                                                 <span className="text-gray-700 dark:text-gray-300">Expert coaches with years of experience</span>
//                                             </li>
//                                             <li className="flex items-center gap-3">
//                                                 <FaCheckCircle style={{ color: quickPrograms[activeTab].color }} />
//                                                 <span className="text-gray-700 dark:text-gray-300">Structured curriculum for steady progress</span>
//                                             </li>
//                                             <li className="flex items-center gap-3">
//                                                 <FaCheckCircle style={{ color: quickPrograms[activeTab].color }} />
//                                                 <span className="text-gray-700 dark:text-gray-300">Supportive and fun learning environment</span>
//                                             </li>
//                                             <li className="flex items-center gap-3">
//                                                 <FaCheckCircle style={{ color: quickPrograms[activeTab].color }} />
//                                                 <span className="text-gray-700 dark:text-gray-300">Individual attention to each player</span>
//                                             </li>
//                                         </ul>
//                                     </div>

//                                     <button
//                                         className="mt-8 px-8 py-3 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full md:w-auto"
//                                         style={{ backgroundColor: quickPrograms[activeTab].color }}
//                                     >
//                                         Enroll Now
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </AnimatePresence>

//                 {/* Other Programs */}
//                 <div className="mt-16">
//                     <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
//                         More Programs
//                     </h3>
//                     <div className="grid md:grid-cols-2 gap-4">
//                         {otherPrograms.map((program) => (
//                             <motion.div
//                                 key={program.id}
//                                 whileHover={{ scale: 1.02 }}
//                                 className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
//                             >
//                                 <div
//                                     className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl"
//                                     style={{ backgroundColor: program.color }}
//                                 >
//                                     {program.icon}
//                                 </div>
//                                 <div className="flex-1">
//                                     <h4 className="font-bold text-gray-900 dark:text-white">{program.title}</h4>
//                                     <p className="text-sm text-gray-500 line-clamp-2">{program.description}</p>
//                                 </div>
//                                 <button
//                                     className="px-4 py-2 rounded-lg text-white text-sm font-semibold whitespace-nowrap"
//                                     style={{ backgroundColor: program.color }}
//                                 >
//                                     Learn More
//                                 </button>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Bottom CTA */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="mt-20"
//                 >
//                     <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 text-white p-10 text-center">
//                         <div className="relative z-10">
//                             <h3 className="text-3xl md:text-4xl font-bold mb-4">
//                                 Start Here... Shine Everywhere
//                             </h3>
//                             <p className="text-green-100 mb-8 max-w-2xl mx-auto">
//                                 Join Pumpa Squash Academy today and begin your squash journey with the best coaches
//                             </p>
//                             <a
//                                 href="/contact"
//                                 className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-green-600 font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//                             >
//                                 Contact Us Today
//                                 <FaArrowRight />
//                             </a>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Programs;


























// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//     FaChild,
//     FaUserGraduate,
//     FaTrophy,
//     FaUsers,
//     FaChalkboardTeacher,
//     FaClinicMedical,
//     FaCampground,
//     FaGlobe,
//     FaArrowRight,
//     FaCheckCircle,
//     FaChevronDown,
//     FaChevronUp
// } from 'react-icons/fa';

// const Programs = () => {
//     const [activeTab, setActiveTab] = useState(0);
//     const [expandedProgram, setExpandedProgram] = useState(null);

//     const programs = [
//         {
//             id: 1,
//             title: "Kids Beginner Program",
//             icon: <FaChild />,
//             description: "A fun and engaging introduction to squash for young beginners. Players learn basic movement, coordination, racket skills, and confidence through enjoyable activities and structured coaching.",
//             color: "#10b981"
//         },
//         {
//             id: 2,
//             title: "Junior Development",
//             icon: <FaUserGraduate />,
//             description: "Designed for growing players who want to improve their technique, fitness, game understanding, and overall performance in a positive and supportive environment.",
//             color: "#3b82f6"
//         },
//         {
//             id: 3,
//             title: "Competitive Training",
//             icon: <FaTrophy />,
//             description: "High-performance training for tournament players focusing on advanced skills, match play, fitness, mental strength, discipline, and competition preparation.",
//             color: "#8b5cf6"
//         },
//         {
//             id: 4,
//             title: "Adult Squash",
//             icon: <FaUsers />,
//             description: "Whether you are a complete beginner or returning to the sport, our adult sessions focus on fitness, skill development, stress relief, and enjoyment of the game.",
//             color: "#f59e0b"
//         },
//         {
//             id: 5,
//             title: "Private Coaching",
//             icon: <FaChalkboardTeacher />,
//             description: "Personalised one-to-one coaching tailored to each player's goals, level, and learning style to maximise improvement and confidence on court.",
//             color: "#ec4899"
//         },
//         {
//             id: 6,
//             title: "Squash Clinics",
//             icon: <FaClinicMedical />,
//             description: "Specialised clinics focused on specific areas of development such as technique, movement, match strategy, fitness, mental preparation, and player development. Conducted through intensive and engaging training sessions for different age groups and levels.",
//             color: "#ef4444"
//         },
//         {
//             id: 7,
//             title: "Holiday Camps",
//             icon: <FaCampground />,
//             description: "Exciting holiday programs combining squash training, fitness, games, teamwork, and fun activities in an energetic and positive environment for all levels.",
//             color: "#14b8a6"
//         },
//         {
//             id: 8,
//             title: "International Training Camps",
//             icon: <FaGlobe />,
//             description: "Exclusive opportunities for players to experience international-level training, exposure, and cultural exchange through overseas camps, training programs, and competitive experiences designed to broaden development both on and off the court.",
//             color: "#06b6d4"
//         }
//     ];

//     // First 4 programs for tabs
//     const quickPrograms = programs.slice(0, 4);
//     // Remaining 4 programs
//     const otherPrograms = programs.slice(4);

//     const toggleExpand = (id) => {
//         setExpandedProgram(expandedProgram === id ? null : id);
//     };

//     return (
//         <section className="py-24 bg-white dark:bg-gray-900">
//             <div className="container mx-auto px-4 max-w-6xl">
//                 {/* Section Header */}
               

//                 <div className="text-center mb-5 md:mb-5">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.5, ease: "easeOut" }}
//                         className="relative"
//                     >
//                         <motion.div
//                             initial={{ scale: 0.8, opacity: 0 }}
//                             whileInView={{ scale: 1, opacity: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.6, delay: 0.1 }}
//                             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-green-500/10 rounded-full blur-2xl"
//                         />

//                         <div className="relative px-4 sm:px-6">
//                             <motion.div
//                                 initial={{ opacity: 0, y: -10, scale: 0.9 }}
//                                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.4, delay: 0.2 }}
//                                 className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 shadow-lg px-4 py-2 sm:px-5 sm:py-2 rounded-full mb-4 md:mb-6"
//                             >
//                                 <FaTrophy className="text-green-600 dark:text-green-400 text-xs sm:text-sm" />
//                                 <span className="text-gray-700 dark:text-gray-300 font-semibold text-xs sm:text-sm">Training Programs</span>
//                             </motion.div>

//                             <motion.h2
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.5, delay: 0.3 }}
//                                 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4"
//                             >
//                                 Our <motion.span
//                                     initial={{ opacity: 0, scale: 0.8 }}
//                                     whileInView={{ opacity: 1, scale: 1 }}
//                                     viewport={{ once: true }}
//                                     transition={{ duration: 0.4, delay: 0.4 }}
//                                     className="text-green-600 dark:text-green-400 inline-block"
//                                 >Programs</motion.span>
//                             </motion.h2>

//                             <motion.p
//                                 initial={{ opacity: 0, y: 10 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.4, delay: 0.5 }}
//                                 className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-serif text-base sm:text-lg md:text-xl italic font-light px-2"
//                             >
//                                 “Start Here... Shine Everywhere”
//                             </motion.p>
//                         </div>
//                     </motion.div>
//                 </div>

//                 {/* Buttons - Appear After Header */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: 0.6 }}
//                     className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-2 sm:px-0"
//                 >
//                     {quickPrograms.map((program, idx) => (
//                         <motion.button
//                             key={program.id}
//                             onClick={() => setActiveTab(idx)}
//                             initial={{ opacity: 0, scale: 0.8, y: 20 }}
//                             animate={{ opacity: 1, scale: 1, y: 0 }}
//                             transition={{
//                                 duration: 0.4,
//                                 delay: 0.7 + (idx * 0.08),
//                                 type: "spring",
//                                 stiffness: 200
//                             }}
//                             whileHover={{ y: -2, scale: 1.02 }}
//                             whileTap={{ scale: 0.98 }}
//                             className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base ${activeTab === idx
//                                     ? 'text-white shadow-lg'
//                                     : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
//                                 }`}
//                             style={{
//                                 backgroundColor: activeTab === idx ? program.color : undefined
//                             }}
//                         >
//                             <motion.span
//                                 className="text-sm sm:text-base md:text-lg"
//                                 whileHover={{ rotate: [0, -10, 10, -5, 5, 0], transition: { duration: 0.4 } }}
//                             >
//                                 {program.icon}
//                             </motion.span>
//                             <span className="whitespace-nowrap">{program.title.split(' ')[0]}</span>
//                         </motion.button>
//                     ))}
//                 </motion.div>



//                 {/* Featured Program Display */}
//                 <AnimatePresence mode="wait">
//                     <motion.div
//                         key={activeTab}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         transition={{ duration: 0.4 }}
//                         className="mb-20"
//                     >
//                         <div
//                             className="rounded-3xl overflow-hidden shadow-xl"
//                             style={{ backgroundColor: quickPrograms[activeTab].color + '10' }}
//                         >
//                             <div className="grid md:grid-cols-2 gap-0">
//                                 {/* Left Side */}
//                                 <div className="p-8 md:p-10">
//                                     <div
//                                         className="inline-flex p-4 rounded-2xl text-white mb-6 shadow-lg"
//                                         style={{ backgroundColor: quickPrograms[activeTab].color }}
//                                     >
//                                         <span className="text-3xl">{quickPrograms[activeTab].icon}</span>
//                                     </div>

//                                     <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//                                         {quickPrograms[activeTab].title}
//                                     </h3>

//                                     <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
//                                         {quickPrograms[activeTab].description}
//                                     </p>
//                                 </div>

//                                 {/* Right Side */}
//                                 <div className="p-8 md:p-10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm flex flex-col justify-between">
//                                     <div>
//                                         <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
//                                             Why Choose This Program?
//                                         </h4>
//                                         <ul className="space-y-3">
//                                             <li className="flex items-center gap-3">
//                                                 <FaCheckCircle style={{ color: quickPrograms[activeTab].color }} />
//                                                 <span className="text-gray-700 dark:text-gray-300">Expert coaches with years of experience</span>
//                                             </li>
//                                             <li className="flex items-center gap-3">
//                                                 <FaCheckCircle style={{ color: quickPrograms[activeTab].color }} />
//                                                 <span className="text-gray-700 dark:text-gray-300">Structured curriculum for steady progress</span>
//                                             </li>
//                                             <li className="flex items-center gap-3">
//                                                 <FaCheckCircle style={{ color: quickPrograms[activeTab].color }} />
//                                                 <span className="text-gray-700 dark:text-gray-300">Supportive and fun learning environment</span>
//                                             </li>
//                                             <li className="flex items-center gap-3">
//                                                 <FaCheckCircle style={{ color: quickPrograms[activeTab].color }} />
//                                                 <span className="text-gray-700 dark:text-gray-300">Individual attention to each player</span>
//                                             </li>
//                                         </ul>
//                                     </div>

//                                     <button
//                                         className="mt-8 px-8 py-3 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full md:w-auto"
//                                         style={{ backgroundColor: quickPrograms[activeTab].color }}
//                                     >
//                                         Enroll Now
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </AnimatePresence>




//                 {/* Other Programs with Read More */}
//                 <div className="mt-16">
//                     <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
//                         More Programs
//                     </h3>
//                     <div className="space-y-4">
//                         {otherPrograms.map((program) => (
//                             <motion.div
//                                 key={program.id}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden"
//                             >
//                                 <div className="p-5">
//                                     <div className="flex items-start gap-4">
//                                         <div
//                                             className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0"
//                                             style={{ backgroundColor: program.color }}
//                                         >
//                                             {program.icon}
//                                         </div>
//                                         <div className="flex-1">
//                                             <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
//                                                 {program.title}
//                                             </h4>
//                                             <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
//                                                 {expandedProgram === program.id
//                                                     ? program.description
//                                                     : program.description.length > 120
//                                                         ? program.description.substring(0, 120) + '...'
//                                                         : program.description}
//                                             </p>
//                                             {program.description.length > 120 && (
//                                                 <button
//                                                     onClick={() => toggleExpand(program.id)}
//                                                     className="inline-flex items-center gap-1 mt-2 text-sm font-semibold transition-colors"
//                                                     style={{ color: program.color }}
//                                                 >
//                                                     {expandedProgram === program.id ? (
//                                                         <>Read Less <FaChevronUp className="text-xs" /></>
//                                                     ) : (
//                                                         <>Read More <FaChevronDown className="text-xs" /></>
//                                                     )}
//                                                 </button>
//                                             )}
//                                         </div>
//                                         <button
//                                             className="px-5 py-2 rounded-lg text-white text-sm font-semibold whitespace-nowrap flex-shrink-0 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
//                                             style={{ backgroundColor: program.color }}
//                                         >
//                                             Enroll Now
//                                         </button>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Bottom CTA */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="mt-20"
//                 >
//                     <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 text-white p-10 text-center">
//                         <div className="relative z-10">
//                             <h3 className="text-3xl md:text-4xl font-bold mb-4">
//                                 Start Here... Shine Everywhere
//                             </h3>
//                             <p className="text-green-100 mb-8 max-w-2xl mx-auto">
//                                 Join Pumpa Squash Academy today and begin your squash journey with the best coaches
//                             </p>
//                             <a
//                                 href="/contact"
//                                 className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-green-600 font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//                             >
//                                 Contact Us Today
//                                 <FaArrowRight />
//                             </a>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Programs;























// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//     FaChild,
//     FaUserGraduate,
//     FaTrophy,
//     FaUsers,
//     FaChalkboardTeacher,
//     FaClinicMedical,
//     FaCampground,
//     FaGlobe,
//     FaArrowRight,
//     FaCheckCircle,
//     FaChevronRight
// } from 'react-icons/fa';
// import BackToTop from '../../components/Reusable/BackToTop';

// const Programs = () => {
//     const [activeTab, setActiveTab] = useState(0);

//     const programs = [
//         {
//             id: 1,
//             title: 'Kids Beginner Program',
//             icon: <FaChild />,
//             description:
//                 'A fun and engaging introduction to squash for young beginners. Players learn basic movement, coordination, racket skills, and confidence through enjoyable activities and structured coaching.',
//             color: 'from-emerald-500 to-green-600',
//             glow: 'shadow-emerald-500/20'
//         },
//         {
//             id: 2,
//             title: 'Junior Development',
//             icon: <FaUserGraduate />,
//             description:
//                 'Designed for growing players who want to improve their technique, fitness, game understanding, and overall performance in a positive and supportive environment.',
//             color: 'from-blue-500 to-cyan-500',
//             glow: 'shadow-cyan-500/20'
//         },
//         {
//             id: 3,
//             title: 'Competitive Training',
//             icon: <FaTrophy />,
//             description:
//                 'High-performance training for tournament players focusing on advanced skills, match play, fitness, mental strength, discipline, and competition preparation.',
//             color: 'from-violet-500 to-fuchsia-500',
//             glow: 'shadow-fuchsia-500/20'
//         },
//         {
//             id: 4,
//             title: 'Adult Squash',
//             icon: <FaUsers />,
//             description:
//                 'Whether you are a complete beginner or returning to the sport, our adult sessions focus on fitness, skill development, stress relief, and enjoyment of the game.',
//             color: 'from-amber-500 to-orange-500',
//             glow: 'shadow-orange-500/20'
//         },
//         {
//             id: 5,
//             title: 'Private Coaching',
//             icon: <FaChalkboardTeacher />,
//             description:
//                 "Personalised one-to-one coaching tailored to each player's goals, level, and learning style to maximise improvement and confidence on court.",
//             color: 'from-pink-500 to-rose-500',
//             glow: 'shadow-pink-500/20'
//         },
//         {
//             id: 6,
//             title: 'Squash Clinics',
//             icon: <FaClinicMedical />,
//             description:
//                 'Specialised clinics focused on specific areas of development such as technique, movement, match strategy, fitness, mental preparation, and player development.',
//             color: 'from-red-500 to-rose-600',
//             glow: 'shadow-red-500/20'
//         },
//         {
//             id: 7,
//             title: 'Holiday Camps',
//             icon: <FaCampground />,
//             description:
//                 'Exciting holiday programs combining squash training, fitness, games, teamwork, and fun activities in an energetic and positive environment for all levels.',
//             color: 'from-teal-500 to-emerald-500',
//             glow: 'shadow-teal-500/20'
//         },
//         {
//             id: 8,
//             title: 'International Training Camps',
//             icon: <FaGlobe />,
//             description:
//                 'Exclusive opportunities for players to experience international-level training, exposure, and cultural exchange through overseas camps and competitive experiences.',
//             color: 'from-cyan-500 to-sky-500',
//             glow: 'shadow-cyan-500/20'
//         }
//     ];

//     return (

//         <>
//         <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-[#030712] transition-colors duration-500">

//             {/* Background Effects */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute left-0 top-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-emerald-500/10 blur-3xl" />
//                 <div className="absolute bottom-0 right-0 h-72 w-72 sm:h-[30rem] sm:w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" />
//             </div>

//             <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//                 {/* Header */}
//                 <div className="text-center">

//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl px-4 sm:px-5 py-2 shadow-lg dark:shadow-none"
//                     >
//                         <FaTrophy className="text-emerald-500 text-sm" />

//                         <span className="text-[11px] sm:text-sm font-semibold tracking-[0.15em] text-gray-700 dark:text-gray-300 uppercase">
//                             Training Programs
//                         </span>
//                     </motion.div>

//                     <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="mt-5 sm:mt-6 text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white"
//                     >
//                         Our{' '}
//                         <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
//                             Programs
//                         </span>
//                     </motion.h2>

//                     <motion.p
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="mx-auto mt-4 sm:mt-5 max-w-2xl px-2 text-sm sm:text-base lg:text-lg italic leading-relaxed text-gray-600 dark:text-gray-400"
//                     >
//                         “Start Here... Shine Everywhere”
//                     </motion.p>
//                 </div>

//                 {/* Tabs */}
//                 <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-3 sm:gap-4">

//                     {programs.slice(0, 4).map((program, idx) => (

//                         <motion.button
//                             key={program.id}
//                             onClick={() => setActiveTab(idx)}
//                             whileHover={{ y: -3, scale: 1.02 }}
//                             whileTap={{ scale: 0.97 }}
//                             className={`
//                                 rounded-2xl border px-4 sm:px-5 py-3
//                                 transition-all duration-300
//                                 min-w-[140px] sm:min-w-[180px]

//                                 ${activeTab === idx
//                                     ? `bg-gradient-to-r ${program.color} text-white border-transparent shadow-2xl ${program.glow}`
//                                     : 'border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10'
//                                 }
//                             `}
//                         >
//                             <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center sm:text-left">
//                                 <span className="text-lg">
//                                     {program.icon}
//                                 </span>

//                                 <span className="font-semibold text-xs sm:text-sm leading-tight">
//                                     {program.title}
//                                 </span>
//                             </div>
//                         </motion.button>
//                     ))}
//                 </div>

//                 {/* Featured Program */}
//                 <AnimatePresence mode="wait">

//                     <motion.div
//                         key={activeTab}
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -30 }}
//                         transition={{ duration: 0.4 }}
//                         className="mt-12 sm:mt-16"
//                     >
//                         <div className="overflow-hidden rounded-[28px] sm:rounded-[32px] border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-2xl shadow-xl dark:shadow-none">

//                             <div className="grid lg:grid-cols-2">

//                                 {/* Left */}
//                                 <div className="relative overflow-hidden p-6 sm:p-8 lg:p-12">

//                                     <div
//                                         className={`absolute right-0 top-0 h-40 w-40 sm:h-52 sm:w-52 rounded-full bg-gradient-to-r ${programs[activeTab].color} opacity-20 blur-3xl`}
//                                     />

//                                     <div
//                                         className={`
//                                             relative mb-6 sm:mb-8 inline-flex
//                                             h-16 w-16 sm:h-20 sm:w-20
//                                             items-center justify-center
//                                             rounded-2xl sm:rounded-3xl
//                                             bg-gradient-to-r ${programs[activeTab].color}
//                                             text-3xl sm:text-4xl text-white
//                                             shadow-2xl ${programs[activeTab].glow}
//                                         `}
//                                     >
//                                         {programs[activeTab].icon}
//                                     </div>

//                                     <h3 className="relative text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-gray-900 dark:text-white">
//                                         {programs[activeTab].title}
//                                     </h3>

//                                     <p className="relative mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
//                                         {programs[activeTab].description}
//                                     </p>

//                                     <div className="mt-8 flex flex-col sm:flex-row gap-4">

//                                         <button
//                                             className={`
//                                                 group inline-flex items-center justify-center gap-2
//                                                 rounded-full bg-gradient-to-r ${programs[activeTab].color}
//                                                 px-6 sm:px-8 py-3.5 sm:py-4
//                                                 text-sm sm:text-base
//                                                 font-semibold text-white
//                                                 transition-all duration-300
//                                                 hover:scale-105 shadow-xl
//                                             `}
//                                         >
//                                             Enroll Now

//                                             <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
//                                         </button>

//                                         <button className="rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-gray-800 dark:text-white transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10">
//                                             Learn More
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Right */}
//                                 <div className="border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.03] p-6 sm:p-8 lg:p-12">

//                                     <h4 className="mb-6 sm:mb-8 text-2xl font-bold text-gray-900 dark:text-white">
//                                         Why Choose This Program?
//                                     </h4>

//                                     <div className="space-y-4 sm:space-y-5">

//                                         {[
//                                             'Expert coaches with years of experience',
//                                             'Structured curriculum for steady progress',
//                                             'Supportive and fun learning environment',
//                                             'Individual attention to each player'
//                                         ].map((item, index) => (

//                                             <motion.div
//                                                 key={index}
//                                                 initial={{ opacity: 0, x: 20 }}
//                                                 animate={{ opacity: 1, x: 0 }}
//                                                 transition={{ delay: index * 0.1 }}
//                                                 className="flex items-start gap-3 sm:gap-4 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/5 p-4"
//                                             >
//                                                 <div
//                                                     className={`
//                                                         mt-1 flex h-9 w-9 sm:h-10 sm:w-10
//                                                         items-center justify-center rounded-full
//                                                         bg-gradient-to-r ${programs[activeTab].color}
//                                                         flex-shrink-0
//                                                     `}
//                                                 >
//                                                     <FaCheckCircle className="text-white text-xs sm:text-sm" />
//                                                 </div>

//                                                 <span className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
//                                                     {item}
//                                                 </span>
//                                             </motion.div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </AnimatePresence>

//                 {/* More Programs */}
//                 <div className="mt-20 sm:mt-24">

//                     <div className="mb-8 sm:mb-10 flex items-center justify-between">
//                         <h3 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
//                             More Programs
//                         </h3>

//                         <div className="hidden md:block h-[1px] flex-1 ml-8 bg-gradient-to-r from-gray-300 dark:from-white/20 to-transparent" />
//                     </div>

//                     <div className="grid gap-5 sm:gap-6 md:grid-cols-2">

//                         {programs.slice(4).map((program, index) => (

//                             <motion.div
//                                 key={program.id}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: index * 0.1 }}
//                                 whileHover={{ y: -6 }}
//                                 className="group relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 sm:p-8 backdrop-blur-2xl shadow-lg dark:shadow-none"
//                             >
//                                 <div
//                                     className={`absolute right-0 top-0 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-gradient-to-r ${program.color} opacity-10 blur-3xl`}
//                                 />

//                                 <div
//                                     className={`
//                                         mb-5 sm:mb-6 inline-flex h-14 w-14 sm:h-16 sm:w-16
//                                         items-center justify-center rounded-2xl
//                                         bg-gradient-to-r ${program.color}
//                                         text-xl sm:text-2xl text-white shadow-2xl
//                                     `}
//                                 >
//                                     {program.icon}
//                                 </div>

//                                 <h4 className="text-xl sm:text-2xl font-bold leading-tight text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-500">
//                                     {program.title}
//                                 </h4>

//                                 <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
//                                     {program.description}
//                                 </p>

//                                 <button
//                                     className={`
//                                         mt-6 sm:mt-8 inline-flex items-center gap-2
//                                         rounded-full bg-gradient-to-r ${program.color}
//                                         px-5 sm:px-6 py-3
//                                         text-sm sm:text-base
//                                         font-semibold text-white
//                                         transition-all duration-300 hover:scale-105 shadow-xl
//                                     `}
//                                 >
//                                     Enroll Now

//                                     <FaChevronRight className="text-xs" />
//                                 </button>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* CTA */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="relative mt-20 sm:mt-24 overflow-hidden rounded-[28px] sm:rounded-[36px] border border-gray-200 dark:border-white/10 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-3xl p-6 sm:p-10 lg:p-16 text-center shadow-2xl"
//                 >

//                     <div className="relative z-10">

//                         <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
//                             Start Here.

//                             <span className="block bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
//                                 Shine Everywhere.
//                             </span>
//                         </h3>

//                         <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-sm sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
//                             Join Pumpa Squash Academy today and begin your squash journey with the best coaches.
//                         </p>

//                         <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

//                             <a
//                                 href="/contact"
//                                 className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gray-900 dark:bg-white px-8 py-4 text-sm sm:text-base font-semibold text-white dark:text-black transition-all duration-300 hover:scale-105"
//                             >
//                                 Contact Us Today

//                                 <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
//                             </a>

//                             <button className="w-full sm:w-auto rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-8 py-4 text-sm sm:text-base font-semibold text-gray-800 dark:text-white transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10">
//                                 Book Free Trial
//                             </button>

//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>

//             <BackToTop threshold={300} position="bottom-8 right-8" />
//         </>
//     );
// };

// export default Programs;

















import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaChild,
    FaUserGraduate,
    FaTrophy,
    FaUsers,
    FaChalkboardTeacher,
    FaClinicMedical,
    FaCampground,
    FaGlobe,
    FaArrowRight,
    FaCheckCircle,
    FaChevronRight
} from 'react-icons/fa';
import BackToTop from '../../components/Reusable/BackToTop';

const Programs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const programs = [
        {
            id: 1,
            title: 'Kids Beginner Program',
            icon: <FaChild />,
            description:
                'A fun and engaging introduction to squash for young beginners. Players learn basic movement, coordination, racket skills, and confidence through enjoyable activities and structured coaching.',
            color: 'from-emerald-500 to-green-600',
            glow: 'shadow-emerald-500/20'
        },
        {
            id: 2,
            title: 'Junior Development',
            icon: <FaUserGraduate />,
            description:
                'Designed for growing players who want to improve their technique, fitness, game understanding, and overall performance in a positive and supportive environment.',
            color: 'from-blue-500 to-cyan-500',
            glow: 'shadow-cyan-500/20'
        },
        {
            id: 3,
            title: 'Competitive Training',
            icon: <FaTrophy />,
            description:
                'High-performance training for tournament players focusing on advanced skills, match play, fitness, mental strength, discipline, and competition preparation.',
            color: 'from-violet-500 to-fuchsia-500',
            glow: 'shadow-fuchsia-500/20'
        },
        {
            id: 4,
            title: 'Adult Squash',
            icon: <FaUsers />,
            description:
                'Whether you are a complete beginner or returning to the sport, our adult sessions focus on fitness, skill development, stress relief, and enjoyment of the game.',
            color: 'from-amber-500 to-orange-500',
            glow: 'shadow-orange-500/20'
        },
        {
            id: 5,
            title: 'Private Coaching',
            icon: <FaChalkboardTeacher />,
            description:
                "Personalised one-to-one coaching tailored to each player's goals, level, and learning style to maximise improvement and confidence on court.",
            color: 'from-pink-500 to-rose-500',
            glow: 'shadow-pink-500/20'
        },
        {
            id: 6,
            title: 'Squash Clinics',
            icon: <FaClinicMedical />,
            description:
                'Specialised clinics focused on specific areas of development such as technique, movement, match strategy, fitness, mental preparation, and player development.',
            color: 'from-red-500 to-rose-600',
            glow: 'shadow-red-500/20'
        },
        {
            id: 7,
            title: 'Holiday Camps',
            icon: <FaCampground />,
            description:
                'Exciting holiday programs combining squash training, fitness, games, teamwork, and fun activities in an energetic and positive environment for all levels.',
            color: 'from-teal-500 to-emerald-500',
            glow: 'shadow-teal-500/20'
        },
        {
            id: 8,
            title: 'International Training Camps',
            icon: <FaGlobe />,
            description:
                'Exclusive opportunities for players to experience international-level training, exposure, and cultural exchange through overseas camps and competitive experiences.',
            color: 'from-cyan-500 to-sky-500',
            glow: 'shadow-cyan-500/20'
        }
    ];

    return (
        <>
            <section  className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute left-0 top-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-emerald-500/10 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-72 w-72 sm:h-[30rem] sm:w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" />
                </div>

                <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl px-4 sm:px-5 py-2 shadow-lg dark:shadow-none"
                        >
                            <FaTrophy className="text-emerald-500 text-sm" />
                            <span className="text-[11px] sm:text-sm font-semibold tracking-[0.15em] text-gray-700 dark:text-gray-300 uppercase">
                                Training Programs
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-5 sm:mt-6 text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white"
                        >
                            Our{' '}
                            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                                Programs
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mx-auto mt-4 sm:mt-5 max-w-2xl px-2 text-sm sm:text-base lg:text-lg italic leading-relaxed text-gray-600 dark:text-gray-400"
                        >
                            “Start Here... Shine Everywhere”
                        </motion.p>
                    </div>

                    {/* Tabs */}
                    <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-3 sm:gap-4">
                        {programs.slice(0, 4).map((program, idx) => (
                            <motion.button
                                key={program.id}
                                onClick={() => setActiveTab(idx)}
                                whileHover={{ y: -3, scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                className={`
                                    rounded-2xl border px-4 sm:px-5 py-3
                                    transition-all duration-300
                                    min-w-[140px] sm:min-w-[180px]
                                    ${activeTab === idx
                                        ? `bg-gradient-to-r ${program.color} text-white border-transparent shadow-2xl ${program.glow}`
                                        : 'border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10'
                                    }
                                `}
                            >
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center sm:text-left">
                                    <span className="text-lg">{program.icon}</span>
                                    <span className="font-semibold text-xs sm:text-sm leading-tight">
                                        {program.title}
                                    </span>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Featured Program */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4 }}
                            className="mt-12 sm:mt-16"
                        >
                            <div className="overflow-hidden rounded-[28px] sm:rounded-[32px] border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-2xl shadow-xl dark:shadow-none">
                                <div className="grid lg:grid-cols-2">
                                    {/* Left */}
                                    <div className="relative overflow-hidden p-6 sm:p-8 lg:p-12">
                                        <div
                                            className={`absolute right-0 top-0 h-40 w-40 sm:h-52 sm:w-52 rounded-full bg-gradient-to-r ${programs[activeTab].color} opacity-20 blur-3xl`}
                                        />

                                        <div
                                            className={`
                                                relative mb-6 sm:mb-8 inline-flex
                                                h-16 w-16 sm:h-20 sm:w-20
                                                items-center justify-center
                                                rounded-2xl sm:rounded-3xl
                                                bg-gradient-to-r ${programs[activeTab].color}
                                                text-3xl sm:text-4xl text-white
                                                shadow-2xl ${programs[activeTab].glow}
                                            `}
                                        >
                                            {programs[activeTab].icon}
                                        </div>

                                        <h3 className="relative text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-gray-900 dark:text-white">
                                            {programs[activeTab].title}
                                        </h3>

                                        <p className="relative mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                                            {programs[activeTab].description}
                                        </p>

                                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                            <button
                                                className={`
                                                    group inline-flex items-center justify-center gap-2
                                                    rounded-full bg-gradient-to-r ${programs[activeTab].color}
                                                    px-6 sm:px-8 py-3.5 sm:py-4
                                                    text-sm sm:text-base
                                                    font-semibold text-white
                                                    transition-all duration-300
                                                    hover:scale-105 shadow-xl
                                                `}
                                            >
                                                Enroll Now
                                                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                            </button>

                                            <button className="rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-gray-800 dark:text-white transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>

                                    {/* Right */}
                                    <div className="border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.03] p-6 sm:p-8 lg:p-12">
                                        <h4 className="mb-6 sm:mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                                            Why Choose This Program?
                                        </h4>

                                        <div className="space-y-4 sm:space-y-5">
                                            {[
                                                'Expert coaches with years of experience',
                                                'Structured curriculum for steady progress',
                                                'Supportive and fun learning environment',
                                                'Individual attention to each player'
                                            ].map((item, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-start gap-3 sm:gap-4 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/5 p-4"
                                                >
                                                    <div
                                                        className={`
                                                            mt-1 flex h-9 w-9 sm:h-10 sm:w-10
                                                            items-center justify-center rounded-full
                                                            bg-gradient-to-r ${programs[activeTab].color}
                                                            flex-shrink-0
                                                        `}
                                                    >
                                                        <FaCheckCircle className="text-white text-xs sm:text-sm" />
                                                    </div>
                                                    <span className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                                        {item}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* More Programs */}
                    <div className="mt-20 sm:mt-24">
                        <div className="mb-8 sm:mb-10 flex items-center justify-between">
                            <h3 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
                                More Programs
                            </h3>
                            <div className="hidden md:block h-[1px] flex-1 ml-8 bg-gradient-to-r from-gray-300 dark:from-white/20 to-transparent" />
                        </div>

                        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
                            {programs.slice(4).map((program, index) => (
                                <motion.div
                                    key={program.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -6 }}
                                    className="group relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 sm:p-8 backdrop-blur-2xl shadow-lg dark:shadow-none"
                                >
                                    <div
                                        className={`absolute right-0 top-0 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-gradient-to-r ${program.color} opacity-10 blur-3xl`}
                                    />

                                    <div
                                        className={`
                                            mb-5 sm:mb-6 inline-flex h-14 w-14 sm:h-16 sm:w-16
                                            items-center justify-center rounded-2xl
                                            bg-gradient-to-r ${program.color}
                                            text-xl sm:text-2xl text-white shadow-2xl
                                        `}
                                    >
                                        {program.icon}
                                    </div>

                                    <h4 className="text-xl sm:text-2xl font-bold leading-tight text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-500">
                                        {program.title}
                                    </h4>

                                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                                        {program.description}
                                    </p>

                                    <button
                                        className={`
                                            mt-6 sm:mt-8 inline-flex items-center gap-2
                                            rounded-full bg-gradient-to-r ${program.color}
                                            px-5 sm:px-6 py-3
                                            text-sm sm:text-base
                                            font-semibold text-white
                                            transition-all duration-300 hover:scale-105 shadow-xl
                                        `}
                                    >
                                        Enroll Now
                                        <FaChevronRight className="text-xs" />
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative mt-20 sm:mt-24 overflow-hidden rounded-[28px] sm:rounded-[36px] border border-gray-200 dark:border-white/10 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-3xl p-6 sm:p-10 lg:p-16 text-center shadow-2xl"
                    >
                        <div className="relative z-10">
                            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
                                Start Here.
                                <span className="block bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                                    Shine Everywhere.
                                </span>
                            </h3>

                            <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-sm sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                                Join Pumpa Squash Academy today and begin your squash journey with the best coaches.
                            </p>

                            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="/contact"
                                    className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gray-900 dark:bg-white px-8 py-4 text-sm sm:text-base font-semibold text-white dark:text-black transition-all duration-300 hover:scale-105"
                                >
                                    Contact Us Today
                                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </a>

                                <button className="w-full sm:w-auto rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-8 py-4 text-sm sm:text-base font-semibold text-gray-800 dark:text-white transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10">
                                    Book Free Trial
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <BackToTop threshold={300} position="bottom-8 right-8" />
        </>
    );
};

export default Programs;

























