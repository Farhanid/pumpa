import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaPause, FaPlay } from 'react-icons/fa';

export const BenefitsCarosel = ({ benefits }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % benefits.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, benefits.length]);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
        setIsAutoPlaying(false);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % benefits.length);
        setIsAutoPlaying(false);
    };

    const currentBenefit = benefits[currentIndex];

    return (
        <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-xl text-center"
                >
                    <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        {React.createElement(currentBenefit.icon, { className: "text-white text-3xl" })}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {currentBenefit.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        {currentBenefit.desc}
                    </p>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
                <button
                    onClick={goToPrev}
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                >
                    <FaArrowLeft className="text-gray-600 dark:text-gray-400" />
                </button>

                <div className="flex gap-2">
                    {benefits.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setCurrentIndex(idx);
                                setIsAutoPlaying(false);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx
                                    ? 'w-8 bg-green-600'
                                    : 'w-2 bg-gray-300 dark:bg-gray-600'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={goToNext}
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                >
                    <FaArrowRight className="text-gray-600 dark:text-gray-400" />
                </button>

                <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors ml-2"
                >
                    {isAutoPlaying ? (
                        <FaPause className="text-gray-600 dark:text-gray-400 text-sm" />
                    ) : (
                        <FaPlay className="text-gray-600 dark:text-gray-400 text-sm" />
                    )}
                </button>
            </div>
        </div>
    );
};

// Use it in your component:
<motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-20"
>
    <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Our Pathway Works
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive approach that develops skilled players and confident individuals
        </p>
    </div>

    <BenefitsCarousel benefits={benefits} />
</motion.div>