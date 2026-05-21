
// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//     FaCampground,
//     FaChalkboardTeacher,
//     FaTrophy,
//     FaGlassCheers,
//     FaCalendarAlt,
//     FaHeart,
//     FaUsers,
//     FaStar
// } from 'react-icons/fa';

// const Events = () => {
//     const events = [
//         {
//             id: 1,
//             title: "Squash Camps",
//             icon: <FaCampground className="text-4xl" />,
//             description: "Special training camps designed to improve skills, fitness, teamwork, and confidence in a fun and motivating environment.",
//             color: "from-orange-500 to-red-500",
//             bgColor: "bg-orange-50 dark:bg-orange-900/20",
//             features: ["Skill Development", "Fitness Training", "Team Building", "Fun Environment"]
//         },
//         {
//             id: 2,
//             title: "Squash Clinics",
//             icon: <FaChalkboardTeacher className="text-4xl" />,
//             description: "Focused coaching sessions led by experienced coaches to help players improve specific areas of their game through intensive and structured training.",
//             color: "from-blue-500 to-cyan-500",
//             bgColor: "bg-blue-50 dark:bg-blue-900/20",
//             features: ["Intensive Training", "Expert Coaches", "Structured Sessions", "Area Focus"]
//         },
//         {
//             id: 3,
//             title: "Internal Tournaments",
//             icon: <FaTrophy className="text-4xl" />,
//             description: "Friendly and competitive in-house tournaments that give players valuable match experience, build confidence, and encourage sportsmanship.",
//             color: "from-yellow-500 to-amber-500",
//             bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
//             features: ["Match Experience", "Build Confidence", "Sportsmanship", "Friendly Competition"]
//         },
//         {
//             id: 4,
//             title: "Pumpa Carnival",
//             icon: <FaGlassCheers className="text-4xl" />,
//             description: "An exciting community event bringing together players, parents, and squash lovers through matches, fun games, activities, awards, and memorable experiences on and off the court.",
//             color: "from-purple-500 to-pink-500",
//             bgColor: "bg-purple-50 dark:bg-purple-900/20",
//             features: ["Community Event", "Fun Games", "Awards Ceremony", "Memorable Experience"]
//         }
//     ];

//     const fadeInUp = {
//         initial: { opacity: 0, y: 30 },
//         whileInView: { opacity: 1, y: 0 },
//         viewport: { once: true, margin: "-100px" },
//         transition: { duration: 0.6 }
//     };

//     return (
//         <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
//             <div className="container mx-auto px-4">
//                 {/* Section Header */}
//                 <div className="text-center mb-12">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-5 py-2 rounded-full mb-6 shadow-md"
//                     >
//                         <FaCalendarAlt className="text-white text-sm" />
//                         <span className="text-white font-semibold text-xs tracking-wider uppercase">Events & Programs</span>
//                     </motion.div>

//                     <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.1 }}
//                         className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
//                     >
//                         Pumpa <span className="text-green-600 dark:text-green-400">Events</span>
//                     </motion.h2>

//                     <motion.div
//                         initial={{ opacity: 0, scaleX: 0 }}
//                         whileInView={{ opacity: 1, scaleX: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.2 }}
//                         className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6 rounded-full"
//                     ></motion.div>

//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.3 }}
//                         className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
//                     >
//                         Join our exciting events and programs designed for all ages and skill levels
//                     </motion.p>
//                 </div>

//                 {/* Events Grid */}
//                 <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//                     {events.map((event, index) => (
//                         <motion.div
//                             key={event.id}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: index * 0.1 }}
//                             className={`${event.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700`}
//                         >
//                             {/* Icon with Gradient */}
//                             <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${event.color} text-white shadow-lg mb-4`}>
//                                 {event.icon}
//                             </div>

//                             {/* Title */}
//                             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
//                                 {event.title}
//                             </h3>

//                             {/* Description */}
//                             <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
//                                 {event.description}
//                             </p>

//                             {/* Features Tags */}
//                             <div className="flex flex-wrap gap-2 mt-4">
//                                 {event.features.map((feature, i) => (
//                                     <span
//                                         key={i}
//                                         className={`text-xs px-3 py-1 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-sm`}
//                                     >
//                                         {feature}
//                                     </span>
//                                 ))}
//                             </div>

