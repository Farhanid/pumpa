import React from 'react';
import { motion } from 'framer-motion';
import {
    FaTrophy,
    FaHeart,
    FaUsers,
    FaMedal,
    FaChalkboardTeacher,
    FaQuoteLeft,
    FaQuoteRight,
    FaStar,
    FaAward,
    FaRunning,
    FaBrain,
    FaHandHoldingHeart
   
} from 'react-icons/fa';
import BackToTop from '../../components/Reusable/BackToTop';

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
            <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24 max-w-7xl relative z-10">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 rounded-full border border-green-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl px-5 py-2 shadow-lg mb-6"
                        >
                            <FaHeart className="text-green-600 text-sm" />
                            <span className="text-xs sm:text-sm font-semibold tracking-wider text-gray-700 dark:text-gray-300 uppercase">
                                Our Story
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white mb-6"
                        >
                            About{' '}
                            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                Pumpa
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mb-6"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light italic"
                        >
                            Start Here... Shine Everywhere
                        </motion.p>
                    </div>

                    {/* Mission Statement */}
                    <motion.div
                        {...fadeInUp}
                        className="relative mb-20 overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 p-8 sm:p-12 text-center shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10">
                            <FaQuoteLeft className="text-4xl text-white/30 mx-auto mb-4" />
                            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-relaxed max-w-4xl mx-auto">
                                To help children and adults enjoy squash, build confidence,
                                and develop a lifelong love for sport.
                            </p>
                            <FaQuoteRight className="text-4xl text-white/30 mx-auto mt-4" />
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                                More Than Just a Game
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                At Pumpa, we believe squash is more than just a game. It teaches discipline,
                                resilience, focus, teamwork, and confidence. We also place strong importance
                                on mental well-being, creating a positive and supportive environment where
                                every player feels safe, motivated, and valued.
                            </p>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We believe every player is unique. Every individual learns differently, grows
                                at their own pace, and deserves guidance that brings out their best without
                                pressure or comparison.
                            </p>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Our coaching approach focuses on building strong foundations, positive values,
                                and a growth mindset. From beginners to competitive athletes, we help players
                                improve their skills, fitness, confidence, and character both on and off the court.
                            </p>

                            <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl p-6 border-l-4 border-green-500">
                                <p className="text-gray-800 dark:text-gray-200 font-semibold text-lg">
                                    At Pumpa, success is not only measured by trophies, but also by growth,
                                    effort, sportsmanship, and the love for the game.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {stats.map((stat, idx) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                                    >
                                        <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                                            <Icon className="text-white text-2xl" />
                                        </div>
                                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Our Values */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                            >
                                Our Core Values
                            </motion.h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, idx) => {
                                const Icon = value.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        {...fadeInUp}
                                        whileHover={{ y: -5 }}
                                        className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-200/50 dark:border-gray-700/50 group"
                                    >
                                        <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="text-white text-2xl" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            {value.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Founder Section */}
                    <div className="mb-20">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 rounded-full border border-green-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl px-4 py-1.5 mb-4">
                                    <FaStar className="text-green-600 text-xs" />
                                    <span className="text-xs font-semibold tracking-wider text-gray-700 dark:text-gray-300 uppercase">
                                        Founder
                                    </span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                    Coach Pushppa Devi
                                </h2>

                                <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6"></div>

                                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                                    <p>
                                        Former Malaysian professional squash player, former World Top 68,
                                        and a WSF Level 3 Certified Coach.
                                    </p>
                                    <p>
                                        With over two decades in squash, Coach Pushppa has dedicated her journey
                                        to developing not only better players, but stronger and more confident individuals.
                                    </p>
                                    <p>
                                        Her coaching philosophy focuses on discipline, resilience, mental strength,
                                        and creating a positive environment where every player can grow at their own pace.
                                    </p>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    <div className="bg-amber-50 dark:bg-amber-950/20 rounded-xl px-4 py-2">
                                        <FaAward className="text-amber-600 inline mr-2" />
                                        <span className="text-sm text-gray-700 dark:text-gray-300">
                                            Malaysian Influential Educator Award 2023
                                        </span>
                                    </div>
                                    <div className="bg-amber-50 dark:bg-amber-950/20 rounded-xl px-4 py-2">
                                        <FaAward className="text-amber-600 inline mr-2" />
                                        <span className="text-sm text-gray-700 dark:text-gray-300">
                                            Top 50 Malaysian Influential Educators 2024
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-6 border-l-4 border-green-500">
                                    <FaQuoteLeft className="text-green-600/30 text-2xl mb-2" />
                                    <p className="text-gray-800 dark:text-gray-200 font-semibold text-lg italic">
                                        I don't just build better players. I build stronger people.
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                                        -- Coach Pushppa Devi
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur-2xl opacity-20"></div>
                                    <div className="relative bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl overflow-hidden shadow-2xl">
                                        <div className="aspect-square bg-gray-800 flex items-center justify-center">
                                            <div className="text-center p-12">
                                                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <FaChalkboardTeacher className="text-white text-5xl" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-white">Coach Pushppa Devi</h3>
                                                <p className="text-green-100 mt-2">Founder and Head Coach</p>
                                                <div className="mt-4 flex justify-center gap-2">
                                                    <FaStar className="text-yellow-400" />
                                                    <FaStar className="text-yellow-400" />
                                                    <FaStar className="text-yellow-400" />
                                                    <FaStar className="text-yellow-400" />
                                                    <FaStar className="text-yellow-400" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Co-Founder Section */}
                    <div className="mb-20">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-2 lg:order-1"
                            >
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-20"></div>
                                    <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl overflow-hidden shadow-2xl">
                                        <div className="aspect-square bg-gray-800 flex items-center justify-center">
                                            <div className="text-center p-12">
                                                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <FaChalkboardTeacher className="text-white text-5xl" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-white">Yogeswaran</h3>
                                                <p className="text-blue-100 mt-2">Co-Founder and Head Coach</p>
                                                <div className="mt-4 flex justify-center gap-2">
                                                    <FaStar className="text-yellow-400" />
                                                    <FaStar className="text-yellow-400" />
                                                    <FaStar className="text-yellow-400" />
                                                    <FaStar className="text-yellow-400" />
                                                    <FaStar className="text-yellow-400" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-1 lg:order-2"
                            >
                                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl px-4 py-1.5 mb-4">
                                    <FaStar className="text-blue-600 text-xs" />
                                    <span className="text-xs font-semibold tracking-wider text-gray-700 dark:text-gray-300 uppercase">
                                        Co-Founder and Head Coach
                                    </span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                    Yogeswaran
                                </h2>

                                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6"></div>

                                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                                    <p>
                                        Co-Founder and Head Coach of Pumpa Squash Academy with over 22 years
                                        of coaching experience in squash.
                                    </p>
                                    <p>
                                        As a former high-level player who competed in Malaysia Games (SUKMA),
                                        he brings valuable competitive experience and knowledge to his coaching journey.
                                    </p>
                                    <p>
                                        WSF Certified Coach, he specialises in grassroots development programs
                                        and has developed numerous junior top 8 ranked players as well as social
                                        and recreational players.
                                    </p>
                                    <p>
                                        He was also appointed as the State Coach for Junior High Performance by
                                        Majlis Sukan Negeri Selangor in the year 2013.
                                    </p>
                                    <p>
                                        He is passionate about nurturing young athletes through professional coaching,
                                        discipline, and mentorship while creating a positive environment for players
                                        to grow both on and off the court.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 p-8 sm:p-12 text-center shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                                Ready to Start Your Journey?
                            </h3>
                            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                                Join Pumpa Squash Academy today and discover the champion within you
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    Get Started Today
                                    <FaRunning className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="/programs"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                                >
                                    View Our Programs
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <BackToTop threshold={300} position="bottom-8 right-8" />
        </>
    );
};

export default About;