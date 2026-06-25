
// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// import {
//     FaCampground,
//     FaChalkboardTeacher,
//     FaTrophy,
//     FaGlassCheers,
//     FaCalendarAlt,
//     FaHeart,
//     FaStar,
//     FaUsers,
//     FaClock,
//     FaMapMarkerAlt,
//     FaArrowRight,
//     FaChevronLeft,
//     FaChevronRight,
//     FaMedal,
//     FaFire,
//     FaRocket,
//     FaShieldAlt,
//     FaMagic,
//     FaGem,
//     FaAward
// } from 'react-icons/fa';

// const Events = () => {
//     const [showAll, setShowAll] = useState(false);
//     const [activeEvent, setActiveEvent] = useState(null);
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const sectionRef = useRef(null);
//     const initialDisplay = 2;

//     const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ["start end", "end start"]
//     });

//     const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
//     const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

//     const events = [
//         {
//             id: 1,
//             title: "Squash Camps",
//             icon: <FaCampground />,
//             description: "Special training camps designed to improve skills, fitness, teamwork, and confidence in a fun and motivating environment.",
//             color: "from-orange-500 to-red-500",
//             bgColor: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
//             borderColor: "hover:border-orange-500",
//             features: ["Skill Development", "Fitness Training", "Team Building", "Fun Environment"],
//             duration: "5 Days",
//             participants: "15-20",
//             level: "All Levels",
//             location: "Main Court"
//         },
//         {
//             id: 2,
//             title: "Squash Clinics",
//             icon: <FaChalkboardTeacher />,
//             description: "Focused coaching sessions led by experienced coaches to help players improve specific areas of their game through intensive and structured training.",
//             color: "from-blue-500 to-cyan-500",
//             bgColor: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
//             borderColor: "hover:border-blue-500",
//             features: ["Intensive Training", "Expert Coaches", "Structured Sessions", "Area Focus"],
//             duration: "2 Days",
//             participants: "10-12",
//             level: "Intermediate+",
//             location: "Training Hall"
//         },
//         {
//             id: 3,
//             title: "Internal Tournaments",
//             icon: <FaTrophy />,
//             description: "Friendly and competitive in-house tournaments that give players valuable match experience, build confidence, and encourage sportsmanship.",
//             color: "from-yellow-500 to-amber-500",
//             bgColor: "from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20",
//             borderColor: "hover:border-yellow-500",
//             features: ["Match Experience", "Build Confidence", "Sportsmanship", "Friendly Competition"],
//             duration: "1 Day",
//             participants: "30+",
//             level: "All Levels",
//             location: "Main Court"
//         },
//         {
//             id: 4,
//             title: "Pumpa Carnival",
//             icon: <FaGlassCheers />,
//             description: "An exciting community event bringing together players, parents, and squash lovers through matches, fun games, activities, awards, and memorable experiences.",
//             color: "from-purple-500 to-pink-500",
//             bgColor: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
//             borderColor: "hover:border-purple-500",
//             features: ["Community Event", "Fun Games", "Awards Ceremony", "Memorable Experience"],
//             duration: "2 Days",
//             participants: "100+",
//             level: "All Ages",
//             location: "Full Facility"
//         }
//     ];

//     const displayedEvents = showAll ? events : events.slice(0, initialDisplay);

//     // Auto-rotate carousel
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % events.length);
//         }, 5000);
//         return () => clearInterval(interval);
//     }, [events.length]);

//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev + 1) % events.length);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
//     };

//     // Background decoration dots
//     const dots = [
//         { x: '10%', y: '20%', size: 'w-64 h-64', color: 'bg-orange-500/5' },
//         { x: '80%', y: '60%', size: 'w-80 h-80', color: 'bg-blue-500/5' },
//         { x: '20%', y: '80%', size: 'w-72 h-72', color: 'bg-purple-500/5' },
//         { x: '70%', y: '10%', size: 'w-56 h-56', color: 'bg-green-500/5' },
//     ];

//     return (
//         <section
//             ref={sectionRef}
//             className="relative py-16 sm:py-20  lg:py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
//         >
//             {/* Premium Background Elements */}
//             <div className="absolute inset-0 pointer-events-none">
//                 {dots.map((dot, idx) => (
//                     <div
//                         key={idx}
//                         className={`absolute ${dot.color} rounded-full blur-3xl ${dot.size}`}
//                         style={{ left: dot.x, top: dot.y }}
//                     />
//                 ))}
//                 <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
//                 <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-green-500/5 to-transparent" />
//                 <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/5 to-transparent" />
//             </div>