//                             {/* Learn More Button */}
//                             <button className="mt-6 text-green-600 dark:text-green-400 font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-300">
//                                 Learn More
//                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//                                 </svg>
//                             </button>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Call to Action */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.5 }}
//                     className="text-center mt-12"
//                 >
//                     <p className="text-gray-600 dark:text-gray-400 mb-4">
//                         Want to participate in our upcoming events?
//                     </p>
//                     <a
//                         href="/contact"
//                         className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//                     >
//                         <FaHeart />
//                         Register Now
//                         <FaCalendarAlt />
//                     </a>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Events;




// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//     FaCampground,
//     FaChalkboardTeacher,
//     FaTrophy,
//     FaGlassCheers,
//     FaCalendarAlt,
//     FaHeart,
// } from 'react-icons/fa';

// const Events = () => {
//     const [showAll, setShowAll] = useState(false);
//     const initialDisplay = 2;

//     const events = [
//         {
//             id: 1,
//             title: "Squash Camps",
//             icon: <FaCampground className="text-4xl" />,
//             description: "Special training camps designed to improve skills, fitness, teamwork, and confidence in a fun and motivating environment.",
//             color: "from-orange-500 to-red-500",
//             bgColor: "bg-orange-50 dark:bg-orange-900/20",
//             features: ["Skill Development", "Fitness Training", "Team Building", "Fun Environment"]
//         },
//         {
//             id: 2,
//             title: "Squash Clinics",
//             icon: <FaChalkboardTeacher className="text-4xl" />,
//             description: "Focused coaching sessions led by experienced coaches to help players improve specific areas of their game through intensive and structured training.",
//             color: "from-blue-500 to-cyan-500",
//             bgColor: "bg-blue-50 dark:bg-blue-900/20",
//             features: ["Intensive Training", "Expert Coaches", "Structured Sessions", "Area Focus"]
//         },
//         {
//             id: 3,
//             title: "Internal Tournaments",
//             icon: <FaTrophy className="text-4xl" />,
//             description: "Friendly and competitive in-house tournaments that give players valuable match experience, build confidence, and encourage sportsmanship.",
//             color: "from-yellow-500 to-amber-500",
//             bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
//             features: ["Match Experience", "Build Confidence", "Sportsmanship", "Friendly Competition"]
//         },
//         {
//             id: 4,
//             title: "Pumpa Carnival",
//             icon: <FaGlassCheers className="text-4xl" />,
//             description: "An exciting community event bringing together players, parents, and squash lovers through matches, fun games, activities, awards, and memorable experiences on and off the court.",
//             color: "from-purple-500 to-pink-500",
//             bgColor: "bg-purple-50 dark:bg-purple-900/20",
//             features: ["Community Event", "Fun Games", "Awards Ceremony", "Memorable Experience"]
//         }
//     ];

//     const displayedEvents = showAll ? events : events.slice(0, initialDisplay);

//     return (
//         <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
//             <div className="container mx-auto px-4">
//                 {/* Section Header */}
//                 <div className="text-center mb-12">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-5 py-2 rounded-full mb-6 shadow-md"
//                     >
//                         <FaCalendarAlt className="text-white text-sm" />
//                         <span className="text-white font-semibold text-xs tracking-wider uppercase">Events & Programs</span>
//                     </motion.div>

//                     <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.1 }}
//                         className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
//                     >
//                         Pumpa <span className="text-green-600 dark:text-green-400">Events</span>
//                     </motion.h2>

//                     <motion.div
//                         initial={{ opacity: 0, scaleX: 0 }}
//                         whileInView={{ opacity: 1, scaleX: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.2 }}
//                         className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6 rounded-full"
//                     ></motion.div>

//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.3 }}
//                         className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
//                     >
//                         Join our exciting events and programs designed for all ages and skill levels
//                     </motion.p>
//                 </div>

//                 {/* Events Grid - Shows 2 cards initially */}
//                 <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//                     <AnimatePresence mode="wait">
//                         {displayedEvents.map((event, index) => (
//                             <motion.div
//                                 key={event.id}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -30 }}
//                                 transition={{ delay: index * 0.1 }}
//                                 className={`${event.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700`}
//                             >
//                                 <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${event.color} text-white shadow-lg mb-4`}>
//                                     {event.icon}
//                                 </div>

