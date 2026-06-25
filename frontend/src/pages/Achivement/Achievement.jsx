

import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaStar, FaAward } from "react-icons/fa";

// Images
import img1 from "../../assets/pic6.jpg";
import img6 from "../../assets/pic7.jpg";
import img3 from "../../assets/pic8.jpg";
import img4 from "../../assets/pic9.jpg";
import img2 from "../../assets/pic10.jpg";
import img5 from "../../assets/pic11.jpg";
import img7 from "../../assets/pic12.jpg";
import img8 from "../../assets/pic13.jpg";

// Student achievements
const achievements = [
    { img: img1, title: "Gold Medal Winner" },
    { img: img2, title: "Tournament Victory " },
    { img: img3, title: "State Championship" },
    { img: img4, title: "Training Excellence" },
    { img: img5, title: "National Level Player" },
    { img: img6, title: "Team Success Moment" },
];

const trainersAwards = [
    { img: img7, title: "Best Coach Award" },
    { img: img8, title: "Leadership Recognition Award" },
];

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
};

const Achievement = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">

            {/* ✨ Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />

                {/* NEW: subtle premium texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-wall.png')] opacity-[0.04]" />
            </div>

            <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24 max-w-7xl relative z-10">

                {/* HEADER */}
                <div className="text-center mb-16">

                    <motion.div
                        {...fadeUp}
                        className="inline-flex items-center gap-2 rounded-full border border-green-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl px-5 py-2 shadow-lg mb-6"
                    >
                        <FaTrophy className="text-green-600 animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-gray-700 dark:text-gray-300">
                            Achievements
                        </span>
                    </motion.div>

                    <motion.h1
                        {...fadeUp}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-3 leading-[1.1] tracking-tight"
                    >
                        Our{" "}
                        <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-display">
                            Champions
                        </span>
                    </motion.h1>

                    {/* NEW divider */}
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
                        {...fadeUp}
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-[1.8] font-light tracking-wide"
                    >
                        Celebrating victories, dedication, medals, and unforgettable sports moments
                        from our students.
                    </motion.p>

                    {/* ✨ NEW MINI STATS STRIP */}
                    <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400 font-light tracking-wide">
                        <span className="flex items-center gap-2">🏆 Championships</span>
                        <span className="flex items-center gap-2">🥇 Medals</span>
                        <span className="flex items-center gap-2">🎯 Training Excellence</span>
                    </div>
                </div>

                {/* STUDENT ACHIEVEMENTS */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">

                    {achievements.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            whileHover={{ y: -10, scale: 1.03 }}
                            className="group relative rounded-3xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
                        >

                            {/* IMAGE FRAME (unchanged but enhanced feel) */}
                            <div className="aspect-[4/4] p-3 bg-gray-100 dark:bg-gray-900">
                                <div className="w-full h-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-inner bg-black/5 dark:bg-white/5">

                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover object-[center_20%] group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* NEW subtle shine overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 opacity-40 pointer-events-none" />
                                </div>
                            </div>

                            {/* TAG */}
                            <div className="absolute top-3 left-3 bg-white/80 dark:bg-black/50 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-gray-800 dark:text-white tracking-wide">
                                Student Achievement
                            </div>

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                            {/* CONTENT */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">

                                <div className="flex items-center gap-2 mb-1">
                                    <FaMedal className="text-yellow-400" />
                                    <span className="text-sm font-semibold tracking-wide">{item.title}</span>
                                </div>

                                <p className="text-xs text-gray-200 font-light tracking-wide">
                                    Pumpa Squash Academy
                                </p>
                            </div>

                        </motion.div>
                    ))}

                </div>

                {/* TRAINER AWARDS */}
                <div className="mb-16">

                    <motion.h2
                        {...fadeUp}
                        className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight"
                    >
                        Trainer Recognition Awards
                    </motion.h2>

                    <div className="grid sm:grid-cols-2 gap-6">

                        {trainersAwards.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.04 }}
                                className="relative rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-gray-800 border border-yellow-300/40"
                            >

                                <div className="aspect-[16/9] overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="absolute top-3 left-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                    <FaAward />
                                    <span className="tracking-wide">Trainer Award</span>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/70 to-transparent">
                                    <p className="font-semibold tracking-wide">{item.title}</p>
                                </div>

                            </motion.div>
                        ))}

                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    {...fadeUp}
                    className="text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-10 text-white shadow-2xl"
                >
                    <FaStar className="text-3xl mx-auto mb-4 text-white/80" />

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">
                        Every Achievement Matters
                    </h2>

                    <p className="text-green-100 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light leading-[1.8] tracking-wide">
                        We believe success is not just about winning medals, but about discipline,
                        effort, and continuous improvement.
                    </p>
                </motion.div>

            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 dark:via-green-500/30 to-transparent" />

        </section>
    );
};

export default Achievement;