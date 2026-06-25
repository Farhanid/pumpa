
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
// import { useNavigate } from 'react-router-dom';

// const Programs = () => {
//     const navigate = useNavigate();
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
//             <section  className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
//                 {/* Background Effects */}
//                 <div className="absolute inset-0 overflow-hidden">
//                     <div className="absolute left-0 top-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-emerald-500/10 blur-3xl" />
//                     <div className="absolute bottom-0 right-0 h-72 w-72 sm:h-[30rem] sm:w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" />
//                 </div>

//                 <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                     {/* Header */}
//                     <div className="text-center">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl px-4 sm:px-5 py-2 shadow-lg dark:shadow-none"
//                         >
//                             <FaTrophy className="text-emerald-500 text-sm" />
//                             <span className="text-[11px] sm:text-sm font-semibold tracking-[0.15em] text-gray-700 dark:text-gray-300 uppercase">
//                                 Training Programs
//                             </span>
//                         </motion.div>

//                         <motion.h2
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             className="mt-5 sm:mt-6 text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white"
//                         >
//                             Our{' '}
//                             <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
//                                 Programs
//                             </span>
//                         </motion.h2>

//                         <motion.p
//                             initial={{ opacity: 0, y: 10 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             className="mx-auto mt-4 sm:mt-5 max-w-2xl px-2 text-sm sm:text-base lg:text-lg italic leading-relaxed text-gray-600 dark:text-gray-400"
//                         >
//                             “Start Here... Shine Everywhere”
//                         </motion.p>
//                     </div>

//                     {/* Tabs */}
//                     <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-3 sm:gap-4">
//                         {programs.slice(0, 4).map((program, idx) => (
//                             <motion.button
//                                 key={program.id}
//                                 onClick={() => setActiveTab(idx)}
//                                 whileHover={{ y: -3, scale: 1.02 }}
//                                 whileTap={{ scale: 0.97 }}
//                                 className={`
//                                     rounded-2xl border px-4 sm:px-5 py-3
//                                     transition-all duration-300
//                                     min-w-[140px] sm:min-w-[180px]
//                                     ${activeTab === idx
//                                         ? `bg-gradient-to-r ${program.color} text-white border-transparent shadow-2xl ${program.glow}`
//                                         : 'border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10'
//                                     }
//                                 `}
//                             >
//                                 <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center sm:text-left">
//                                     <span className="text-lg">{program.icon}</span>
//                                     <span className="font-semibold text-xs sm:text-sm leading-tight">
//                                         {program.title}
//                                     </span>
//                                 </div>
//                             </motion.button>
//                         ))}
//                     </div>

//                     {/* Featured Program */}
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={activeTab}
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -30 }}
//                             transition={{ duration: 0.4 }}
//                             className="mt-12 sm:mt-16"
//                         >
//                             <div className="overflow-hidden rounded-[28px] sm:rounded-[32px] border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-2xl shadow-xl dark:shadow-none">
//                                 <div className="grid lg:grid-cols-2">
//                                     {/* Left */}
//                                     <div className="relative overflow-hidden p-6 sm:p-8 lg:p-12">
//                                         <div
//                                             className={`absolute right-0 top-0 h-40 w-40 sm:h-52 sm:w-52 rounded-full bg-gradient-to-r ${programs[activeTab].color} opacity-20 blur-3xl`}
//                                         />

//                                         <div
//                                             className={`
//                                                 relative mb-6 sm:mb-8 inline-flex
//                                                 h-16 w-16 sm:h-20 sm:w-20
//                                                 items-center justify-center
//                                                 rounded-2xl sm:rounded-3xl
//                                                 bg-gradient-to-r ${programs[activeTab].color}
//                                                 text-3xl sm:text-4xl text-white
//                                                 shadow-2xl ${programs[activeTab].glow}
//                                             `}
//                                         >
//                                             {programs[activeTab].icon}
//                                         </div>

//                                         <h3 className="relative text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-gray-900 dark:text-white">
//                                             {programs[activeTab].title}
//                                         </h3>

//                                         <p className="relative mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
//                                             {programs[activeTab].description}
//                                         </p>

