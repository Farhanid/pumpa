import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    // State for animated counters
    const [counters, setCounters] = useState({
        families: 0,
        rating: 0,
        years: 0,
        ages: 0
    });
    const [hasAnimated, setHasAnimated] = useState(false);
    const statsRef = useRef(null);

    // Counter animation function
    const animateNumber = (start, end, duration, callback) => {
        const startTime = performance.now();
        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(start + (end - start) * easeOutQuart);
            callback(currentValue);

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };
        requestAnimationFrame(updateCounter);
    };

    // Intersection Observer for stats animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);

                        setTimeout(() => {
                            animateNumber(0, 7, 2000, (value) => {
                                setCounters(prev => ({ ...prev, families: value }));
                            });
                        }, 0);

                        setTimeout(() => {
                            animateNumber(0, 100, 2000, (value) => {
                                setCounters(prev => ({ ...prev, rating: value }));
                            });
                        }, 200);

                        setTimeout(() => {
                            animateNumber(0, 6, 2000, (value) => {
                                setCounters(prev => ({ ...prev, years: value }));
                            });
                        }, 400);

                        setTimeout(() => {
                            setCounters(prev => ({ ...prev, ages: 1 }));
                        }, 600);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <motion.div
            ref={statsRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">

                {/* Stat 1 - Happy Families */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative group"
                >
                    <div className="text-center">
                        <div className="relative inline-block">
                            <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tabular-nums">
                                {counters.families}
                                <span className="text-green-600 dark:text-green-400">+</span>
                            </span>
                            <div className="absolute -top-2 -right-3 w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium tracking-wide">
                            Happy Families
                        </p>
                        <div className="w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-3 group-hover:w-12 transition-all duration-300 rounded-full"></div>
                    </div>
                </motion.div>

                {/* Stat 2 - 5-Star Reviews */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative group"
                >
                    <div className="text-center">
                        <div className="relative inline-block">
                            <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tabular-nums">
                                {counters.rating}
                                <span className="text-green-600 dark:text-green-400">%</span>
                            </span>
                            <div className="absolute -top-2 -right-3 w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium tracking-wide">
                            5-Star Reviews
                        </p>
                        <div className="flex justify-center gap-0.5 mt-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Stat 3 - Years of Trust */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative group"
                >
                    <div className="text-center">
                        <div className="relative inline-block">
                            <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tabular-nums">
                                {counters.years}
                                <span className="text-green-600 dark:text-green-400">+</span>
                            </span>
                            <div className="absolute -top-2 -right-3 w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium tracking-wide">
                            Years of Excellence
                        </p>
                        <div className="w-full max-w-[60px] h-1 bg-gray-100 dark:bg-gray-800 rounded-full mx-auto mt-3 overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.8 }}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Stat 4 - Age Range */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative group"
                >
                    <div className="text-center">
                        <div className="relative inline-block">
                            <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                                {counters.ages === 1 ? 'All' : ''}
                                <span className="text-green-600 dark:text-green-400 text-2xl ml-1">Ages</span>
                            </span>
                            <div className="absolute -top-2 -right-2 w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium tracking-wide">
                            Kids to Adults
                        </p>
                        <div className="flex items-center justify-center gap-1 mt-3 text-xs">
                            <span className="text-gray-400">6+</span>
                            <div className="w-8 h-px bg-gray-300 dark:bg-gray-700"></div>
                            <span className="text-gray-400">60+</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Stats;