import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Animated Counter Component
export const AnimatedCounter = ({ target, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let startTime;
            let animationFrame;

            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);
                const currentCount = Math.floor(progress * target);
                setCount(currentCount);

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate);
                } else {
                    setCount(target);
                }
            };

            animationFrame = requestAnimationFrame(animate);

            return () => {
                if (animationFrame) cancelAnimationFrame(animationFrame);
            };
        }
    }, [isInView, target, duration]);

    return (
        <span className="text-3xl font-bold text-green-600 dark:text-green-400">
            {count}{suffix}
        </span>
    );
};

// Stats Section Component
<div className="relative">
    {/* Decorative background */}
    <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-3xl blur-2xl"></div>

    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="relative mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
    >
        {/* Stat 1: Happy Families */}
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            className="text-center group"
        >
            <div className="relative inline-block mb-2">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative text-4xl mb-2">👨‍👩‍👧‍👦</div>
            </div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                <AnimatedCounter target={7} suffix="+" />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Happy Families</div>
            <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto transition-all duration-300 mt-2 rounded-full"></div>
        </motion.div>

        {/* Stat 2: 5-Star Reviews */}
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            className="text-center group"
        >
            <div className="relative inline-block mb-2">
                <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative text-4xl mb-2">⭐</div>
            </div>
            <div className="text-3xl font-bold text-yellow-500">
                <AnimatedCounter target={100} suffix="%" />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">5-Star Reviews</div>
            <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto transition-all duration-300 mt-2 rounded-full"></div>
        </motion.div>

        {/* Stat 3: Years of Trust */}
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
            className="text-center group"
        >
            <div className="relative inline-block mb-2">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative text-4xl mb-2">🏆</div>
            </div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                <AnimatedCounter target={6} suffix="+" />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years of Trust</div>
            <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto transition-all duration-300 mt-2 rounded-full"></div>
        </motion.div>

        {/* Stat 4: All Ages */}
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
            className="text-center group"
        >
            <div className="relative inline-block mb-2">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative text-4xl mb-2">🎯</div>
            </div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                <AnimatedCounter target={100} suffix="%" />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">All Ages Welcome</div>
            <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto transition-all duration-300 mt-2 rounded-full"></div>
        </motion.div>
    </motion.div>
</div>