//                                         <div className="mt-8 flex flex-col sm:flex-row gap-4">
//                                             <button
//                                                 onClick={() => navigate("/contact")}
//                                                 className={`
//                                                     group inline-flex items-center justify-center gap-2
//                                                     rounded-full bg-gradient-to-r ${programs[activeTab].color}
//                                                     px-6 sm:px-8 py-3.5 sm:py-4
//                                                     text-sm sm:text-base
//                                                     font-semibold text-white
//                                                     transition-all duration-300
//                                                     hover:scale-105 shadow-xl
//                                                 `}
//                                             >
//                                                 Enroll Now
//                                                 <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
//                                             </button>

//                                             <button className="rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-gray-800 dark:text-white transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10">
//                                                 Learn More
//                                             </button>
//                                         </div>
//                                     </div>

//                                     {/* Right */}
//                                     <div className="border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.03] p-6 sm:p-8 lg:p-12">
//                                         <h4 className="mb-6 sm:mb-8 text-2xl font-bold text-gray-900 dark:text-white">
//                                             Why Choose This Program?
//                                         </h4>

//                                         <div className="space-y-4 sm:space-y-5">
//                                             {[
//                                                 'Expert coaches with years of experience',
//                                                 'Structured curriculum for steady progress',
//                                                 'Supportive and fun learning environment',
//                                                 'Individual attention to each player'
//                                             ].map((item, index) => (
//                                                 <motion.div
//                                                     key={index}
//                                                     initial={{ opacity: 0, x: 20 }}
//                                                     animate={{ opacity: 1, x: 0 }}
//                                                     transition={{ delay: index * 0.1 }}
//                                                     className="flex items-start gap-3 sm:gap-4 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/5 p-4"
//                                                 >
//                                                     <div
//                                                         className={`
//                                                             mt-1 flex h-9 w-9 sm:h-10 sm:w-10
//                                                             items-center justify-center rounded-full
//                                                             bg-gradient-to-r ${programs[activeTab].color}
//                                                             flex-shrink-0
//                                                         `}
//                                                     >
//                                                         <FaCheckCircle className="text-white text-xs sm:text-sm" />
//                                                     </div>
//                                                     <span className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
//                                                         {item}
//                                                     </span>
//                                                 </motion.div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </AnimatePresence>

//                     {/* More Programs */}
//                     <div className="mt-20 sm:mt-24">
//                         <div className="mb-8 sm:mb-10 flex items-center justify-between">
//                             <h3 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
//                                 More Programs
//                             </h3>
//                             <div className="hidden md:block h-[1px] flex-1 ml-8 bg-gradient-to-r from-gray-300 dark:from-white/20 to-transparent" />
//                         </div>

//                         <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
//                             {programs.slice(4).map((program, index) => (
//                                 <motion.div
//                                     key={program.id}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ delay: index * 0.1 }}
//                                     whileHover={{ y: -6 }}
//                                     className="group relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 sm:p-8 backdrop-blur-2xl shadow-lg dark:shadow-none"
//                                 >
//                                     <div
//                                         className={`absolute right-0 top-0 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-gradient-to-r ${program.color} opacity-10 blur-3xl`}
//                                     />

//                                     <div
//                                         className={`
//                                             mb-5 sm:mb-6 inline-flex h-14 w-14 sm:h-16 sm:w-16
//                                             items-center justify-center rounded-2xl
//                                             bg-gradient-to-r ${program.color}
//                                             text-xl sm:text-2xl text-white shadow-2xl
//                                         `}
//                                     >
//                                         {program.icon}
//                                     </div>

//                                     <h4 className="text-xl sm:text-2xl font-bold leading-tight text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-500">
//                                         {program.title}
//                                     </h4>

//                                     <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
//                                         {program.description}
//                                     </p>

//                                     <button
//                                         className={`
//                                             mt-6 sm:mt-8 inline-flex items-center gap-2
//                                             rounded-full bg-gradient-to-r ${program.color}
//                                             px-5 sm:px-6 py-3
//                                             text-sm sm:text-base
//                                             font-semibold text-white
//                                             transition-all duration-300 hover:scale-105 shadow-xl
//                                         `}
//                                     >
//                                         Enroll Now
//                                         <FaChevronRight className="text-xs" />
//                                     </button>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* CTA */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="relative mt-20 sm:mt-24 overflow-hidden rounded-[28px] sm:rounded-[36px] border border-gray-200 dark:border-white/10 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-3xl p-6 sm:p-10 lg:p-16 text-center shadow-2xl"
//                     >
//                         <div className="relative z-10">
//                             <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white">
//                                 Start Here.
//                                 <span className="block bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
//                                     Shine Everywhere.
//                                 </span>
//                             </h3>