//             <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
//                 {/* Section Header - Enhanced */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, amount: 0.3 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                     className="text-center mb-12 sm:mb-16 lg:mb-20"
//                 >
//                     {/* Premium Badge */}
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.4, delay: 0.1 }}
//                         className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl px-4 sm:px-6 py-2 rounded-full mb-6 sm:mb-8 border border-gray-200/50 dark:border-gray-700/50"
//                     >
//                         <motion.div
//                             className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"
//                             animate={{ scale: [1, 1.5, 1] }}
//                             transition={{ duration: 1.5, repeat: Infinity }}
//                         />
//                         <span className="text-gray-700 dark:text-gray-300 font-semibold text-xs sm:text-sm tracking-wide">
//                             Events & Programs
//                         </span>
//                         <FaFire className="text-orange-500 text-xs sm:text-sm" />
//                     </motion.div>

//                     {/* Main Heading */}
//                     <motion.h2
//                         className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                     >
//                         Pumpa
//                         <motion.span
//                             className="block bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent mt-1 sm:mt-2"
//                             initial={{ opacity: 0, x: -30 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: 0.3 }}
//                         >
//                             Events & Programs
//                         </motion.span>
//                     </motion.h2>

//                     {/* Decorative Divider */}
//                     <motion.div
//                         className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
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

//                     <motion.p
//                         className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4"
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.5, delay: 0.6 }}
//                     >
//                         Join our exciting events and programs designed for all ages and skill levels
//                     </motion.p>
//                 </motion.div>

//                 {/* Desktop Grid View - Enhanced Cards */}
//                 <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
//                     <AnimatePresence mode="wait">
//                         {displayedEvents.map((event, index) => (
//                             <motion.div
//                                 key={event.id}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -30 }}
//                                 transition={{ delay: index * 0.08 }}
//                                 whileHover={{ y: -8 }}
//                                 className={`group relative bg-gradient-to-br ${event.bgColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 ${event.borderColor}`}
//                             >
//                                 {/* Hover Glow Effect */}
//                                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl" />

//                                 {/* Icon Container */}
//                                 <motion.div
//                                     whileHover={{ scale: 1.1, rotate: 5 }}
//                                     className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${event.color} text-white shadow-lg mb-4 sm:mb-6`}
//                                 >
//                                     <span className="text-2xl sm:text-3xl">{event.icon}</span>
//                                 </motion.div>

//                                 <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
//                                     {event.title}
//                                 </h3>

//                                 <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
//                                     {event.description}
//                                 </p>

//                                 {/* Event Details - Premium */}
//                                 <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
//                                     <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                                         <FaClock className="text-green-500 text-xs" />
//                                         <span>{event.duration}</span>
//                                     </div>
//                                     <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                                         <FaUsers className="text-blue-500 text-xs" />
//                                         <span>{event.participants}</span>
//                                     </div>
//                                     <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                                         <FaMedal className="text-purple-500 text-xs" />
//                                         <span>{event.level}</span>
//                                     </div>
//                                     <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                                         <FaMapMarkerAlt className="text-red-500 text-xs" />
//                                         <span>{event.location}</span>
//                                     </div>
//                                 </div>

//                                 {/* Features Tags */}
//                                 <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
//                                     {event.features.map((feature, i) => (
//                                         <span
//                                             key={i}
//                                             className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200/50 dark:border-gray-700/50"
//                                         >
//                                             {feature}
//                                         </span>
//                                     ))}
//                                 </div>

//                                 {/* CTA Button */}
//                                 <motion.button
//                                     whileHover={{ scale: 1.03 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
//                                 >
//                                     <span>Learn More</span>
//                                     <FaArrowRight className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform" />
//                                 </motion.button>
//                             </motion.div>
//                         ))}
//                     </AnimatePresence>
//                 </div>

//                 {/* Mobile Carousel View */}
//                 <div className="md:hidden relative">
//                     <div className="relative overflow-hidden">
//                         <AnimatePresence mode="wait">
//                             <motion.div
//                                 key={currentSlide}
//                                 initial={{ opacity: 0, x: 50 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 exit={{ opacity: 0, x: -50 }}
//                                 transition={{ duration: 0.4 }}
//                                 className={`bg-gradient-to-br ${events[currentSlide].bgColor} rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg`}
//                             >
//                                 <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${events[currentSlide].color} text-white shadow-lg mb-4`}>
//                                     <span className="text-2xl">{events[currentSlide].icon}</span>
//                                 </div>

