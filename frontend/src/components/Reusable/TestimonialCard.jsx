import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaUserCircle } from 'react-icons/fa';

const TestimonialCard = ({ testimonial, index, isExpanded, onToggleReadMore }) => {
    const [localExpanded, setLocalExpanded] = useState(isExpanded || false);

    const shouldTruncate = testimonial.content.length > 150;
    const displayContent = localExpanded
        ? testimonial.content
        : testimonial.content.slice(0, 150) + (shouldTruncate ? '...' : '');

    const handleToggle = () => {
        const newState = !localExpanded;
        setLocalExpanded(newState);
        if (onToggleReadMore) {
            onToggleReadMore(testimonial.id, newState);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
        >
            <FaQuoteLeft className="text-4xl text-green-500/30 mb-4" />

            <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                ))}
            </div>

            <div className="flex-grow">
                <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed mb-3 font-sans italic">
                    “{displayContent}”
                </p>
                {shouldTruncate && (
                    <button
                        onClick={handleToggle}
                        className="text-green-600 dark:text-green-400 text-sm font-semibold hover:text-green-700 dark:hover:text-green-300 transition-colors mb-4 inline-flex items-center gap-1"
                    >
                        {localExpanded ? 'Read less' : 'Read more'}
                        <svg className={`w-3 h-3 transition-transform ${localExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                )}
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                    <FaUserCircle className="text-4xl text-green-600 dark:text-green-400 flex-shrink-0" />
                    <div className="flex-1">
                        <h4 className="font-serif font-bold text-gray-900 dark:text-white tracking-tight break-words">
                            {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-light tracking-wide break-words">
                            {testimonial.role}
                        </p>
                    </div>
                </div>

                {testimonial.achievement && (
                    <span className="text-xs font-medium uppercase tracking-wider bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full flex-shrink-0 ml-2">
                        {testimonial.achievement}
                    </span>
                )}
            </div>
        </motion.div>
    );
};

export default TestimonialCard;