//                                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
//                                     {event.title}
//                                 </h3>

//                                 <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
//                                     {event.description}
//                                 </p>

//                                 <div className="flex flex-wrap gap-2 mt-4">
//                                     {event.features.map((feature, i) => (
//                                         <span
//                                             key={i}
//                                             className={`text-xs px-3 py-1 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-sm`}
//                                         >
//                                             {feature}
//                                         </span>
//                                     ))}
//                                 </div>

//                                 <button className="mt-6 text-green-600 dark:text-green-400 font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-300">
//                                     Learn More
//                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//                                     </svg>
//                                 </button>
//                             </motion.div>
//                         ))}
//                     </AnimatePresence>
//                 </div>

//                 {/* View More / View Less Button */}
//                 {events.length > initialDisplay && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ once: true }}
//                         className="text-center mt-10"
//                     >
//                         <button
//                             onClick={() => setShowAll(!showAll)}
//                             className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-green-600 text-green-600 dark:text-green-400 font-semibold rounded-full hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
//                         >
//                             {showAll ? 'Show Less Events' : 'View All Events'}
//                             <svg className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                             </svg>
//                         </button>
//                     </motion.div>
//                 )}

//                 {/* Call to Action */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.5 }}
//                     className="text-center mt-12"
//                 >
//                     <p className="text-gray-600 dark:text-gray-400 mb-4">
//                         Want to participate in our upcoming events?
//                     </p>
//                     <a
//                         href="/contact"
//                         className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//                     >
//                         <FaHeart />
//                         Register Now
//                         <FaCalendarAlt />
//                     </a>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Events;









import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaCampground,
    FaChalkboardTeacher,
    FaTrophy,
    FaGlassCheers,
    FaCalendarAlt,
    FaHeart,
} from 'react-icons/fa';

const Events = () => {
    const [showAll, setShowAll] = useState(false);
    const initialDisplay = 2;

    const events = [
        {
            id: 1,
            title: "Squash Camps",
            icon: <FaCampground className="text-4xl" />,
            description: "Special training camps designed to improve skills, fitness, teamwork, and confidence in a fun and motivating environment.",
            color: "from-orange-500 to-red-500",
            bgColor: "bg-orange-50 dark:bg-orange-900/20",
            features: ["Skill Development", "Fitness Training", "Team Building", "Fun Environment"]
        },
        {
            id: 2,
            title: "Squash Clinics",
            icon: <FaChalkboardTeacher className="text-4xl" />,
            description: "Focused coaching sessions led by experienced coaches to help players improve specific areas of their game through intensive and structured training.",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-50 dark:bg-blue-900/20",
            features: ["Intensive Training", "Expert Coaches", "Structured Sessions", "Area Focus"]
        },
        {
            id: 3,
            title: "Internal Tournaments",
            icon: <FaTrophy className="text-4xl" />,
            description: "Friendly and competitive in-house tournaments that give players valuable match experience, build confidence, and encourage sportsmanship.",
            color: "from-yellow-500 to-amber-500",
            bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
            features: ["Match Experience", "Build Confidence", "Sportsmanship", "Friendly Competition"]
        },
        {
            id: 4,
            title: "Pumpa Carnival",
            icon: <FaGlassCheers className="text-4xl" />,
            description: "An exciting community event bringing together players, parents, and squash lovers through matches, fun games, activities, awards, and memorable experiences on and off the court.",
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-purple-50 dark:bg-purple-900/20",
            features: ["Community Event", "Fun Games", "Awards Ceremony", "Memorable Experience"]
        }
    ];

    const displayedEvents = showAll ? events : events.slice(0, initialDisplay);

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-5 py-2 rounded-full mb-6 shadow-md"
                    >
                        <FaCalendarAlt className="text-white text-sm" />
                        <span className="text-white font-semibold text-xs tracking-wider uppercase">Events & Programs</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Pumpa <span className="text-green-600 dark:text-green-400">Events</span>
                    </motion.h2>

                    {/* <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    ></motion.div> */}
                    <motion.div
                        className="flex items-center justify-center md:pt-3 gap-3 mb-6"
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-500"></div>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-500"></div>
                    </motion.div>
                   


                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Join our exciting events and programs designed for all ages and skill levels
                    </motion.p>
                </div>

                {/* Events Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        {displayedEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ delay: index * 0.1 }}
                                className={`${event.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700`}
                            >
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${event.color} text-white shadow-lg mb-4`}>
                                    {event.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                    {event.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    {event.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {event.features.map((feature, i) => (
                                        <span
                                            key={i}
                                            className={`text-xs px-3 py-1 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-sm`}
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <button className="mt-6 text-green-600 dark:text-green-400 font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-300">
                                    Learn More
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View All / Show Less Button */}
                {events.length > initialDisplay && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-10"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-green-600 text-green-600 dark:text-green-400 font-semibold rounded-full hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
                        >
                            {showAll ? (
                                <>
                                    Show Less Events
                                    <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </>
                            ) : (
                                <>
                                    View All Events
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </>
                            )}
                        </button>
                    </motion.div>
                )}

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Want to participate in our upcoming events?
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <FaHeart />
                        Register Now
                        <FaCalendarAlt />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Events;