//                                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
//                                     {events[currentSlide].title}
//                                 </h3>

//                                 <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
//                                     {events[currentSlide].description}
//                                 </p>

//                                 <div className="grid grid-cols-2 gap-2 mb-4">
//                                     <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
//                                         <FaClock className="text-green-500" />
//                                         <span>{events[currentSlide].duration}</span>
//                                     </div>
//                                     <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
//                                         <FaUsers className="text-blue-500" />
//                                         <span>{events[currentSlide].participants}</span>
//                                     </div>
//                                     <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
//                                         <FaMedal className="text-purple-500" />
//                                         <span>{events[currentSlide].level}</span>
//                                     </div>
//                                     <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
//                                         <FaMapMarkerAlt className="text-red-500" />
//                                         <span>{events[currentSlide].location}</span>
//                                     </div>
//                                 </div>

//                                 <div className="flex flex-wrap gap-1.5 mb-4">
//                                     {events[currentSlide].features.map((feature, i) => (
//                                         <span
//                                             key={i}
//                                             className="text-[10px] px-2 py-0.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 shadow-sm"
//                                         >
//                                             {feature}
//                                         </span>
//                                     ))}
//                                 </div>

//                                 <button className="w-full px-4 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm">
//                                     <span>Learn More</span>
//                                     <FaArrowRight className="text-xs" />
//                                 </button>
//                             </motion.div>
//                         </AnimatePresence>
//                     </div>

//                     {/* Carousel Navigation */}
//                     <div className="flex items-center justify-between mt-6">
//                         <button
//                             onClick={prevSlide}
//                             className="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
//                             aria-label="Previous event"
//                         >
//                             <FaChevronLeft className="text-gray-700 dark:text-gray-300" />
//                         </button>

//                         <div className="flex gap-2">
//                             {events.map((_, idx) => (
//                                 <button
//                                     key={idx}
//                                     onClick={() => setCurrentSlide(idx)}
//                                     className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx
//                                             ? 'w-6 bg-gradient-to-r from-green-500 to-emerald-500'
//                                             : 'w-2 bg-gray-300 dark:bg-gray-600'
//                                         }`}
//                                     aria-label={`Go to event ${idx + 1}`}
//                                 />
//                             ))}
//                         </div>

//                         <button
//                             onClick={nextSlide}
//                             className="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
//                             aria-label="Next event"
//                         >
//                             <FaChevronRight className="text-gray-700 dark:text-gray-300" />
//                         </button>
//                     </div>
//                 </div>

//                 {/* View All / Show Less Button - Enhanced */}
//                 {events.length > initialDisplay && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ once: true }}
//                         className="text-center mt-10 sm:mt-12"
//                     >
//                         <motion.button
//                             onClick={() => setShowAll(!showAll)}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white dark:bg-gray-800 border-2 border-green-600 text-green-600 dark:text-green-400 font-semibold rounded-full hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg text-sm sm:text-base"
//                         >
//                             {showAll ? (
//                                 <>
//                                     <span>Show Less Events</span>
//                                     <FaChevronRight className="w-4 h-4 rotate-90" />
//                                 </>
//                             ) : (
//                                 <>
//                                     <span>View All Events</span>
//                                     <FaGem className="text-yellow-500" />
//                                     <FaArrowRight className="w-4 h-4" />
//                                 </>
//                             )}
//                         </motion.button>
//                     </motion.div>
//                 )}

//                 {/* Call to Action - Enhanced */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.5 }}
//                     className="text-center mt-12 sm:mt-16"
//                 >
//                     <div className="max-w-2xl mx-auto">
//                         <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
//                             <FaHeart className="text-red-500 text-lg sm:text-xl animate-pulse" />
//                             <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-medium">
//                                 Want to participate in our upcoming events?
//                             </p>
//                             <FaHeart className="text-red-500 text-lg sm:text-xl animate-pulse delay-75" />
//                         </div>

//                         <motion.a
//                             href="/contact"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base"
//                         >
//                             <FaRocket />
//                             Register Now
//                             <FaCalendarAlt />
//                         </motion.a>
//                     </div>
//                 </motion.div>
//             </div>

//             {/* Bottom Decorative Line */}
//             <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 dark:via-green-500/30 to-transparent" />
//         </section>
//     );
// };

// export default Events;