//                             <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-sm sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
//                                 Join Pumpa Squash Academy today and begin your squash journey with the best coaches.
//                             </p>

//                             <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
//                                 <a
//                                     href="/contact"
//                                     className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gray-900 dark:bg-white px-8 py-4 text-sm sm:text-base font-semibold text-white dark:text-black transition-all duration-300 hover:scale-105"
//                                 >
//                                     Contact Us Today
//                                     <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
//                                 </a>

//                                 <button className="w-full sm:w-auto rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-8 py-4 text-sm sm:text-base font-semibold text-gray-800 dark:text-white transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10">
//                                     Book Free Trial
//                                 </button>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>

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
import { useNavigate } from 'react-router-dom';

const Programs = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);

    const handleLearnMore = () => {
        navigate('/contact');
    };

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
    const handleWhatsApp = () => {
        window.open('https://wa.me/601111989375', '_blank');
    };


    return (
        <>
            <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
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
                            <span className="text-[11px] sm:text-sm font-semibold tracking-[0.15em] uppercase text-gray-700 dark:text-gray-300">
                                Training Programs
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-5 sm:mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white"
                        >
                            Our{' '}
                            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent font-display">
                                Programs
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mx-auto mt-4 sm:mt-5 max-w-2xl px-2 text-sm sm:text-base lg:text-lg italic font-light tracking-wide leading-[1.8] text-gray-600 dark:text-gray-400"
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
                                    <span className="font-semibold text-xs sm:text-sm leading-tight tracking-wide">
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

                                        <h3 className="relative text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
                                            {programs[activeTab].title}
                                        </h3>

                                        <p className="relative mt-5 sm:mt-6 text-base sm:text-lg leading-[1.8] font-light tracking-wide text-gray-600 dark:text-gray-300">
                                            {programs[activeTab].description}
                                        </p>

                                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                            <button
                                                onClick={() => navigate("/contact")}
                                                className={`
                                                    group inline-flex items-center justify-center gap-2
                                                    rounded-full bg-gradient-to-r ${programs[activeTab].color}
                                                    px-6 sm:px-8 py-3.5 sm:py-4
                                                    text-sm sm:text-base
                                                    font-semibold text-white tracking-wide
                                                    transition-all duration-300
                                                    hover:scale-105 shadow-xl
                                                `}
                                            >
                                                Enroll Now
                                                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                            </button>

                                            <button
                                                onClick={() => navigate("/contact")}
                                             className="rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-gray-800 dark:text-white tracking-wide transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>

                                    {/* Right */}
                                    <div className="border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.03] p-6 sm:p-8 lg:p-12">
                                        <h4 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
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
                                                    <span className="text-sm sm:text-base leading-[1.6] font-medium tracking-wide text-gray-700 dark:text-gray-300">
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
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
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

                                    <h4 className="text-xl sm:text-2xl font-extrabold leading-[1.2] tracking-tight text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-500">
                                        {program.title}
                                    </h4>

                                    <p className="mt-4 text-sm sm:text-base leading-[1.8] font-light tracking-wide text-gray-600 dark:text-gray-400">
                                        {program.description}
                                    </p>

                                    <button
                                        onClick={handleLearnMore}
                                        className={`
                                            mt-6 sm:mt-8 inline-flex items-center gap-2
                                            rounded-full bg-gradient-to-r ${program.color}
                                            px-5 sm:px-6 py-3
                                            text-sm sm:text-base
                                            font-semibold text-white tracking-wide
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
                            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
                                Start Here.
                                <span className="block bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent font-display">
                                    Shine Everywhere.
                                </span>
                            </h3>

                            <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-sm sm:text-lg leading-[1.8] font-light tracking-wide text-gray-600 dark:text-gray-300">
                                Join Pumpa Squash Academy today and begin your squash journey with the best coaches.
                            </p>

                            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="/contact"
                                    className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gray-900 dark:bg-white px-8 py-4 text-sm sm:text-base font-semibold text-white dark:text-black tracking-wide transition-all duration-300 hover:scale-105"
                                >
                                    Contact Us Today
                                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </a>

                                <button
                                    onClick={handleWhatsApp}
                                 className="w-full sm:w-auto rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-8 py-4 text-sm sm:text-base font-semibold text-gray-800 dark:text-white tracking-wide transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10">
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