// import React from "react";
// import { motion } from "framer-motion";
// import {
//     FaCampground,
//     FaChalkboardTeacher,
//     FaTrophy,
//     FaGlassCheers,
//     FaCalendarAlt,
// } from "react-icons/fa";

// const Events = () => {
//     const events = [
//         {
//             title: "Squash Camps",
//             icon: FaCampground,
//             description:
//                 "Special training camps designed to improve skills, fitness, teamwork, and confidence in a fun and motivating environment.",
//             features: ["Skill Growth", "Fitness", "Teamwork", "Fun Learning"],
//         },
//         {
//             title: "Squash Clinics",
//             icon: FaChalkboardTeacher,
//             description:
//                 "Focused coaching sessions to improve specific areas of the game through structured and intensive training.",
//             features: ["Expert Coaching", "Focused Training", "Skill Fix", "Progress Tracking"],
//         },
//         {
//             title: "Internal Tournaments",
//             icon: FaTrophy,
//             description:
//                 "Friendly in-house tournaments that build confidence, match experience, and sportsmanship.",
//             features: ["Match Practice", "Confidence", "Competition", "Growth"],
//         },
//         {
//             title: "Pumpa Carnival",
//             icon: FaGlassCheers,
//             description:
//                 "A community event bringing players and families together through games, matches, and celebrations.",
//             features: ["Community", "Fun Events", "Awards", "Memories"],
//         },
//     ];

//     return (
//         <section className="py-24 bg-white dark:bg-gray-900">
//             <div className="max-w-6xl mx-auto px-4">

//                 {/* Header */}
//                 <div className="text-center mb-16">
//                     <div className="inline-flex items-center gap-2 text-green-600 font-medium text-sm tracking-wide uppercase">
//                         <FaCalendarAlt />
//                         Events & Programs
//                     </div>

//                     <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
//                         Pumpa Events
//                     </h2>

//                     <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//                         Structured programs designed to develop players on and off the court.
//                     </p>
//                 </div>

//                 {/* Grid */}
//                 <div className="grid md:grid-cols-2 gap-8">
//                     {events.map((event, index) => {
//                         const Icon = event.icon;

//                         return (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: index * 0.1 }}
//                                 className="group border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//                             >
//                                 {/* Icon */}
//                                 <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 mb-5 group-hover:scale-110 transition-transform">
//                                     <Icon size={22} />
//                                 </div>

//                                 {/* Title */}
//                                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                                     {event.title}
//                                 </h3>

//                                 {/* Description */}
//                                 <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
//                                     {event.description}
//                                 </p>

//                                 {/* Features */}
//                                 <div className="mt-5 flex flex-wrap gap-2">
//                                     {event.features.map((f, i) => (
//                                         <span
//                                             key={i}
//                                             className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
//                                         >
//                                             {f}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </motion.div>
//                         );
//                     })}
//                 </div>

//                 {/* CTA */}
//                 <div className="text-center mt-16">
//                     <a
//                         href="/contact"
//                         className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:scale-105 transition"
//                     >
//                         Join Our Events
//                         <FaCalendarAlt />
//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Events;