import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
    FaCampground,
    FaChalkboardTeacher,
    FaTrophy,
    FaGlassCheers,
    FaCalendarAlt,
    FaHeart,
    FaStar,
    FaUsers,
    FaClock,
    FaMapMarkerAlt,
    FaArrowRight,
    FaChevronLeft,
    FaChevronRight,
    FaMedal,
    FaFire,
    FaRocket,
    FaShieldAlt,
    FaMagic,
    FaGem,
    FaAward
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Events = () => {
    const navigate = useNavigate();

    const [showAll, setShowAll] = useState(false);
    const [activeEvent, setActiveEvent] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sectionRef = useRef(null);
    const initialDisplay = 2;

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const handleLearnMore = () => {
        console.log('works')
        navigate('/programs');
    };

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

    const events = [
        {
            id: 1,
            title: "Squash Camps",
            icon: <FaCampground />,
            description: "Special training camps designed to improve skills, fitness, teamwork, and confidence in a fun and motivating environment.",
            color: "from-orange-500 to-red-500",
            bgColor: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
            borderColor: "hover:border-orange-500",
            features: ["Skill Development", "Fitness Training", "Team Building", "Fun Environment"],
            duration: "5 Days",
            participants: "15-20",
            level: "All Levels",
            location: "Main Court"
        },
        {
            id: 2,
            title: "Squash Clinics",
            icon: <FaChalkboardTeacher />,
            description: "Focused coaching sessions led by experienced coaches to help players improve specific areas of their game through intensive and structured training.",
            color: "from-blue-500 to-cyan-500",
            bgColor: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
            borderColor: "hover:border-blue-500",
            features: ["Intensive Training", "Expert Coaches", "Structured Sessions", "Area Focus"],
            duration: "2 Days",
            participants: "10-12",
            level: "Intermediate+",
            location: "Training Hall"
        },
        {
            id: 3,
            title: "Internal Tournaments",
            icon: <FaTrophy />,
            description: "Friendly and competitive in-house tournaments that give players valuable match experience, build confidence, and encourage sportsmanship.",
            color: "from-yellow-500 to-amber-500",
            bgColor: "from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20",
            borderColor: "hover:border-yellow-500",
            features: ["Match Experience", "Build Confidence", "Sportsmanship", "Friendly Competition"],
            duration: "1 Day",
            participants: "30+",
            level: "All Levels",
            location: "Main Court"
        },
        {
            id: 4,
            title: "Pumpa Carnival",
            icon: <FaGlassCheers />,
            description: "An exciting community event bringing together players, parents, and squash lovers through matches, fun games, activities, awards, and memorable experiences.",
            color: "from-purple-500 to-pink-500",
            bgColor: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
            borderColor: "hover:border-purple-500",
            features: ["Community Event", "Fun Games", "Awards Ceremony", "Memorable Experience"],
            duration: "2 Days",
            participants: "100+",
            level: "All Ages",
            location: "Full Facility"
        }
    ];

    const displayedEvents = showAll ? events : events.slice(0, initialDisplay);

    // Auto-rotate carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % events.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [events.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % events.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
    };

    // Background decoration dots
    const dots = [
        { x: '10%', y: '20%', size: 'w-64 h-64', color: 'bg-orange-500/5' },
        { x: '80%', y: '60%', size: 'w-80 h-80', color: 'bg-blue-500/5' },
        { x: '20%', y: '80%', size: 'w-72 h-72', color: 'bg-purple-500/5' },
        { x: '70%', y: '10%', size: 'w-56 h-56', color: 'bg-green-500/5' },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-16 sm:py-20  lg:py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
            {/* Premium Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {dots.map((dot, idx) => (
                    <div
                        key={idx}
                        className={`absolute ${dot.color} rounded-full blur-3xl ${dot.size}`}
                        style={{ left: dot.x, top: dot.y }}
                    />
                ))}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
                <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-green-500/5 to-transparent" />
                <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/5 to-transparent" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                {/* Section Header - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    {/* Premium Badge */}
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
                            Events & Programs
                        </span>
                        <FaFire className="text-orange-500 text-xs sm:text-sm" />
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Pumpa
                        <motion.span
                            className="block bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent mt-1 sm:mt-2 font-display"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Events & Programs
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

                    <motion.p
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-[1.8] font-light tracking-wide px-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Join our exciting events and programs designed for all ages and skill levels
                    </motion.p>
                </motion.div>

                {/* Desktop Grid View - Enhanced Cards */}
                <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        {displayedEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -8 }}
                                className={`group relative bg-gradient-to-br ${event.bgColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 ${event.borderColor}`}
                            >
                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl" />

                                {/* Icon Container */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${event.color} text-white shadow-lg mb-4 sm:mb-6`}
                                >
                                    <span className="text-2xl sm:text-3xl">{event.icon}</span>
                                </motion.div>

                                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white mb-2 sm:mb-3 tracking-tight">
                                    {event.title}
                                </h3>

                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-[1.8] font-light tracking-wide mb-4">
                                    {event.description}
                                </p>

                                {/* Event Details - Premium */}
                                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light tracking-wide">
                                        <FaClock className="text-green-500 text-xs" />
                                        <span>{event.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light tracking-wide">
                                        <FaUsers className="text-blue-500 text-xs" />
                                        <span>{event.participants}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light tracking-wide">
                                        <FaMedal className="text-purple-500 text-xs" />
                                        <span>{event.level}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light tracking-wide">
                                        <FaMapMarkerAlt className="text-red-500 text-xs" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                {/* Features Tags */}
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                                    {event.features.map((feature, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200/50 dark:border-gray-700/50 font-medium tracking-wide"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleLearnMore}
                                    className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base tracking-wide"
                                >
                                    <span>Learn More</span>
                                    <FaArrowRight className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Mobile Carousel View */}
                <div className="md:hidden relative">
                    <div className="relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                                className={`bg-gradient-to-br ${events[currentSlide].bgColor} rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg`}
                            >
                                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${events[currentSlide].color} text-white shadow-lg mb-4`}>
                                    <span className="text-2xl">{events[currentSlide].icon}</span>
                                </div>

                                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
                                    {events[currentSlide].title}
                                </h3>

                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-[1.8] font-light tracking-wide mb-4">
                                    {events[currentSlide].description}
                                </p>

                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 font-light tracking-wide">
                                        <FaClock className="text-green-500" />
                                        <span>{events[currentSlide].duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 font-light tracking-wide">
                                        <FaUsers className="text-blue-500" />
                                        <span>{events[currentSlide].participants}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 font-light tracking-wide">
                                        <FaMedal className="text-purple-500" />
                                        <span>{events[currentSlide].level}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 font-light tracking-wide">
                                        <FaMapMarkerAlt className="text-red-500" />
                                        <span>{events[currentSlide].location}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {events[currentSlide].features.map((feature, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] px-2 py-0.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 shadow-sm font-medium tracking-wide"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    onClick={handleLearnMore}
                                className="w-full px-4 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-wide">
                                    <span>Learn More</span>
                                    <FaArrowRight className="text-xs" />
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Carousel Navigation */}
                    <div className="flex items-center justify-between mt-6">
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
                            aria-label="Previous event"
                        >
                            <FaChevronLeft className="text-gray-700 dark:text-gray-300" />
                        </button>

                        <div className="flex gap-2">
                            {events.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx
                                        ? 'w-6 bg-gradient-to-r from-green-500 to-emerald-500'
                                        : 'w-2 bg-gray-300 dark:bg-gray-600'
                                        }`}
                                    aria-label={`Go to event ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
                            aria-label="Next event"
                        >
                            <FaChevronRight className="text-gray-700 dark:text-gray-300" />
                        </button>
                    </div>
                </div>

                {/* View All / Show Less Button - Enhanced */}
                {events.length > initialDisplay && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-10 sm:mt-12"
                    >
                        <motion.button
                            onClick={() => setShowAll(!showAll)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white dark:bg-gray-800 border-2 border-green-600 text-green-600 dark:text-green-400 font-semibold rounded-full hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg text-sm sm:text-base tracking-wide"
                        >
                            {showAll ? (
                                <>
                                    <span>Show Less Events</span>
                                    <FaChevronRight className="w-4 h-4 rotate-90" />
                                </>
                            ) : (
                                <>
                                    <span>View All Events</span>
                                    <FaGem className="text-yellow-500" />
                                    <FaArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </motion.button>
                    </motion.div>
                )}

                {/* Call to Action - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12 sm:mt-16"
                >
                    <div className="max-w-2xl mx-auto">
                        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                            <FaHeart className="text-red-500 text-lg sm:text-xl animate-pulse" />
                            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                                Want to participate in our upcoming events?
                            </p>
                            <FaHeart className="text-red-500 text-lg sm:text-xl animate-pulse delay-75" />
                        </div>

                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base tracking-wide"
                        >
                            <FaRocket />
                            Register Now
                            <FaCalendarAlt />
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Decorative Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 dark:via-green-500/30 to-transparent" />
        </section>
    );
};

export default Events;